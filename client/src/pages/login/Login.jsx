import {Flex, Img, FormControl, Input} from '@chakra-ui/react'
import Primary from "../../components/ui/Button/Primary"

function Login() {

  return (
    <Flex>
      <Img />
      <FormControl>
        <Input/>
        <Input/>
        <Primary innerText='Log In'/>
      </FormControl>
    </Flex>
  )
}

export default Login
