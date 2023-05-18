import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";
import RouteCard from "../../routeCard/RouteCard";
import { useNavigate } from "react-router-dom";

function SearchResultsDrawer({ searchData, isOpen, onClose }) {
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
            <Drawer
                placement="bottom"
                onClose={onClose}
                isOpen={isOpen}
                minH="90vh"
            >
                <DrawerOverlay />
                <DrawerContent bg="deepNavy">
                    {searchData &&
                        uniqueDirectionHeadsigns.map((direction, index) => {
                            return (
                                <DrawerBody key={index}>
                                    <RouteCard
                                        onClick={() =>
                                            handleRouteCardClick(
                                                searchData[0].route
                                                    .global_route_id,
                                                direction
                                            )
                                        }
                                        routeNumber={
                                            searchData[0].route.route_short_name
                                        }
                                        routeHeadsign={direction}
                                        routeName={
                                            searchData[0].route.route_long_name
                                        }
                                        routeType={
                                            searchData[0].route.route_type
                                        }
                                    />
                                </DrawerBody>
                            );
                        })}
                </DrawerContent>
            </Drawer>
        );
    }
}

export default SearchResultsDrawer;
