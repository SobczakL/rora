import { Button } from "@chakra-ui/react";

function UpdateButton({innerText}){
    return (
        <Button
        display='flex'
        justifyContent='center'
        w='100%'
        h='36px'
        bg='sunrise'
        color='snow'
        borderRadius='10px'
        alignItems='center'
        fontFamily='latoR'
        fontSize='fs.labels' 
        lineHeight='lh.labels'
        _hover={{ bg: 'darkTangerine'}}
        > 
            {innerText}
        </Button>
    )
}
export default UpdateButton;