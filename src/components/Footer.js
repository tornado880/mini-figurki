import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Banner_img_3 from "../image/footer.png";

function Footer() {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div
            className="m-0 p-0 border-top border-2 border-primary"
            style={{
                position: "relative",
                width: "100%",
                // height: "420px",
                backgroundImage: `url(${Banner_img_3})`, // Correct way to use a variable for background image
                backgroundSize: "cover", // Make sure the image covers the div properly
                backgroundPosition: "bottom", // Centers the background image
                objectFit: "cover", // Ensures the image maintains its aspect ratio and covers the container
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    color: "white",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "hsla(0, 0%, 0%, 0.76)",
                }}
                className="m-0 p-0 row align-items-end justify-content-between "
            >
                <div className="m-0 p-0 col-12 text-white row justify-content-around align-items-center">
                    <div style={{ height: "15px" }}></div>

                    <div className="m-0 p-0 row fw-bold text-center justify-content-center  align-items-center">
                        <Link
                            style={{
                                fontSize: "18px",
                                minHeight: "30px",
                                height: "45px",
                                margin: "15px",
                            }}
                            className="o_btn_nav  ps-3 pe-3 col-auto d-flex align-items-center justify-content-center rounded"
                            to="/Sklep"
                            onClick={scrollToTop}
                        >
                            Główna
                        </Link>

                        <Link
                            style={{
                                fontSize: "18px",
                                minHeight: "30px",
                                height: "45px",
                                margin: "15px",
                            }}
                            className="o_btn_nav  ps-3 pe-3 col-auto d-flex align-items-center justify-content-center rounded"
                            to="/Sklep/Koszyk"
                            onClick={scrollToTop}
                        >
                            Koszyk
                        </Link>

                        <Link
                            style={{
                                fontSize: "18px",
                                minHeight: "30px",
                                height: "45px",
                                margin: "15px",
                            }}
                            className="o_btn_nav  ps-3 pe-3 col-auto d-flex align-items-center justify-content-center rounded"
                            to="/Sklep/O_Nas"
                            onClick={scrollToTop}
                        >
                            O nas
                        </Link>

                        <Link
                            style={{
                                fontSize: "18px",
                                minHeight: "30px",
                                height: "45px",
                                margin: "15px",
                            }}
                            className="o_btn_nav  ps-3 pe-3 col-auto d-flex align-items-center justify-content-center rounded"
                            to="/Sklep/Kontact"
                            onClick={scrollToTop}
                        >
                            Kontact
                        </Link>

                        <div style={{ height: "45px" }}></div>
                    </div>
                </div>

                <Link
                    style={{ height: "45px", width: "30px", cursor: 'default' }}
                    className="m-0 p-0 col-auto"
                    to='/Sklep/Admin'
                >
                    
                </Link>
                
                <div
                    style={{
                        fontSize: "18px",
                        height: "45px",
                        fontStyle: "italic",
                    }}
                    className="o_text m-0 p-0 col fw-normal"
                >
                    © 2024 Wanapix
                </div>
            </div>
        </div>
    );
}

export default Footer;
