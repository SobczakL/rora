import { Flex } from "@chakra-ui/react"
import SearchInput from "../ui/input/SearchInput"
import PrimaryButton from '../ui/button/PrimaryButton'
import SecondaryButton from '../ui/button/SecondaryButton'
import locationIcon from '../../assets/icons/location.svg'
function RouteSearchPanel() {
    return (
        <Flex
        direction='column'
        gap='16px'
        w='100%'
        >
            <SearchInput />
            <Flex
            gap='16px'
            px='24px'
            >
                <PrimaryButton innerText='Nearby' icon={locationIcon} />
                <SecondaryButton innerText='Favourites'/>
            </Flex>
        </Flex>
    )
}

export default RouteSearchPanel;