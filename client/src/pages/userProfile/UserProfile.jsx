import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import SaveButton from '../../components/ui/button/SaveButton'
import UserProfileForm from '../../components/ui/form/UserProfileForm'
import { useNavigate } from "react-router-dom"

function UserProfile() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/home')
  }

  return (
    <Flex
    position='relative'
    zIndex='0'
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
        <ChevronLeftIcon boxSize='32px' color='snow' onClick={handleClick}/>
      </Flex>
      <UserProfileForm />
    </Flex>
  )
}

export default UserProfile;