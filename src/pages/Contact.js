import React from "react";

import Banner from "../components/Banner";
import Contact2 from "../components/Contact2";

import img_1 from "../image/bg_4.png";


function Contact() {

    return (
        <div>
            <Banner title='Contact' img={img_1}/>
            <Contact2 img={img_1}/>
        </div>
    );
}

export default Contact;
