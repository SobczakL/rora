import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import SaveButton from "../../components/ui/button/SaveButton";
import UserProfileForm from "../../components/ui/form/UserProfileForm";
import { useNavigate } from "react-router-dom";

function UserProfile() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    };

    return (
        <Flex
            position="relative"
            direction="column"
            bg="twilight"
            p="16px"
            gap="16px"
            h="100%"
        >
            <Flex justify="space-between">
                <ChevronLeftIcon
                    boxSize="32px"
                    color="snow"
                    onClick={handleClick}
                />
            </Flex>
            <UserProfileForm />
        </Flex>
    );
}

export default UserProfile;
