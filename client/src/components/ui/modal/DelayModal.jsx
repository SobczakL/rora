import { Flex, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalFooter, ModalOverlay, Progress, Text } from "@chakra-ui/react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";

function DelayModal({isOpen, onClose}){
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
            bg='lavenderGrey'
            color='snow'
            >
                <ModalHeader>Update to route:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Accident on route. The situation will impact all route schedules until further notice. Please plan accordingly.</Text>
                </ModalBody>
                <ModalFooter>
                    <Flex
                    direction='column'
                    m='auto'
                    gap='16px'
                    >
                        <Text>Are you experiencing a delay?</Text>
                        <Flex>
                            <PrimaryButton innerText='Yes'/>
                            <SecondaryButton innerText='No'/>
                        </Flex> 
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