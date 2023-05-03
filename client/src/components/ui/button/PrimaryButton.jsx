import {Button} from '@chakra-ui/react'

function PrimaryButton({innerText, onClick, isActive}) {
    return (
        <Button
        onClick={onClick}
        display='flex'
        alignItems='center'
        px='40px'
        py='9px'
        borderRadius='20px'
        fontFamily= 'latoB'
        fontSize= 'fs.labels'
        bg={isActive ? 'sapphire' : 'deepNavy'}
        color={isActive ? 'snow' : 'lavender'}
        border={isActive ? 'none' : '1px'}
        borderColor='lavender'
        _hover={isActive? {bg: 'navy'} : {bg:'lavenderGrey'}}
        >
            {innerText}
        </Button>
    )
}

export default PrimaryButton;