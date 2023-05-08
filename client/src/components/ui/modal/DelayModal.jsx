import { Flex, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalFooter, ModalOverlay, Progress, Text } from "@chakra-ui/react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";

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
                <ModalFooter>
                    <Text>Are you experiencing a delay?</Text>
                    <Flex>
                        <PrimaryButton innerText='Yes'/>
                        <SecondaryButton innerText='No'/>
                    </Flex>
                </ModalFooter>
                <ModalFooter>
                    <Text>Within the past 10 min, X% of users are experiencing delays</Text>
                    <Progress colorScheme="" value='' />
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default DelayModal;