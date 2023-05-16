import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import RouteCard from "../../routeCard/RouteCard";

function SearchResultsDrawer({searchData, isOpen, onClose}){

    const uniqueDirectionHeadsigns = searchData && searchData.flatMap(route => 
        route.itineraries.map(itinerary => itinerary.direction_headsign)
    )
    .filter((value, index, self) => self.indexOf(value) === index);


    console.log(uniqueDirectionHeadsigns)

    return (
        <Drawer
        placement='bottom'
        onClose={onClose}
        isOpen={isOpen}
        minH='90vh'
        colorScheme='blue'
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody >
                    {searchData && uniqueDirectionHeadsigns.map(direction => {
                        return(
                            <RouteCard
                            // onClick={() => handleRouteCardClick(route.route_departures[0].global_route_id, route.route_departures[0].itineraries[0].direction_headsign)}
                            routeNumber={searchData.route.route_short_name}
                            routeHeadsign={direction}
                            routeName={searchData.route.route_long_name}
                            routeType={searchData.route.route_type}
                            />
                        )
                    })}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}

export default SearchResultsDrawer;