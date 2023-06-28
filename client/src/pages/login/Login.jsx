import { Flex, Img } from "@chakra-ui/react";
import roraLogo from "../../assets/logo/rora-main.svg";
import LoginForm from "../../components/ui/form/LoginForm";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";

function Login() {
    const navigate = useNavigate();
    let { location, locationError } = useLocation();

    const handleVerifyUser = () => {
        if(!location){
            // alert(locationError);
            const location = {
                latitude: 43.634175037674915,
                longitude: -79.41226598221367
            };
            localStorage.setItem(
                "location",
                JSON.stringify(location)
            );
            navigate("/home")
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
