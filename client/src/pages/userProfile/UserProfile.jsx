import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import SaveButton from '../../components/ui/button/SaveButton'
import UserProfileForm from '../../components/ui/form/UserProfileForm'

function UserProfile() {
  return (
    <Flex
    position='relative'
    overflow='hidden'
    direction='column'
    minH='90vh'
    bg='twilight'
    p='16px'
    gap='16px'
    >
      <Flex
      justify='space-between'
      >
        <ChevronLeftIcon boxSize='32px' color='snow'/>
        <SaveButton />
      </Flex>
      <UserProfileForm />
    </Flex>
  )
}

export default UserProfile;