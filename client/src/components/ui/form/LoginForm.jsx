import { FormControl, Box } from "@chakra-ui/react";
import LoginInput from "../input/LoginInput";
import { useState } from "react";
import axios from "axios";
import { serverURL } from "../../../services/config";
import LoginButton from "../button/LoginButton";

function LoginForm({ handleVerifyUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUsernameError(false);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(false);
    };

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        axios
            .post(`${serverURL}/login`, {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem(
                    "username",
                    JSON.stringify(response.data.username)
                );
                localStorage.setItem(
                    "first_name",
                    JSON.stringify(response.data.first_name)
                );
                setTimeout(() => {
                    setIsLoading(false);
                    handleVerifyUser();
                }, 4000);
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.data.error === "USER_NOT_FOUND") {
                        setUsernameError(true);
                        setPasswordError(true);
                        alert("User not found.");
                    } else if (
                        error.response.data.error === "INCORRECT_PASSWORD"
                    ) {
                        setPasswordError(true);
                        alert("Login unsuccessful. Incorrect Password.");
                    }
                } else {
                    alert("An error occurred. Please try again later.");
                }
                setIsLoading(false);
            });
    };
    return (
        <FormControl
            display="flex"
            flexDirection="column"
            gap="16px"
            fontFamily="latoR"
        >
            <LoginInput
                placeholderText="Username"
                type="text"
                onChange={handleUsernameChange}
                errorState={usernameError}
            />
            <LoginInput
                placeholderText="Password"
                type="password"
                onChange={handlePasswordChange}
                errorState={passwordError}
            />
            <Box my="16px" mx="auto">
                <LoginButton
                    innerText="Log In"
                    isLoading={isLoading}
                    onClick={handleSubmit}
                />
            </Box>
        </FormControl>
    );
}

export default LoginForm;
