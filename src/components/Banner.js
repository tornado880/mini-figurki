import React from "react";

function Banner({ title, img }) {
    return (
        <div
            className="m-0 p-0 border-bottom border-2 border-primary"
            style={{
                position: "relative",
                width: "100%",
                height: "50vh",
            }}
        >
            <a
                className="m-0 p-0"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    // cursor: "default",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    className="m-0 p-0"
                    src={img}
                />
            </a>

            <div
                style={{
                    fontSize: "36px", // Adjusted to be responsive
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    minHeight: '90px',
                    maxWidth: '360px',
                    minWidth: '161px',
                    transform: "translate(-50%, -50%)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textShadow: "1px 1px 10px black, 1px 1px 30px black",
                    boxShadow: "1px 1px 30px black",
                    border: "4px solid var(--bs-primary)",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                    // width: '360px',
                }}
                className="m-0 p-1 ps-4 pe-4 fw-bold text-white text-center rounded"
            >
                {title}
            </div>

            
        </div>
    );
}

export default Banner;
