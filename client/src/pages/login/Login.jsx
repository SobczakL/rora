import { Flex, Img} from "@chakra-ui/react";
import roraLogo from "../../assets/logo/rora-main.svg";
import LoginForm from "../../components/ui/form/LoginForm";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import { useDelayedValue } from "../../utils/useDelayedValue"
import LoginModal from "../../components/ui/modal/LoginModal";
import TestUserButton from "../../components/ui/button/TestUserButton";

function Login() {
    const navigate = useNavigate();
    let { location, locationError } = useLocation();

    const handleVerifyUser = () => {
        if(!location){
            alert(locationError);
        }
        else{
            navigate("/home");
        }
    };

    //Delayed time for new user button to show to user
    const delay = useDelayedValue(false, 3000);

    return (
        <Flex 
        direction="column" 
        gap="60px" 
        pt="72px" 
        px="24px"
        align="center"
        h="100%"
        >
            <Img src={roraLogo} px="8px" />
            <LoginForm handleVerifyUser={handleVerifyUser} />
            {delay && (
                <TestUserButton 
                innerText="Not a user yet?"
                />
            )}
        </Flex>
    );
}

export default Login;
