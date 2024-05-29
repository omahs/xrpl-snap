import { Col, Typography } from '@peersyst/react-components';
import { useControlled } from '@peersyst/react-hooks';
import {
  CloseModalButton,
  ModalHeader,
  ModalRoot,
} from 'ui/common/components/feedback/Modal/Modal.styles';
import type { ModalProps } from 'ui/common/components/feedback/Modal/Modal.types';

const Modal = ({
  open: openProp,
  title,
  children,
  elevation = 0,
  onClose,
  closable = true,
  subtitle,
  ...rest
}: ModalProps): JSX.Element => {
  const [open, setOpen] = useControlled(true, openProp);

  const handleClose = () => {
    onClose?.();
    setOpen(false);
  };

  return (
    <ModalRoot
      open={open}
      elevation={elevation}
      onClose={handleClose}
      closable={closable}
      {...rest}
    >
      <Col css={{ height: '100%' }} gap="2rem" className="ModalContainer">
        {title && (
          <ModalHeader>
            <Typography variant="h4" fontWeight={700}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body1" fontWeight={400} color="grey.200">
                {subtitle}
              </Typography>
            )}
          </ModalHeader>
        )}
        {closable && <CloseModalButton onClick={handleClose} />}
        {children}
      </Col>
    </ModalRoot>
  );
};

export default Modal;