import {Button} from '@chakra-ui/react'

function SecondaryButton({innerText, onClick, isActive}) {
    return (
        <Button
        onClick={onClick}
        display='flex'
        alignItems='center'
        w='100%'
        px='40px'
        py='9px'
        borderRadius='20px'
        fontFamily= 'latoB'
        fontSize= 'fs.labels'
        bg={isActive ? 'sunrise' : 'deepNavy'}
        color={isActive ? 'snow' : 'lavender'}
        border={isActive ? 'none' : '1px'}
        borderColor='lavender'
        _hover={isActive? {bg: 'navy'} : {bg:'lavenderGrey'}}
        >
            {innerText}
        </Button>
    )
}

export default SecondaryButton;