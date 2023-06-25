import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Img,
    VStack,
    Text,
} from "@chakra-ui/react";
import tramIcon from "../../assets/icons/tram.svg";
import subwayIcon from "../../assets/icons/subway.svg";
import trainIcon from "../../assets/icons/train.svg";
import busIcon from "../../assets/icons/bus.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import trimDirectionHeading from "../../utils/trimDirectionHeading";
function RouteCard({
    routeNumber,
    routeHeadsign,
    routeName,
    routeType,
    isSaved,
    onClick,
    isFocused
}) {
    const routeIcons = {
        0: tramIcon,
        1: subwayIcon,
        2: trainIcon,
        3: busIcon,
    };
    return (
        <Card
            onClick={onClick}
            display="flex"
            direction="row"
            align="center"
            w="100%"
            minH="60px"
            h="60px"
            gap="4px"
            py="8px"
            px="16px"
            border={!isFocused ? "none" : "1px"}
            borderColor={!isFocused ? "none" : "twilight"}
            bg={!isFocused ? "twilight" : "deepNavy"}
            _active={{ bg: "deepNavy" }}
            cursor="pointer"
        >
            <Img
                src={routeIcons[routeType]}
                maxH="100%"
                maxW="40px"
                color="snow"
            />
            <VStack 
            spacing="0" 
            align="start" 
            w="100%" 
            color={!isFocused ? "snow" : "twilight"}>
                <CardHeader p="0">
                    <Heading
                        fontFamily="latoB"
                        fontSize="fs.subheader"
                        lineHeight="lh.subheader"
                    >
                        {`${routeNumber} ${trimDirectionHeading(
                            routeHeadsign
                        )}`}
                    </Heading>
                </CardHeader>
                <CardBody p="0">
                    <Text
                        fontFamily="latoR"
                        fontSize="fs.body.lg"
                        lineHeight="lh.body.lg"
                    >
                        {routeName}
                    </Text>
                </CardBody>
            </VStack>
            <ChevronRightIcon
                boxSize={6}
                color={isSaved ? "sunrise" : "lavender"}
            />
        </Card>
    );
}

export default RouteCard;
