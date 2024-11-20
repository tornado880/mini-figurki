import React, { useState, useRef } from "react";


const ONas2 = ({img}) => {
    return (
        <div
            className="m-0 p-0 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                objectFit: "cover",
                // backgroundSize: "cover", // Make sure the image covers the div properly
            }}
        >
            <div
                style={{
                    backdropFilter: "blur(25px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    width: "100vw",
                }}
                className="m-0 p-0 row align-items-evenly justify-content-center"
            >
                <div style={{ height: "25px" }} className="m-0 p-0 row"></div>

                {/* List Section */}
                <div
                    className="d-flex flex-wrap justify-content-between"
                    style={{
                        padding: '0',
                        paddingInline: '25px',
                        maxWidth: "720px", // Optional: you can control the maximum width
                    }}
                >
                    {[
                        "Młody zespół",
                        "Wiedza praktyczna i merytoryczna",
                        "Doświadczenie i zrozumienie rynku",
                        "Wyjątkowe produkty",
                        "Profesjonalna obsługa",
                        "Wynagradzanie kupujących",
                        "Konkursy i comiesięczne promocje",
                        "Długie godziny pracy infolinii",
                        "Sprawna obsługa reklamacji",
                        "Duży wzrost na rynku",
                        "Szybkie odpowiedzi na maile",
                        "99% wysyłek w 24h",
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                fontSize: "18px",
                                fontStyle: "italic",
                                color: "white",
                                minHeight: "45px",
                                // width: "360px",
                                backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                margin: "5px",
                                textShadow:
                                    "1px 1px 30px black, 1px 1px 30px black, 1px 1px 30px black",
                                boxShadow: "1px 1px 30px black",
                            }}
                            className="p-1 ps-3 pe-3 d-flex align-items-center text-start justify-content-center border border-2 border-primary fw-bold rounded"
                        >
                            {item}
                        </div>
                    ))}
                    <div
                        style={{ height: "25px" }}
                        className="m-0 p-0 col-12"
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ONas2;
