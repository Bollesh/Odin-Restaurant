import { motion } from "framer-motion"
import { updatePagesContext } from "../context/PagesContext"
import { useContext } from "react"

const ulVariants = {
    init:{},
    anim:{},
    hover:{},
}

const liVariants = {
    init:{},
    anim:{},
    hover:{scale: 1.1}
}

export default function Header({ setPages }){
    const setPage = useContext(updatePagesContext)
    function setHome(){
        setPage({home: true, menu: false, loc: false})
    }
    function setMenu(){
        setPage({home: false, menu: true, loc: false})
    }
    function setLoc(){
        setPage({home: false, menu: false, loc: true})
    }
    return (<motion.nav className="Header"
        initial={{opacity: 0, y: -100, display: "none"}}
        animate={{opacity: 1, y: 0, display: "flex"}}
        transition={{duration: 0.6}}
    >
        <motion.button 
            whileHover={{scale: 1.1, textShadow: '0 0 0.625rem white'}}
            onClick={setHome}
        className="logoText">Inti Vantalu</motion.button>
        <motion.ul variants={ulVariants} initial="init" anim="anim">
            <motion.li variants={liVariants} whileHover="hover" className="option menuBtn"><button onClick={setMenu}>Menu</button></motion.li>
            <motion.li variants={liVariants} whileHover="hover" className="option homeOp"><button onClick={setHome}>Home</button></motion.li>
            <motion.li variants={liVariants} whileHover="hover" className="option location"><button onClick={setLoc}>Location</button></motion.li>
        </motion.ul>
    </motion.nav>)
}