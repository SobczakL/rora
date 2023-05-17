import { Button, Img, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

function SearchInput({onClick, handleChange, handleEnter}) {
    return (
        <InputGroup gap='4px'>
            <Input
            onClick={onClick}
            onChange={handleChange}
            // onKeyDown={handleEnter}
            cursor='pointer'
            fontFamily='latoB'
            fontSize='fs.body.lg'
            lineHeight='fs.body.lg'
            color='snow'
            bg='twilight'
            borderRadius='10px'
            borderColor='lavenderGrey'
            focusBorderColor='lavender'
            placeholder='Search...'
            _placeholder={{color:'lavender', fontSize:'fs.labels'}}
            _focus={{bg:'lavenderGrey'}}
            >
            </Input> 
            <Button
            onClick={handleEnter}
            bg='lavenderGrey'
            _hover={{bg:'twilight'}}
            >
                <InputRightElement children={<SearchIcon color='lavender'/>}/>
            </Button>
        </InputGroup>
    )
}

export default SearchInput
