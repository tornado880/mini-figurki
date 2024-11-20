import React from "react";

import Banner from "../components/Banner";
import Blik from "../components/Admin/Blik";

import img_1 from "../image/bg_0.png";

function Admin() {

    return (
        <div>
            <Banner title='Info' img={img_1} />
            <Blik />

        </div>
    );
}

export default Admin;
