import {Button} from '@chakra-ui/react'

function LoginButton({innerText, onClick, isLoading}) {
    return (
        <Button
        onClick={onClick}
        display='flex'
        alignItems='center'
        px='40px'
        py='9px'
        color='snow'
        bg='sapphire'
        borderRadius='20px'
        fontFamily= 'latoB'
        fontSize= 'fs.labels'
        isLoading={isLoading}
        _hover={{bg: 'navy'}}
        _active={{}}
        >
            {innerText}
        </Button>
    )
}

export default LoginButton;