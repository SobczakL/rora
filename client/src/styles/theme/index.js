import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import Modal from './components/Modal'
import Drawer from './components/Drawer'

const overrides = extendTheme({
    ...styles,
    components: {
        Modal,
        Drawer
    }
});

export default overrides;
