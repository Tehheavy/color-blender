import React,{ useState } from "react";
import './combinedcolors.css'
// import { SketchPicker } from 'react-color';
// import './colorpickers.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function CombinedColors(props) {
    const [colorvalue,setColorValue]=useState(0);
    const onClick = () => {
        alert("copied!")
    }
  // const [color,setColor]=useState({colors:[]})
//   console.log("props are "+props.colors)
//   console.log(props.colors);
    if(props.colors.length===0)
    {
        console.log("EMPTY")

        return <div>
        <p className="color-result-class">color</p>
        <p>test</p>
        </div>
    }

    else{
        console.log("HAS VALUE")
        let val=0;
        let a=0
        let b=0
        let c=0
        for(let i=0;i<props.colors.length;i++){
            // console.log(props.colors[i].tempcolor.hex)
            val+=parseInt("0x"+props.colors[i].tempcolor.hex.slice(1,props.colors[i].tempcolor.hex.length))
            a+=parseInt("0x"+props.colors[i].tempcolor.hex.slice(1,3))
            b+=parseInt("0x"+props.colors[i].tempcolor.hex.slice(3,5))
            c+=parseInt("0x"+props.colors[i].tempcolor.hex.slice(5,7))
        }
        val=parseInt(val/props.colors.length)
        a=parseInt(a/props.colors.length)
        b=parseInt(b/props.colors.length)
        c=parseInt(c/props.colors.length)
        let hexa=('00' + a.toString(16).toUpperCase()).slice(-2);
        let hexb=('00' + b.toString(16).toUpperCase()).slice(-2);
        let hexc=('00' + c.toString(16).toUpperCase()).slice(-2);
        console.log("hexa b c:",hexa,hexb,hexc)
        console.log("#"+val.toString(16),"value is",val)
        console.log(props.colors.length,"aisojdoasjd")
        let str="#"+val.toString(16)
        let newstring="#"+hexa+hexb+hexc
        console.log(newstring)
        return <div>
            <p className="color-result-class" style={{backgroundColor:newstring}}>{newstring}</p>
            <CopyToClipboard onCopy={onClick} text={newstring}>
            <button>Copy to clipboard</button>
           </CopyToClipboard>
            </div>
        
    }



}

export default CombinedColors;
