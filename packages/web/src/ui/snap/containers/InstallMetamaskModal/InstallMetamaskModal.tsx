import { Col, Row, Typography, useConfig, Image, useTheme } from "@peersyst/react-components";
import Modal from "ui/common/components/feedback/Modal/Modal";
import { ModalProps } from "ui/common//components/feedback/Modal/Modal.types";
import AlertCallout from "ui/common//components/feedback/AlertCallout/AlertCallout";
import Button from "ui/common//components/input/Button/Button";
import { useTranslate } from "ui/locale";
import ExternalLink from "ui/common/components/navigation/ExternalLink/ExternalLink";
import { metamask } from "ui/assets/images";
import { css } from "styled-components";

const bounceAnimation = css`
    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }

    &:hover img {
        animation: bounce 0.5s ease-in-out 2;
    }
`;

function InstallMetamaskModal({ ...rest }: ModalProps) {
    const { spacing } = useTheme();
    const translate = useTranslate();

    const metamaskInstallationLink = useConfig("metamaskInstallationLink");
    return (
        <Modal {...rest} title={translate("installMetamaskExtension")} subtitle={translate("installMetamaskExtensionDescription")}>
            <Col gap={spacing[6]}>
                <AlertCallout
                    type="info"
                    content={<Typography variant="body1">{translate("installMetamaskExtensionExplanation")}</Typography>}
                />
                <Row gap="1rem">
                    <Button variant="secondary" onClick={() => window.location.reload()}>
                        {translate("reload")}
                    </Button>
                    <ExternalLink to={metamaskInstallationLink} css={{ flex: 1 }}>
                        <Button fullWidth css={bounceAnimation}>
                            <Row gap="0.5rem" alignItems="center">
                                <Image css={{ width: "1.5rem" }} src={metamask} alt="MetaMask Logo" />
                                {translate("installMetamask")}
                            </Row>
                        </Button>
                    </ExternalLink>
                </Row>
            </Col>
        </Modal>
    );
}

export default InstallMetamaskModal;
