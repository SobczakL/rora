import {Flex, Img, } from '@chakra-ui/react'
import roraLogo from '../../assets/logo/rora-main.svg'
import LoginForm from '../../components/ui/form/LoginForm'

function Login() {

  return (
    <Flex
    direction='column'
    gap='32px'
    py='72px'
    px='24px'
    >
      <Img 
      src={roraLogo}
      px='16px'
      />
      <LoginForm/>
    </Flex>
  )
}

export default Login
