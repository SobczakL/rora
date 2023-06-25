import { Input } from "@chakra-ui/react";

function LoginInput({
    innerText,
    type,
    placeholderText,
    onChange,
    errorState,
}) {
    return (
        <Input
            fontSize="fs.body.lg"
            borderRadius="20px"
            bg="twilight"
            border={errorState ? "1px" : "none"}
            borderColor={errorState ? "crimson" : "none"}
            color="snow"
            px="24px"
            placeholder={placeholderText}
            _placeholder={{ color: "lavender", fontSize: "fs.labels" }}
            focusBorderColor="lavender"
            _focus={{ bg: "lavenderGrey" }}
            _active={{ bg: "lavenderGrey" }}
            required
            type={type}
            onChange={onChange}
        >
            {innerText}
        </Input>
    );
}

export default LoginInput;
