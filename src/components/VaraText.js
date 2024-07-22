import { useEffect } from "react";
import Vara from "vara";

export default function VaraText({ text }){
    useEffect(()=>{
        var vara = new Vara(
            "#vara-cont",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Shadows-Into-Light/shadows-into-light.json",
            [
                {
                    text: text,
                    delay: 2200,
                    duration: 2500,
                    letterSpacing: 1
                }
            ],
            {
                strokeWidth: 3,
                color: "#3F5822",
                fontSize: 69,
                textAlign: "center"
            }
        );
    },[])

    return <div id="vara-cont"></div>
}