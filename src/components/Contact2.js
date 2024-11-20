import React from "react";

const Contact2 = ({ img }) => {
    return (
        <div
            className=" m-0 p-0 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                // backgroundSize: "cover", // Make sure the image covers the div properly

                objectFit: "cover",
            }}
        >
            <div
                className="m-0  row align-items-evenly justify-content-evenly"
                style={{
                    backdropFilter: "blur(25px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    width: "100vw",
                    padding: "0px",
                    paddingLeft: "25px",
                }}
            >
                {/* Spacer */}
                {/* <div style={{ height: "25px" }} className="m-0 p-0 row justify-content-center"></div> */}

                {/* List Section */}
                {/* <div
                    style={{ marginTop: "30px", maxWidth: "480px" }}
                    className=" p-0 pe-3 col-auto d-flex flex-column justify-content-center align-items-center"
                > */}

                <div
                    className=" p-0 col-12 d-flex flex-wrap justify-content-center"
                    style={{
                        marginTop: "30px",
                        // maxWidth: "480px", // Optional: you can control the maximum width
                    }}
                >
                    {[
                        // "+48 664 554 353",
                        "mini-figurki@sklep.pl",
                        "Maratońska 39, 94-102 Łódź",
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                fontSize: "18px",
                                fontStyle: "italic",
                                color: "white",
                                minHeight: "45px",

                                minWidth: "75px",
                                margin: "5px",
                                marginRight: "25px",
                                boxShadow: "1px 1px 30px black",

                                backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                textShadow:
                                    "1px 1px 10px black, 1px 1px 30px black",
                            }}
                            className=" p-1 ps-3 pe-3 d-flex align-items-center justify-content-start border border-2 border-primary fw-bold rounded"
                        >
                            {item}
                        </div>
                    ))}
                </div>

                {/* Map Section */}
                <div
                    className=" p-0 col border border-2 border-primary rounded"
                    style={{
                        // width: "360px",
                        backgroundColor: "hsla(0, 0%, 0%, 0,25)",
                        margin: "30px",
                        marginLeft: "0px",
                        marginRight: "25px",

                        maxWidth: "780px",
                        minWidth: "240px",
                        height: "480px",
                    }}
                >
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.5595190821797!2d19.46540574863572!3d51.77143661868584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcb29aabf0b4d%3A0xe137a5e078c6e029!2zTWFyYXRvxYRza2EgMzksIDk0LTEwMiDFgcOzZMW6!5e0!3m2!1suk!2spl!4v1732015191090!5m2!1suk!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="m-0 p-0"
                    ></iframe>

                   
                </div>

                {/* Spacer */}
                <div style={{ height: "0px" }} className="m-0 p-0 row"></div>
            </div>
        </div>
    );
};

export default Contact2;
