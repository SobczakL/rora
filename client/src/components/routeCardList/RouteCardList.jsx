import { StackDivider, VStack } from "@chakra-ui/react"

function RouteCardList({children}) {
    return (
        <VStack
        mt='16px'
        spacing='2px'
        w='100%'
        >
            {children}
        </VStack>
    )
}

export default RouteCardList