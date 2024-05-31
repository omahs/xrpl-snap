import { Col, useTheme } from '@peersyst/react-components';
import Modal from '../../../common/components/feedback/Modal/Modal';
import { ModalProps } from '../../../common/components/feedback/Modal/Modal.types';
import AlertCallout from '../../../common/components/feedback/AlertCallout/AlertCallout';
import Button from '../../../common/components/input/Button/Button';
import { useTranslate } from '../../../locale';
import InfoDisplay from '../../../common/components/display/InfoDisplay/InfoDisplay';
import { useControlled } from '@peersyst/react-hooks';
import useGetActiveNetwork from 'ui/network/query/useGetActiveNetwork';
import useGetAddress from 'ui/wallet/hooks/useGetAddress';

function AccountInfoModal({
  defaultOpen,
  open: openProp,
  onClose,
  ...rest
}: ModalProps) {
  const { spacing } = useTheme();
  const translate = useTranslate();
  const [open, setOpen] = useControlled(defaultOpen, openProp, onClose);
  const { data: activeNetwork } = useGetActiveNetwork();
  const address = useGetAddress();

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      {...rest}
      title={translate('accountInfo')}
    >
      <Col gap={spacing[6]}>
        <InfoDisplay
          title={translate('network')}
          content={activeNetwork?.name!}
        />
        <InfoDisplay title={translate('xrpAccount')} content={address} />
        <AlertCallout type="info" content={translate('accountInfoCallout')} />
        <Button fullWidth variant="primary" onClick={() => setOpen(false)}>
          {translate('okGotIt')}
        </Button>
      </Col>
    </Modal>
  );
}

export default AccountInfoModal;