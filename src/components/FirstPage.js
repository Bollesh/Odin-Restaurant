import VaraText from "./VaraText"

export default function FirstPage(){
    let leaves = ["BottomLeft", "BottomRight", "TopLeft", "TopRight"]
    let leavesElems = leaves.map(leaf => {
        return (
            <img src={require(`../images/bananaLeaf${leaf}.png`)} alt={`${leaf} leaf`} className={`leaf ${leaf}`} />
        )
    })
    return(
        <div className="home">
            <div className="leaves">
                {leavesElems}
            </div>
            <div className="rippleGradient"></div>
            <div className="textBox">
                <div className="circle"></div>
                <VaraText text="Inti Vantalu" />
                <div className="enterPrompt">Press Any Key to Enter</div>
            </div>
        </div>
    )
}