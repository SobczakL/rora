import {Button} from '@chakra-ui/react'

function Primary({innerText}) {
  return (
    <Button
    display='flex'
    alignItems='center'
    px='40px'
    py='9px'
    
    >
        {innerText}
    </Button>
  )
}

export default Primary