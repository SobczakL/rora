import {Button} from '@chakra-ui/react'

function ChangePass({ onClick }) {
    return (
        <Button
        onClick={onClick}
        display='flex'
        alignItems='center'
        px='40px'
        py='9px'
        color='snow'
        bg='lavenderGrey'
        borderRadius='20px'
        fontFamily= 'latoB'
        fontSize= 'fs.labels'
        _hover={{bg: 'deepNavy'}}
        >
            Change Password
        </Button>
    )
}

export default ChangePass;
