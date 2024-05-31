import clsx from 'clsx';
import type { TokenWithBalance } from 'common/models/token';
import { InfiniteList } from 'ui/common/components/display/InfiniteList/InfiniteList';
import NothingToShow from 'ui/common/components/feedback/NothingToShow/NothingToShow';
import { useTranslate } from 'ui/locale';
import TokenCard from 'ui/token/components/display/Token/TokenCard';

import useGetTokens from '../../../wallet/query/useGetTokens';

export type TokenListProps = {
  className?: string;
  style?: React.CSSProperties;
};

const TokenCardSkeleton = () => (
  <TokenCard
    token={{
      decimals: 0,
      issuer: '',
      currency: 'loading...',
    }}
    loading
    balance={'100000'}
  />
);

function TokenList({ className, ...rest }: TokenListProps) {
  const translate = useTranslate();

  function fetchNextPage() {}

  const { data, isLoading } = useGetTokens();

  return (
    <InfiniteList<TokenWithBalance>
      className={clsx('TokenList', className)}
      renderItem={(token, i) => (
        <TokenCard
          key={i}
          token={token}
          balance={token.balance.formatAmount()}
        />
      )}
      isLoading={isLoading}
      Skeleton={TokenCardSkeleton}
      numberOfSkeletons={5}
      data={data}
      nothingToShow={
        <NothingToShow
          css={{ paddingTop: '2rem' }}
          message={translate('nothingToShow', { context: 'token' })}
        />
      }
      onEndReached={fetchNextPage}
      {...rest}
    />
  );
}

export default TokenList;
