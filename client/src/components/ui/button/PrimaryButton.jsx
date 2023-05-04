import {Button, Img} from '@chakra-ui/react'

function PrimaryButton({innerText, onClick, isActive, icon}) {
    return (
        <Button
        onClick={onClick}
        position='relative'
        display='flex'
        align='center'
        w='100%'
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
            {innerText}{icon ?
                <Img 
                position='absolute'
                right='16px'
                src={icon} 
                ml='8px' 
                maxW='20px' 
                /> : ''}
        </Button>
    )
}

export default PrimaryButton;