import { Flex, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalFooter, ModalOverlay, Progress, Text } from "@chakra-ui/react";

function DelayModal({onOpen, onClose}){
    return (
        <Modal isOpen={onOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Insert update from DB</Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default DelayModal;