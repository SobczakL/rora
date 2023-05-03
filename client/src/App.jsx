import {ChakraProvider, Box} from '@chakra-ui/react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import overrides from './styles/theme'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import UserProfile from './pages/userProfile/UserProfile'
import Footer from './components/footer/Footer'
function App() {

  return (
    <>
      <ChakraProvider theme={overrides}>
        <Box
          bg="lavender"
          h='100px'
          w='100px'
          pb={{ sm: "40px", lg: "48px" }}
        >
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/home/user' element={<UserProfile />} />
              <Route path='/home/route/:id' element={<Route />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </Box>
      </ChakraProvider>
    </>
  )
}

export default App;