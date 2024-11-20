import React from "react";

import Banner from "../components/Banner";
import Menu2 from "../components/Buy/Menu2";
import Form from "../components/Buy/Form";
import Zaplac from "../components/Buy/Zaplac";

import img_1 from "../image/bg_2.png";


function Buy() {
    return (
        <div>
            <Banner title="Koszyk" img={img_1} />
            <Menu2 img={img_1}/>
            <Form  img={img_1}/>
            <Zaplac />

        </div>
    );
}

export default Buy;
