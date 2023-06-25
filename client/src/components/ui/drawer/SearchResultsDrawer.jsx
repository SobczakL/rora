import { Box, Flex } from "@chakra-ui/react";
import RouteCard from "../../routeCard/RouteCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const searchResultsVariants = {
    visible: { y: "0px", transition: {duration: 0.3}},
    hidden: { y: "100%" },
};

function SearchResultsDrawer({ searchData, isOpen }) {
    const navigate = useNavigate();

    const uniqueDirectionHeadsigns =
        searchData &&
        searchData
            .flatMap((route) =>
                route.itineraries.map(
                    (itinerary) => itinerary.direction_headsign
                )
            )
            .filter((value, index, self) => self.indexOf(value) === index);

    const handleRouteCardClick = (routeId, direction) => {
        localStorage.setItem("direction", JSON.stringify(direction));
        navigate(`/home/${routeId}`);
    };

    if (searchData) {
        return (
            <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                overflowY="scroll"
                zIndex="10"
                h="35%"
            >
                <Box
                as={motion.div}
                variants={searchResultsVariants}
                initial={isOpen ? "visible" : "hidden"}
                animate={isOpen ? "visible" : "hidden"}
                py="10px"
                >
                    {uniqueDirectionHeadsigns.map((direction, index) => (
                        <Box
                            key={index}
                            py="5px"
                        >
                            <RouteCard
                                onClick={() =>
                                    handleRouteCardClick(
                                        searchData[0].route.global_route_id,
                                        direction
                                    )
                                }
                                routeNumber={
                                    searchData[0].route.route_short_name
                                }
                                routeHeadsign={direction}
                                routeName={searchData[0].route.route_long_name}
                                routeType={searchData[0].route.route_type}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    }
}

export default SearchResultsDrawer;
