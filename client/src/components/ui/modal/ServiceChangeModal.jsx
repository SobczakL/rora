import { Flex, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalFooter, ModalOverlay, Progress, Text } from "@chakra-ui/react";

function DelayModal({onOpen, onClose}){
    return (
        <Modal isOpen={onOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Service Update:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>This route has temporarily changed due to city planning. Please refer to your service provider’s website for more information.</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default DelayModal;