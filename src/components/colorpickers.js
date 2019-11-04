import React,{ useState } from "react";

import { SketchPicker } from 'react-color';
import './colorpickers.css'

function ColorPickers(props) {
  // const [color,setColor]=useState({colors:[]})
//   console.log("props are "+props.colors)
//   console.log(props.colors);
  const content = props.name.map((name) =>{
     const getFruit = props.name.find(color => color.key === name.key);
     const temp=getFruit.tempcolor.hex
      console.log("key is "+name.key,getFruit.tempcolor,temp)
     return <div className="color-picker-class" key={name.key} style={{backgroundColor:temp,marginTop:"1rem"}}><SketchPicker disableAlpha={true} className="sketch" color={getFruit.tempcolor.hex} key={name.key} data-tag={name.key} onChange={(color)=>{
        //  console.log(color)
        //  console.log(getFruit+"fruit")
        props.onChangeComplete(color,name.key)}}></SketchPicker></div>
 
   }
 
 );     

 return <div>{content}</div>


}

export default ColorPickers;
