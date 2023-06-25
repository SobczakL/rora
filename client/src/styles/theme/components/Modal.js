import { defineStyleConfig } from "@chakra-ui/react";

const Modal = defineStyleConfig({
    baseStyle: {
        mt: "30px",
        dialogContainer: {
            mt: "15vh",
        },
        dialog: {
            w: "280px",
        },
        overlay: {
            w: "320px",
            h: "665px",
            top: "50%",
            bottom: "50%",
            right: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
    },
});

export default Modal;
