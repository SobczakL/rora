import { Badge } from "@chakra-ui/react";

function TimeBadge({innerText}){
    return (
        <Badge
        display='flex'
        justifyContent='center'
        maxW='100px'
        w='100%'
        h='36px'
        bg='lavenderGrey'
        color='snow'
        borderRadius='10px'
        alignItems='center'
        fontFamily='latoR'
        fontSize='fs.labels' 
        lineHeight='lh.labels'
        > 
            {innerText}
        </Badge>
    )
}
export default TimeBadge;