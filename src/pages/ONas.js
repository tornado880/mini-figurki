import React from "react";

import Banner from "../components/Banner";
import ONas2 from "../components/ONas2";

import img_1 from "../image/bg_3.png";


function ONas() {

    return (
        <div>
            <Banner title='O Nas' img={img_1} />
            <ONas2 img={img_1}/>
        </div>
    );
}

export default ONas;
