import { Divider, Flex, FormControl, VStack, Img, Box } from "@chakra-ui/react";
import UserInput from "../input/UserInput";
import ChangePassButton from "../button/ChangePassButton";
import RoraCard from '../../../assets/images/roraCard.svg'
import SaveButton from "../button/SaveButton";
import useUserDetails from "../../../services/useUserDetails";

function UserProfileForm(){

    const { userDetailsData } = useUserDetails();
    if(userDetailsData){
        console.log(userDetailsData)
    }

    return (
        <FormControl
        >
            <VStack
            gap='4px'
            >
                <Flex
                gap='16px'
                >
                    <UserInput inputHeader='First Name:' type='text' placeholder='John' value={userDetailsData.}/>
                    <UserInput inputHeader='Last Name:' type='text' placeholder='Doe'/>
                </Flex>
                <UserInput inputHeader='Email:' type='email' placeholder='John.Doe@Rora.com'/>
                <UserInput inputHeader='Phone Number' type='number' placeholder='416-123-1234'/>
                <ChangePassButton />
            </VStack>
            <Divider borderColor='darkNavy' m='16px'/>
            <VStack
            gap='4px'
            >
                <UserInput inputHeader='Card Number' type='number' placeholder='1234-1234-1234-1234'/>
                <Flex
                gap='16px'
                >
                    <UserInput inputHeader='Ex. Date' type='text' placeholder='01/01'/>
                    <UserInput inputHeader='CVC' type='number' placeholder='000'/>
                    <UserInput inputHeader='Zip' type='text' placeholder='a1a1a1'/>
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
            <SaveButton />
        </FormControl>
    )
}
export default UserProfileForm;
