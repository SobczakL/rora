import UserProfileContainer from "../../components/userProlileContainer/UserProfileContainer"
import user3 from '../../assets/images/user3.jpg'
import { Flex, Square, Box, Skeleton } from "@chakra-ui/react"
import MainHeader from "../../components/mainHeader/MainHeader"
import RouteCardList from "../../components/routeCardList/RouteCardList"
import { useState } from "react"
import { CloseIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { useLoading } from "../../utils/useLoading"
import useNearbyRoutes from "../../services/useNearbyRoutes"

function Home() {
  const isLoading = useLoading()
  const navigate = useNavigate()

  const { data, loading, error} = useNearbyRoutes()

  const [cardListVisible, setCardListVisible] = useState(false);

  const username = JSON.parse(localStorage.getItem('username'));

  const handleFocus = () => {
    setCardListVisible(!cardListVisible);
  }

  const handleReset = () => {
    if(cardListVisible){
      setCardListVisible(false);
    }
  }

  const handleNavigate = () => {
    navigate('/home/user')
  }

  if(error){
    console.log(error)
  }

  if(loading){
    return (<h1>Loading ...</h1>)
  }

  if(data){
    console.log(data)
  }

  return (
    <Flex
    position='relative'
    overflow='hidden'
    direction='column'
    minH='90vh'
    zIndex='1'
    >
      <UserProfileContainer userImg={user3} handleNavigate={handleNavigate}/>
      <MainHeader userName={username}/>
      <Box
      position='absolute'
      onClick={handleReset}
      display={cardListVisible ? 'block' : 'none'}
      w='85%'
      h='10vh'
      p='8px'
      >
        <CloseIcon color='snow'/>
      </Box>
      <Square h='400px' w='100%'bg='twilight' position='absolute' zIndex='-1'>
        Google map placeholder
      </Square>
        <RouteCardList  
        handleFocus={handleFocus} 
        cardListVisible={cardListVisible} 
        isLoaded={isLoading}
        routeData={data}
        /> 
    </Flex>
  )
}

export default Home