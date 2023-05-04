import UserProfileContainer from "../../components/userProlileContainer/UserProfileContainer"
import user3 from '../../assets/images/user3.jpg'
import { Flex } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import MainHeader from "../../components/mainHeader/MainHeader"
import RouteSearchPanel from "../../components/routeSearchPanel/RouteSearchPanel"
import RouteCardList from "../../components/routeCardList/RouteCardList"
import RouteCard from "../../components/routeCard/RouteCard"
import { useState } from "react"


function Home() {
  const cardListVariants = {
    visible: { y: '10vh', transition: { duration: 0.5 } },
    hidden: { y: '45vh' }
  };

  const [cardListVisible, setCardListVisible] = useState(false);

  const handleClick = () => {
    setCardListVisible(!cardListVisible);
  }

  const handleReset = () => {
    if(cardListVisible){
      setCardListVisible(false);
    }
  }


  return (
    <Flex
    position='relative'
    overflow='hidden'
    direction='column'
    minH='80vh'
    onClick={handleReset}
    >
      <UserProfileContainer userImg={user3}/>
      <MainHeader />
      <Flex
      direction='column'
      as={motion.div}
      onClick={handleClick}
      variants={cardListVariants}
      initial={cardListVisible ? 'visible' : 'hidden'}
      animate={cardListVisible ? 'visible' : 'hidden'}
      >
        <RouteSearchPanel />
        <RouteCardList 
        children={
          <>
          <RouteCard />
          <RouteCard />
          <RouteCard />
          <RouteCard />
          </>
        }
        />
      </Flex>
    </Flex>
  )
}

export default Home