import { Flex, Img } from "@chakra-ui/react";
import roraLogo from "../../assets/logo/rora-main.svg";
import LoginForm from "../../components/ui/form/LoginForm";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";

function Login() {
    const navigate = useNavigate();
    const { location, locationError } = useLocation();

    const handleVerifyUser = () => {
        if(!location){
            alert(locationError);
        }
        else{
            navigate("/home");
        }
    };
    return (
        <Flex 
        direction="column" 
        gap="64px" 
        pt="72px" 
        px="24px" 
        h="100%">
            <Img src={roraLogo} px="8px" />
            <LoginForm handleVerifyUser={handleVerifyUser} />
        </Flex>
    );
}

export default Login;
