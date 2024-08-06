import { motion } from "framer-motion"

const itemVariant = {
    hover:{}
}

const imageVariant = {
    hover:{boxShadow: "0 0 10px white"}
}

const titleVariant = {
    hover: {textShadow: "0 0 10px white"}
}

export default function MenuItem({ img, desc, cost }){
    return (
        <motion.div className="menu-item" variants={itemVariant} whileHover="hover">
            <motion.img src={img} alt={`image of ${desc}`}  className={`item ${desc}`} variants={imageVariant}/>
            <motion.div className="desc">
                <motion.div className="descTitle" variants={titleVariant}>{desc.toUpperCase()}</motion.div>
                <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut mollitia nihil inventore, optio aliquid.</div>
                <motion.div className="price">₹{cost}</motion.div>
            </motion.div>
        </motion.div>
    )
}