import React from "react";

import Banner from "../components/Banner";
import Menu from "../components/Home/Menu";

import img_1 from "../image/bg_1.png";

function Home() {

    return (
        <div>
            <Banner title='Mini-Figurki' img={img_1}/>
            <Menu img={img_1}/>
        </div>
    );
}

export default Home;
