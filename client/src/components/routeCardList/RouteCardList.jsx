import { Flex, Skeleton, VStack } from "@chakra-ui/react"
import RouteSearchPanel from "../routeSearchPanel/RouteSearchPanel";
import { motion } from "framer-motion";
import RouteCard from "../routeCard/RouteCard";
function RouteCardList({handleFocus, cardListVisible, isLoaded, routeData}) {

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
            <Skeleton
            startColor='darkNavy'
            endColor='twilight' 
            isLoaded={isLoaded}
            >
                <VStack
                mt='16px'
                spacing='2px'
                w='100%'
                >
                    {routeData && routeData.map((route, index) => {
                        return (
                            <RouteCard 
                            routeNumber={route.route_departures[0].route_short_name}
                            routeHeadsign={route.route_departures[0].itineraries[0].direction_headsign}
                            routeName={route.route_departures[0].route_long_name}
                            routeType={route.route_departures[0].route_type}
                            routeNextArrival={route.route_departures[0].itineraries[0].schedule_items[0].departure_time}
                            />
                        )
                    })}
                </VStack> 
            </Skeleton>
        </Flex>
    )
}

export default RouteCardList