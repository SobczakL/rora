import { Box, Flex, } from "@chakra-ui/react"
import RouteCard from "../../components/routeCard/RouteCard"
import RouteStopList from "../../components/routeStopList/RouteStopList";
import TimeBadge from "../../components/ui/badge/TimeBadge";
import UpdateButton from "../../components/ui/button/UpdateButton";
import DelayModal from "../../components/ui/modal/DelayModal";
import useGetRouteDetails from "../../services/useGetRouteDetails";
import { useNavigate, useParams } from "react-router-dom";
import RouteDetailsCard from "../../components/routeDetailsCard/RouteDetailsCard";
import { savedRouteChecker, saveNewRoute, deleteSavedRoute } from '../../services/manageSavedRoutes';
import { useState, useEffect } from "react";


function RouteDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { routeDetailsData } = useGetRouteDetails(id)

    const [isSaved, setIsSaved] = useState(false)

    // Toggle route updates
    const isUpdate = (null)

    const toggleUpdate = (type) =>{
        if(type === "delay"){
            return (<DelayModal />)
        }
        if(type === 'service'){
            return (<ServiceChangeModal />)
        }
    }
    
    const handleBack = () => {
        navigate('/home')
    }

    const username = JSON.parse(localStorage.getItem('username'))
    const direction = JSON.parse(localStorage.getItem('direction'))

    useEffect(() => {
        const checkSavedRoute = async () => {
            const result = await savedRouteChecker(username, id);
                setIsSaved(result);
            };
            console.log(isSaved)
        checkSavedRoute();
    }, [])

    const handleUpdate = async () => {
            if (isSaved) {
            await deleteSavedRoute(username, id);
            setIsSaved(false);
            } else {
            const data = {
                username: username,
                routeNumber: routeDetailsData.route.route_short_name,
                routeName: routeDetailsData.route.route_long_name,
                routeHeading: direction,
                routeId: id,
                routeType: routeDetailsData.route.route_type,
            };
            await saveNewRoute(data);
            setIsSaved(true);
            }
        };

    if(routeDetailsData){

        return (
            <Flex
            position='relative'
            overflow='hidden'
            direction='column'
            gap='16px'
            minH='90vh'
            zIndex='1'
            >
                <RouteDetailsCard 
                routeNumber={routeDetailsData.route.route_short_name}
                routeName={routeDetailsData.route.route_long_name}
                routeType={routeDetailsData.route.route_type}
                routeHeadsign={JSON.parse(localStorage.getItem('direction'))}
                isSaved={isSaved}
                handleBack={handleBack}
                handleUpdate={handleUpdate}
                />
                <Flex align='center' gap='16px' px='16px'>
                    {/* innerText is static until data is setup */}
                    <TimeBadge innerText='4 mins'/>
                    <UpdateButton isUpdate={isUpdate}/>
                    <DelayModal />
                </Flex>
                <RouteStopList />
            </Flex>
        )
    }
}

export default RouteDetails;
