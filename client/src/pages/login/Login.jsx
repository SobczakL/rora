import { Flex, Img, useDisclosure} from "@chakra-ui/react";
import roraLogo from "../../assets/logo/rora-main.svg";
import LoginForm from "../../components/ui/form/LoginForm";
import { useNavigate } from "react-router-dom";
import useLocation from "../../utils/useLocation";
import { useDelayedValue } from "../../utils/useDelayedValue"
import LoginModal from "../../components/ui/modal/NewUserModal";
import TestUserButton from "../../components/ui/button/TestUserButton";
import { useEffect, useState } from "react";
import NewUserModal from "../../components/ui/modal/NewUserModal";

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

    //New user test account details launch
    const [newUserDetails, SetNewUserDetails] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const handleNewUserClick = () =>{
        // if(newUserDetails === true){
        //     return <NewUserModal isOpen={isOpen} onClose={onClose} />
        // }
        SetNewUserDetails(!newUserDetails);
    }

    useEffect(() => {
        console.log(newUserDetails)        
    }, [newUserDetails])
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
                onClick={handleNewUserClick}
                />
            )}
            {/* {newUserDetails && (
                <NewUserModal 
                isOpen={isOpen}
                onClose={onClose}
                />
            )} */}
        </Flex>
    );
}

export default Login;
