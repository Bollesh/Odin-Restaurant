import { AnimatePresence, motion } from "framer-motion";
import { pagesContext } from "../context/PagesContext";
import { useContext } from "react";

import MenuItem from "./MenuItem";

const items = ['idli', 'vada', 'idli-vada', 'dosa', 'appe', 'prawns', 'fish', 'thali']
const price = ['30', '40', '50', '80', '50', '250', '200', '300']

export default function Menu(){
    const itemElems = [];
    for(let i = 0, j = 0; i < items.length; i++, j++){
        itemElems.push
            (<MenuItem
                img={require(`../images/${items[i]}.jpg`)}
                desc={items[i]}
                cost={price[j]}
            />)
    }
    // const itemElems = items.map(item=>{
    //     return (
    //         <MenuItem
    //             key={item}
    //             img={require(`../images/${item}.jpg`)}
    //             desc={item}
    //             cost={Math.floor((Math.random()*200))}
    //         />
    //     )
    // })
    const pages = useContext(pagesContext)
    return(
        <AnimatePresence>
            {pages.menu && (
                <motion.div className="menu"
                    initial={{opacity: 0, display: "none"}}
                    animate={{opacity: 1, display: "grid"}}
                    exit={{opacity: 0, transition: "none"}}
                    transition={{delay: 0.5, duration: 0.8}}
                >
                    {itemElems}
                </motion.div>
            )}
        </AnimatePresence>
    )
}