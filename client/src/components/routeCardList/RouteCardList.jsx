import { Flex, Skeleton, VStack } from "@chakra-ui/react"
import RouteSearchPanel from "../routeSearchPanel/RouteSearchPanel";
import RouteCard from "../routeCard/RouteCard";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNearbyRoutes from "../../services/useNearbyRoutes";
import useGetSavedRoutes from "../../services/useGetSavedRoutes";

function RouteCardList({ handleFocus, cardListVisible, isLoaded, }) {
    const navigate = useNavigate();

    const { nearbyData } = useNearbyRoutes();
    const { savedRoutesData } = useGetSavedRoutes();

    const [listType, setListType] = useState('nearby');

    //Variants for transitions
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
            case 'saved':
                setListType(type);
                break;
            default:
                setListType('nearby');
        }
    };

    const handleRouteCardClick = (routeId, direction) => {
        localStorage.setItem('direction', JSON.stringify(direction)) 
        navigate(`/home/${routeId}`);
    };

    return (
        <Flex
            direction='column'
            as={motion.div}
            variants={cardListVariants}
            initial={cardListVisible ? 'visible' : 'hidden'}
            animate={cardListVisible ? 'visible' : 'hidden'}
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
                    {
                        listType === 'nearby' ? nearbyData && nearbyData.map((route, index) => {

                            const isSaved = () => {
                                return savedRoutesData.find((savedRoute) => savedRoute.routeId === route.route_departures[0].global_route_id) !== undefined;
                            }
                            return (
                                <RouteCard
                                key={index}
                                onClick={() => handleRouteCardClick(route.route_departures[0].global_route_id, route.route_departures[0].itineraries[0].direction_headsign)}
                                routeNumber={route.route_departures[0].route_short_name}
                                routeHeadsign={route.route_departures[0].itineraries[0].direction_headsign}
                                routeName={route.route_departures[0].route_long_name}
                                routeType={route.route_departures[0].route_type}
                                isSaved={isSaved()}
                                />
                            );
                        })
                        : listType === 'saved' ? savedRoutesData && savedRoutesData.map((route, index) => {
                            return (
                                <RouteCard
                                key={index}
                                onClick={() => handleRouteCardClick(route.routeId)}
                                routeNumber={route.routeNumber}
                                routeHeadsign={route.routeHeading}
                                routeName={route.routeName}
                                routeType={route.routeType}
                                isSaved={true}
                                />
                            );
                        })
                        : null
                    }
                </VStack>
            </Skeleton>
        </Flex>
    )

}

export default RouteCardList;
