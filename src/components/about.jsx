
import { useState } from "react";
import "./about.css";



const About = ()=> {
        const [visible,setVisible] = useState(false);
        
    const changeVisibility = () =>{
            setVisible  (true);    
    };
    return(
        <div className="about">
            <h1>About Me</h1>
            <h2>DeVonte Gray</h2>

            {visible ? <h4>name@email.com</h4> :"Click on button below:"}
            <button onClick={changeVisibility}>Show Info</button>
        </div>
    );
};

export default About;