import {Button} from '@chakra-ui/react'

function SecondaryButton({innerText, handleButtonClick, listType}) {

    const handleClick = () => {
        handleButtonClick('favourites')
    }

    return (
        <Button
        onClick={handleClick}
        display='flex'
        alignItems='center'
        w='100%'
        px='40px'
        py='9px'
        borderRadius='20px'
        fontFamily= 'latoB'
        fontSize= 'fs.labels'
        bg={listType === 'favourites' ? 'sunrise' : 'deepNavy'}
        color={listType === 'favourites' ? 'snow' : 'lavender'}
        border={listType === 'favourites' ? 'none' : '1px'}
        borderColor='lavender'
        _hover={listType === 'favourites'? {bg: 'darkTangerine'} : {bg:'lavenderGrey'}}
        >
            {innerText}
        </Button>
    )
}

export default SecondaryButton;