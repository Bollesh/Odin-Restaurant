import { AnimatePresence, motion } from "framer-motion";
import { pagesContext } from "../context/PagesContext";
import { useContext } from "react";

const boxVariant = {
    hover: {},
}

const textVariant = {
    hover: {textShadow: '0 0 10px white'}
}

export default function Location(){
    const pages = useContext(pagesContext)
    return (
        <AnimatePresence>
            {pages.loc && (
                <motion.div className="locationBox"
                    initial={{opacity: 0, display: "none"}}
                    animate={{opacity: 1, display: "flex"}}
                    exit={{opacity: 0, transition: "none"}}
                    transition={{delay: 0.5, duration: 0.8}}
                    variants={boxVariant}
                    whileHover="hover"
                >
                    <img src={require(`../images/Screenshot from 2024-08-04 19-05-39.png`)} alt="" className="loc" />
                    <motion.div className="locText" variants={textVariant}>Ah ante amalapuram, Nalla Malla forest</motion.div>
                    <motion.div className="phoneNo" variants={textVariant}>+91 937561734</motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}