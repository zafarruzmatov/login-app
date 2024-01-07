import CustomAlert from "~components/CustomAlert";
import { useAlertContext } from "~context/AlertProvider";

const LoginAlert = () => {
    const { open, closeAlert } = useAlertContext();

    return (
        <CustomAlert
            open={open}
            message="Parol xato"
            title="❗"
            onClose={closeAlert}
        />
    );
};

export default LoginAlert;
