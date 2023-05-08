import { Box, Flex, } from "@chakra-ui/react"
import RouteCard from "../../components/routeCard/RouteCard"
import RouteStopList from "../../components/routeStopList/RouteStopList";
import TimeBadge from "../../components/ui/badge/TimeBadge";
import UpdateButton from "../../components/ui/button/UpdateButton";
import DelayModal from "../../components/ui/modal/DelayModal";

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

function RouteStops() {
    return (
        <Flex
        position='relative'
        overflow='hidden'
        direction='column'
        gap='16px'
        minH='90vh'
        zIndex='1'
        >
            <RouteCard />
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

export default RouteStops;
