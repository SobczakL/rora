import { Button, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../ui/input/SearchInput";
import PrimaryButton from "../ui/button/PrimaryButton";
import SecondaryButton from "../ui/button/SecondaryButton";
import locationIcon from "../../assets/icons/location.svg";
import SearchResultsDrawer from "../ui/drawer/SearchResultsDrawer";
import axios from 'axios'
import { serverURL } from '../../services/config'

function RouteSearchPanel({ onClick, handleButtonClick, listType }) {
    
    const navigate = useNavigate();

    const [data, setData] = useState([])
    const [userInput, setUserInput] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleEnter = (event) => {
        if (userInput !== "") {
            axios.post(`${serverURL}/home/search`, {
                searchInput: userInput
            })
            .then((response) => {
                setData(response.data);
                setIsDrawerOpen(true)
            })
            .catch((error) => {
                console.log(error);
            })
        }
    };
    
    return (
        <Flex direction="column" gap="16px" w="100%">
        <SearchInput onClick={onClick} handleChange={handleChange} handleEnter={handleEnter}/>
        <Flex gap="16px" px="24px">
            <PrimaryButton
            innerText="Nearby"
            icon={locationIcon}
            handleButtonClick={handleButtonClick}
            listType={listType}
            />
            <SecondaryButton
            innerText="Favourites"
            handleButtonClick={handleButtonClick}
            listType={listType}
            />
        </Flex>
        <SearchResultsDrawer
            searchData={data}
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)} // Correctly calling setIsDrawerOpen(false) to close the drawer
        />
        </Flex>
    );
}

export default RouteSearchPanel;

