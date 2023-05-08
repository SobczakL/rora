import { Flex, VStack } from "@chakra-ui/react"
import RouteSearchPanel from "../routeSearchPanel/RouteSearchPanel";
import { motion } from "framer-motion";
import RouteCard from "../routeCard/RouteCard";
function RouteCardList({handleFocus, cardListVisible}) {

    const cardListVariants = {
        visible: { y: '10vh', transition: { duration: 0.5 } },
        hidden: { y: '45vh' }
    };
    
    const onFocus = () => {
        handleFocus();
    }

    return (
        <Flex
        direction='column'
        as={motion.div}
        variants={cardListVariants}
        initial={cardListVisible ? 'visible' : 'hidden'}
        animate={cardListVisible ? 'visible' : 'hidden'}
        pointerEvents={cardListVisible ? "none" : "auto"}
        h='100%'
        >
            <RouteSearchPanel onClick={onFocus}/>
            <VStack
            mt='16px'
            spacing='2px'
            w='100%'
            >
                <RouteCard />
                <RouteCard />
                <RouteCard />
                <RouteCard />
            </VStack>
        </Flex>
    )
}

export default RouteCardList