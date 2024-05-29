import {
  Chip,
  Col,
  Label,
  Popover,
  Row,
  TextField,
  Typography,
} from '@peersyst/react-components';
import type { ReactNode } from 'react';
import { useState } from 'react';

import Amount from '../common/utils/Amount';
import AlertCallout from '../ui/common/components/feedback/AlertCallout/AlertCallout';
import Modal from '../ui/common/components/feedback/Modal/Modal';
import AmountField from '../ui/common/components/input/AmountField/AmountField';
import Button from '../ui/common/components/input/Button/Button';
import NumericField from '../ui/common/components/input/NumericField/NumericField';
import Card from '../ui/common/components/surface/Card/Card';
import Balance from '../ui/common/components/display/Balance/Balance';
import AccountChip from 'ui/wallet/components/display/AccountChip';

function PlaygroundComponent({
  label,
  children,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <Col gap="1rem">
      <Typography variant="h5">{label}</Typography>
      <Row gap="2rem">{children}</Row>
    </Col>
  );
}

function Playground() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Col
      gap={'3rem'}
      style={{ marginTop: '4rem', padding: '0 10rem 10rem 10rem' }}
    >
      <Col justifyContent="center" alignItems="center" gap="1rem">
        <Typography variant="h1" textAlign="center">
          Welcome to XRP Snap components playground 🎉
        </Typography>
        <a href="/">
          <Button size="lg">Go home</Button>
        </a>
      </Col>
      <PlaygroundComponent label="Typography">
        {(
          [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'body1',
            'body2',
            'caption',
            'button',
          ] as const
        ).map((variant) => (
          <Label label={variant}>
            <Typography variant={variant}>{variant}</Typography>
          </Label>
        ))}
        <Label label={'Light'}>
          <Typography variant="body1" fontWeight="500" light>
            Light
          </Typography>
        </Label>
      </PlaygroundComponent>
      <PlaygroundComponent label="Primary Button">
        <Button>Primary</Button>
        <Button disabled>Primary</Button>
      </PlaygroundComponent>
      <PlaygroundComponent label="Secondary Button">
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
      </PlaygroundComponent>
      <PlaygroundComponent label="TextField">
        <TextField style={{ width: 200 }} label="Write something here" />
        <TextField
          label={'Disabled input'}
          style={{ width: 200 }}
          disabled
          placeholder="Disabled placeholder"
        />
      </PlaygroundComponent>
      <PlaygroundComponent label="NumericField">
        <NumericField style={{ width: 200 }} />
      </PlaygroundComponent>
      <PlaygroundComponent label="AmountField">
        <AmountField
          balance={new Amount('1000000000001', 6, 'XRP')}
          style={{ width: 200 }}
        />
      </PlaygroundComponent>
      <PlaygroundComponent label="AlertCallout">
        <AlertCallout
          type="info"
          content={'This is an info alert'}
          style={{ flex: 1 }}
        />
      </PlaygroundComponent>
      <PlaygroundComponent label="Popover">
        <Popover showOn="click">
          <Popover.Content>Hover me</Popover.Content>
          <Popover.Popper>
            <Col>
              <Row>Connect to XRP Snap</Row>
            </Col>
          </Popover.Popper>
        </Popover>
      </PlaygroundComponent>
      <PlaygroundComponent label="Modal">
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          closable={true}
          title={'Modal'}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <Typography variant="body1">Content</Typography>
        </Modal>
      </PlaygroundComponent>
      <PlaygroundComponent label="Card">
        <Card style={{ padding: 20 }}>
          <Typography variant={'body1'}>Card content</Typography>
        </Card>
      </PlaygroundComponent>
      <PlaygroundComponent label="Chip">
        <Chip label="RU3x07...da52" />
        <Chip label="RU3x07...da52" variant="filled" />
      </PlaygroundComponent>
      <PlaygroundComponent label="Account Chip">
        <AccountChip address="rnGUZ6FzJyazXqkqBheSQdw7c5JfohZafv" />
      </PlaygroundComponent>
      <PlaygroundComponent label="Balance">
        <Balance balance="10" currency="XRP" variant="body2" />
        <Balance balance="10" currency="XRP" variant="body2" hidden />
      </PlaygroundComponent>
    </Col>
  );
}

export default Playground;
