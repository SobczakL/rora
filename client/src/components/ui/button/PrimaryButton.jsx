import { Button, Img } from "@chakra-ui/react";

function PrimaryButton({ innerText, handleButtonClick, icon, listType }) {
    const handleClick = () => {
        handleButtonClick("nearby");
    };

    return (
        <Button
            onClick={handleClick}
            position="relative"
            display="flex"
            align="center"
            w="100%"
            px="40px"
            py="9px"
            borderRadius="20px"
            fontFamily="latoB"
            fontSize="fs.labels"
            bg={listType === "nearby" ? "sapphire" : "deepNavy"}
            color={listType === "nearby" ? "snow" : "lavender"}
            border={listType === "nearby" ? "none" : "1px"}
            borderColor="lavender"
            _hover={
                listType === "nearby" ? { bg: "navy" } : { bg: "lavenderGrey" }
            }
        >
            {innerText}
            {icon ? (
                <Img
                    position="absolute"
                    right="12px"
                    src={icon}
                    ml="8px"
                    maxW="15px"
                />
            ) : (
                ""
            )}
        </Button>
    );
}

export default PrimaryButton;
