import { Flex, Skeleton, VStack, useSafeLayoutEffect } from "@chakra-ui/react"
import RouteSearchPanel from "../routeSearchPanel/RouteSearchPanel";
import RouteCard from "../routeCard/RouteCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNearbyRoutes from "../../services/useNearbyRoutes";

function RouteCardList({ handleFocus, cardListVisible, isLoaded, }) {
    const navigate = useNavigate();

    const { nearbyData } = useNearbyRoutes();

    const [listType, setListType] = useState('nearby');

    const cardListVariants = {
        visible: { y: '10vh', transition: { duration: 0.5 } },
        hidden: { y: '45vh' }
    };

    const onFocus = () => {
        handleFocus();
    };

    const handleButtonClick = (type) => {
        switch (type) {
            case 'nearby':
                setListType(type);
                break;
            case 'favourites':
                setListType(type);
                break;
            default:
                setListType('nearby');
        }
    };

    const handleRouteCardClick = (route) => {
        navigate(`/home/${route.route_departures[0].global_route_id}`);
    };

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
            <RouteSearchPanel onClick={onFocus} handleButtonClick={handleButtonClick} listType={listType}/>
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
                    {nearbyData && nearbyData.map((route) => (
                            <RouteCard
                                key={route.route_departures[0].global_route_id}
                                onClick={() => handleRouteCardClick(route)}
                                routeNumber={route.route_departures[0].route_short_name}
                                routeHeadsign={route.route_departures[0].itineraries[0].direction_headsign}
                                routeName={route.route_departures[0].route_long_name}
                                routeType={route.route_departures[0].route_type}
                                routeNextArrival={route.route_departures[0].itineraries[0].schedule_items[0].departure_time}
                            />
                        ))}
                    {/* {listType === 'nearby' && (
                        nearbyData.map((route) => (
                            <RouteCard
                                key={route.route_departures[0].global_route_id}
                                onClick={() => handleRouteCardClick(route)}
                                routeNumber={route.route_departures[0].route_short_name}
                                routeHeadsign={route.route_departures[0].itineraries[0].direction_headsign}
                                routeName={route.route_departures[0].route_long_name}
                                routeType={route.route_departures[0].route_type}
                                routeNextArrival={route.route_departures[0].itineraries[0].schedule_items[0].departure_time}
                            />
                        ))
                    )} */}
                    {/* {listType === 'favourites' && (
                        // Map over the favouritesData array similarly as nearbyData
                        // You'll need to have the favouritesData available in the component
                    )} */}
                </VStack>
            </Skeleton>
        </Flex>
    )
}

export default RouteCardList;
