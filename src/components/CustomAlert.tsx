import { FC } from "react";

interface CustomAlertProps {
    open: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

const CustomAlert: FC<CustomAlertProps> = ({
    open,
    title,
    message,
    onClose,
}) => {
    if (!open) {
        return null;
    }

    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <h2 className="custom-alert__title">{title}</h2>
                <p className="custom-alert__message">{message}</p>
                <button className="custom-alert__btn" onClick={onClose}>
                    Chiqish
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
