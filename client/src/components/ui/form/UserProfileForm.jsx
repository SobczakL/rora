import { Divider, Flex, FormControl, VStack, Img, Box } from "@chakra-ui/react";
import UserInput from "../input/UserInput";
import ChangePassButton from "../button/ChangePassButton";
import RoraCard from '../../../assets/images/roraCard.svg'

function UserProfileForm(){
    return (
        <FormControl>
            <VStack
            gap='4px'
            >
                <Flex
                gap='16px'
                >
                    <UserInput inputHeader='First Name:' type='text' placeholderText='John'/>
                    <UserInput inputHeader='Last Name:' type='text' placeholderText='Doe'/>
                </Flex>
                <UserInput inputHeader='Email:' type='email' placeholderText='John.Doe@Rora.com'/>
                <UserInput inputHeader='Phone Number' type='number' placeholderText='416-123-1234'/>
                <ChangePassButton />
            </VStack>
            <Divider borderColor='darkNavy' m='16px'/>
            <VStack
            gap='4px'
            >
                <UserInput inputHeader='Card Number' type='number' placeholderText='1234-1234-1234-1234'/>
                <Flex
                gap='16px'
                >
                    <UserInput inputHeader='Ex. Date' type='date' placeholderText='01/01'/>
                    <UserInput inputHeader='CVC' type='number' placeholderText='000'/>
                    <UserInput inputHeader='Zip' type='text' placeholderText='a1a1a1'/>
                </Flex>
                <Box 
                backgroundImage={`url(${RoraCard})`}
                backgroundSize='contain'
                backgroundPosition='center'
                backgroundRepeat='no-repeat'
                w='100%'
                h='200px'
                />
            </VStack>
        </FormControl>
    )
}
export default UserProfileForm;
