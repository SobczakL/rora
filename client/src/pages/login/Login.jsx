import { Flex, Img } from "@chakra-ui/react";
import roraLogo from "../../assets/logo/rora-main.svg";
import LoginForm from "../../components/ui/form/LoginForm";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";

function Login() {
    const navigate = useNavigate();
    const { location, locationError } = useLocation();

    const handleVerifyUser = () => {
        navigate("/home");
    };
    return (
        <Flex direction="column" gap="32px" py="72px" px="24px">
            <Img src={roraLogo} px="16px" />
            <LoginForm handleVerifyUser={handleVerifyUser} />
        </Flex>
    );
}

export default Login;
