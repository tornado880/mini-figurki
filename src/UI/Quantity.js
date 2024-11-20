import React from "react";

function Quantity({ left , top, quantity, increment, decrement }) {
    return (
        <div
            style={{
                margin: 0,
                padding: "0",
                position: "absolute",
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                zIndex: 900,
                textAlign: "center",
                fontWeight: "bold",
                border: "none",
                color: "white",
                position: 'absolute',
                left: left,
                top: top,
            }} className="col-7 col-sm-5 col-lg-4"
        >
            <div
                style={{
                    margin: 0,
                    padding: "0px",
                    minWidth: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "24px",
                    textAlign: "center",
                    minHeight: '45px'

                    // backdropFilter: "blur(5px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.5)"
                }}
                className="o_btn_nav rounded rounded-bottom-0 "
                onClick={decrement}
            >
                -
            </div>

            <div
                style={{
                    margin: 0,
                    padding: "0px 12px",
                    display: "flex",
                    width: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    outline: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    backdropFilter: "blur(24px)",
                    height: '45px',
                    fontStyle: 'italic',
                    // backdropFilter: "blur(5px)",
                    // textShadow:
                    //     "1px 1px 1px black, 1px 1px 5px black, 1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black"
                }} className=" pt-1 rounded rounded-bottom-0"
            >
                {quantity}
            </div>

            <div
                style={{
                    margin: 0,
                    padding: "0px",
                    minWidth: "30px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "24px",
                    minHeight: '45px',

                    // border: "1px solid white",
                    textAlign: "center",
                    // backdropFilter: "blur(5px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                    paddingTop: '0.05vh',

                }}
                className="o_btn_nav rounded rounded-bottom-0"
                onClick={increment}
            >
                +
            </div>
        </div>
    );
}

export default Quantity;
