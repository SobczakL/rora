import {
    Flex,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure
} from "@chakra-ui/react";

function NewUserModal({isOpen, onClose}) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Not a Rora user yet?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        Please login using the below details to explore Rora:
                    </Text>
                    <VStack mt="16px" align="right">
                        <Text>
                            Username: SobczakL
                        </Text>      
                        <Text>
                            Password: password
                        </Text>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default NewUserModal;

