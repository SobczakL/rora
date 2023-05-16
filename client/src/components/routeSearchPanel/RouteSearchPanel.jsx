import { Button, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../ui/input/SearchInput";
import PrimaryButton from "../ui/button/PrimaryButton";
import SecondaryButton from "../ui/button/SecondaryButton";
import locationIcon from "../../assets/icons/location.svg";
import useSearchRoutes from "../../services/useSearchRoutes";
import SearchResultsDrawer from "../ui/drawer/SearchResultsDrawer";

function RouteSearchPanel({ onClick, handleButtonClick, listType }) {
  const navigate = useNavigate();
  const { searchData, searchLoading, searchError } = useSearchRoutes("");

  const [userInput, setUserInput] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      setSearchInput(userInput);
      setIsDrawerOpen(true);
    }
  };

  return (
    <Flex direction="column" gap="16px" w="100%">
      <SearchInput onClick={onClick} handleChange={handleChange} />
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
        searchData={searchData}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <Button onClick={handleEnter}></Button>
    </Flex>
  );
}

export default RouteSearchPanel;

