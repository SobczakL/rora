import { FormControl, Box } from "@chakra-ui/react"
import LoginInput from "../input/LoginInput"
import { useState } from 'react'
import axios from 'axios'
import { baseURL } from "../../../services/baseURL"
import LoginButton from "../button/LoginButton"

function LoginForm({handleVerifyUser}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) =>{
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        axios.post(`${baseURL}/login`,{
        username: username,
        password: password
        })
        .then(response => {
        console.log(response.data);
        })
        .catch(error => {
        console.error(error);
        })
        .finally(() =>{
        setTimeout(() =>{
            setIsLoading(false);
            handleVerifyUser()
        }, 4000)
        })
    }
    return (
        <FormControl
        display='flex'
        flexDirection='column'
        gap='16px'
        fontFamily='latoR'
        >
        <LoginInput placeholderText='Username' type='text' onChange={handleUsernameChange}/>
        <LoginInput placeholderText='Password' type='password' onChange={handlePasswordChange}/>
        <Box my='16px' mx='auto'>
            <LoginButton innerText='Log In' isLoading={isLoading} onClick={handleSubmit}/> 
        </Box>
        </FormControl> 
    )
}

export default LoginForm