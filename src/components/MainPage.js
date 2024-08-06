import { AnimatePresence, easeIn, motion } from "framer-motion"
import { pagesContext } from "../context/PagesContext";
import { useContext } from "react";

// random manager setter
const rand = Math.random();
const cssRoot = document.querySelector(':root');
const manImg = rand < 0.5 ? require(`../images/fem_man.jpg`) : require(`../images/male_man.jpg`)
cssRoot.style.setProperty('--man-img', `url(${manImg})`)

export default function MainPage(){
    const pages = useContext(pagesContext)
    return (
        <AnimatePresence onExitComplete={()=>null}>
            {pages.home && (<motion.div className="MainPage"
                key="MainPage"
                initial={{opacity: 0, display: "none"}}
                animate={{opacity: 1, display: "flex"}}
                transition={{delay: 0.75, duration: 1}}
                exit={{opacity: 0, transition: 'none'}}
            >
                <motion.section key="section">
                    <motion.div className="managerCircle"
                        key="managerCircle"
                        animate={{scale: 0.8}}
                        transition={{delay: 1, duration: 0.75}}
                    ></motion.div>
                    <motion.div className="bottom moreText"
                        key="moreText" 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1.5, duration: 0.8}}
                    >About us: I like dosas Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, beatae cupiditate hic sed voluptate error minima laboriosam mollitia ratione ipsa, facilis facere accusantium, a nobis!</motion.div>
                </motion.section>
                <motion.img
                    initial={{rotate: "-90deg", x: -1000, y: 1000}}
                    animate={{rotate: 0, x: 0, y: 0}}
                    transition={{duration: 1, delay: 0.5}}
                    src={require(`../images/pngegg (2).png`)}
                    alt="tree on the left"
                    className="left tree" 
                />
                <motion.img
                    initial={{transform: "rotate(90deg) rotateY(180deg) translate(-1000px, 1000px)"}}
                    animate={{transform: "rotate(0) rotateY(180deg) translate(0,0)"}}
                    transition={{duration: 1, delay: 0.5}}
                    src={require(`../images/pngegg (2).png`)} alt="" className="right tree" />
            </motion.div>)}
        </AnimatePresence>
    )
}