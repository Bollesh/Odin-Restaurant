import { useEffect, useState } from "react";
import VaraText from "./VaraText"
import { motion, AnimatePresence } from "framer-motion"

export default function FirstPage({ close }){
    let leaves = [["BottomLeft", "BottomRight", "TopLeft", "TopRight"], [-1,1,1,-1], [1,1,-1,-1]]
    let leavesElems = [];
    for(let i = 0; i < 4; i++){ 
        leavesElems.push(<motion.img
            key={leaves[0][i]}
            src={require(`../images/bananaLeaf${leaves[0][i]}.png`)}
            alt={`${leaves[0][i]} leaf`}
            className={`leaf ${leaves[0][i]}`}
            initial={{transform: `translate(${leaves[1][i]*1000}px, ${leaves[2][i]*1000}px) rotate(${leaves[1][i] > 0 ? -90 : 90}deg)`}}
            animate={{transform: `translate(0, 0) rotate(0)`}}
            transition={{delay: 1, duration: 1}}
            exit={{transform: `translate(${i % 2 === 0 ? -1000 : 1000}px, ${i < 2 ? 1000 : -1000}px) rotate(${i % 2 === 0 ? 90 : -90}deg)`}}
        />)
    }

    return(
        <AnimatePresence onExitComplete={()=>null}>
            {!close && <div className="home">
                <div className="leaves">
                        {leavesElems}
                </div>
                <div className="rippleGradient"></div>
                <motion.div className="textBox"
                    exit={{opacity: 0}}
                    transition={{duration: 1}}
                >
                    <motion.div
                        className="circle"
                        animate={{opacity: 1}}
                        transition={{delay: 1, duration: 0.8}}
                    ></motion.div>
                    <VaraText text="Inti Vantalu"/>
                    <motion.div className="enterPrompt"
                        initial={{flex: 0, opacity: 0}}
                        animate={{flex: 0.2, opacity: 1}}
                        transition={{delay: 4, duration: 1}}
                    >Press Any Key to Enter</motion.div>
                </motion.div>
            </div>}
        </AnimatePresence>
    )
}