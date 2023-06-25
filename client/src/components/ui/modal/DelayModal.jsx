import {
    Flex,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Progress,
    Text,
} from "@chakra-ui/react";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";
import { useState } from "react";

function DelayModal({ isOpen, onClose }) {
    const [userInput, setUserInput] = useState(false);

    const handleInteraction = () => {
        setUserInput(true);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} variant='xs' size="xs">
            <ModalOverlay />
            <ModalContent bg="lavenderGrey" color="snow">
                <ModalHeader>Update to route:</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        Accident on route. The situation will impact all route
                        schedules until further notice. Please plan accordingly.
                    </Text>
                </ModalBody>
                {!userInput ? (
                    <ModalFooter>
                        <Flex direction="column" m="auto" gap="16px">
                            <Text>Are you experiencing a delay?</Text>
                            <Flex gap="8px">
                                <PrimaryButton
                                    innerText="Yes"
                                    handleButtonClick={handleInteraction}
                                />
                                <SecondaryButton
                                    innerText="No"
                                    handleButtonClick={handleInteraction}
                                />
                            </Flex>
                        </Flex>
                    </ModalFooter>
                ) : (
                    <ModalFooter>
                        <Text>
                            Within the past 10 min, 80% of users are
                            experiencing delays
                        </Text>
                        <Progress colorScheme="blue" value={80} />
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    );
}

export default DelayModal;
