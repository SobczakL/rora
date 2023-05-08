import { Img, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

function SearchInput({onClick}) {
    return (
        <InputGroup>
            <Input
            onClick={onClick}
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
            <InputRightElement children={<SearchIcon color='lavender'/>}/>
        </InputGroup>
    )
}

export default SearchInput
