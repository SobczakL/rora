import { Skeleton } from "@chakra-ui/react";

function LoadingScreen({}){
    return(
        <Skeleton
        position='absolute'
        w='100vw'
        h='100vh'
        startColor='darkNavy'
        endColor='twilight'
        alignItems='center'
        zIndex='2'
        >
        </Skeleton>
    )
}
export default LoadingScreen;