import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Styled } from "./styled";

const ConfirmModal = ({
    isOpen,
    title = "Are you sure?",
    message = "",
    confirmText = "Confirm",
    cancelText = "Cancel",
    tone = "default",
    onConfirm,
    onCancel,
}) => {
    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onCancel?.();
            }
        };

        document.body.style.overflow = "hidden";

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;

            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onCancel]);

    if (!isOpen) {
        return null;
    }

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onCancel?.();
        }
    };

    return (
        <Styled.Overlay onMouseDown={handleOverlayClick} role="presentation">
            <Styled.Card
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-dialog-title"
                aria-describedby={
                    message ? "confirm-dialog-message" : undefined
                }
            >
                <Styled.IconBox $tone={tone}>
                    <FaExclamationTriangle aria-hidden="true" />
                </Styled.IconBox>

                <Styled.Content>
                    <Styled.Title id="confirm-dialog-title">
                        {title}
                    </Styled.Title>

                    {message && (
                        <Styled.Message id="confirm-dialog-message">
                            {message}
                        </Styled.Message>
                    )}
                </Styled.Content>

                <Styled.Actions>
                    <Styled.CancelButton type="button" onClick={onCancel}>
                        {cancelText}
                    </Styled.CancelButton>

                    <Styled.ConfirmButton
                        type="button"
                        $tone={tone}
                        onClick={onConfirm}
                        autoFocus
                    >
                        {confirmText}
                    </Styled.ConfirmButton>
                </Styled.Actions>
            </Styled.Card>
        </Styled.Overlay>
    );
};

export default ConfirmModal;
