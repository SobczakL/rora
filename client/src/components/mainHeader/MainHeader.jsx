import { Box, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MainHeader({ userFirstName, loaded }) {
    return (
        <Center
            as={motion.div}
            animate={{ opacity: loaded ? 0 : 1, scale: loaded ? 0 : 1 }}
            position="absolute"
            top="125px"
            maxW="100%"
            mx="24px"
        >
            <Box
                borderRadius="20px"
                border="2px"
                boxShadow="inset 1px 1px 4px lavender"
                color="lavender"
                align="center"
                py="8px"
                px="16px"
            >
                <Text color="snow" fontFamily="latoB" fontSize="fs.header">
                    Hi, {userFirstName}! Where are you off tö?
                </Text>
            </Box>
        </Center>
    );
}

export default MainHeader;
