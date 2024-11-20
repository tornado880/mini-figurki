import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Quantity from "../UI/Quantity";
import { Link } from "react-router-dom";

const Towar = () => {
    const location = useLocation();

    // Extract query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const image = queryParams.get("image");
    const name = queryParams.get("name");
    const price = parseFloat(queryParams.get("price")) || 0; // Ensure price is a number
    const id = queryParams.get("id");

    const text = queryParams.get("text");
    const height = queryParams.get("height");
    const material = queryParams.get("material");
    const ruch = queryParams.get("ruch");
    const acsesoria = queryParams.get("acsesoria");
    const producent = queryParams.get("producent");

    const [quantity, setQuantity] = useState(1);
    const [sum, setSum] = useState(price);

    // useEffect to initialize stored values from sessionStorage
    useEffect(() => {
        const storedSum = sessionStorage.getItem(`sum-${id}`);
        const storedQuantity = sessionStorage.getItem(`quantity-${id}`);

        if (storedSum) {
            setSum(Number(storedSum)); // Ensure sum is a number
        }

        if (storedQuantity) {
            setQuantity(Number(storedQuantity)); // Ensure quantity is a number
        }
    }, [id]); // This effect runs only when `id` changes (initialization)

    // useEffect to listen for changes in sessionStorage
    useEffect(() => {
        const handleStorageChange = () => {
            const storedQuantity = sessionStorage.getItem(`quantity-${id}`);
            if (storedQuantity) {
                setQuantity(Number(storedQuantity)); // Update quantity from sessionStorage
            }

            const storedSum = sessionStorage.getItem(`sum-${id}`);
            if (storedSum) {
                setSum(Number(storedSum)); // Update sum from sessionStorage
            }
        };

        // Listen for changes in sessionStorage
        window.addEventListener("storage", handleStorageChange);

        // Cleanup the event listener when component is unmounted or id changes
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [id]); // This effect will rerun if the `id` changes, ensuring the listener is reattached for each new item.

    // Update `sum` whenever `quantity` or `price` changes
    useEffect(() => {
        // Calculate the sum when price or quantity changes
        setSum(price * quantity);
    }, [price, quantity]); // Only trigger this effect on `price` or `quantity` changes

    function buy() {
        // Retrieve the existing quantity from sessionStorage or default to 0
        const storedQuantity =
            parseInt(sessionStorage.getItem(`quantity-${id}`)) || 0;
        let newQuantity;

        // Add the current quantity to the stored quantity (no multiplication by 2)
        if (storedQuantity !== quantity) {
            // If storedQuantity is different, set newQuantity to current quantity
            newQuantity = quantity;
        } else {
            // If they are equal, increment the stored quantity by 1
            newQuantity = storedQuantity + 1;
        }

        // Calculate the total sum based on the new quantity
        const newSum = price * newQuantity;

        // Update the state and sessionStorage with the new values
        setSum(newSum);
        sessionStorage.setItem(`quantity-${id}`, newQuantity); // Store the new quantity
        sessionStorage.setItem(`sum-${id}`, newSum); // Store the new sum
        sessionStorage.setItem(`id-${id}`, id);
        sessionStorage.setItem(`name-${id}`, name);
        sessionStorage.setItem(`image-${id}`, image);
        sessionStorage.setItem(`price-${id}`, price);

        // Reflect the updated quantity in the component's state
        setQuantity(newQuantity);
    }

    function decrement() {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    function increment() {
        setQuantity(quantity + 1);
    }

    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                position: "relative",
                boxShadow: "1px 1px 50px black",
            }}
            className="m-0 p-0 "
        >
            <div
                style={{
                    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                    backdropFilter: "blur(5px)",
                    padding: "20px",
                    paddingTop: "90px",
                    paddingBottom: "60px",
                }}
                className="m-0 row justify-content-center align-items-center position-relative "
            >
                <div
                    style={{
                        maxWidth: "720px",
                        width: "100%",
                        backdropFilter: "blur(1px)",
                        boxShadow: "1px 1px 50px black",
                        marginInline: "30px",

                        // marginBottom: "30px",
                    }}
                    className=" p-0 col-auto d-flex justify-content-center "
                >
                    <img
                        style={{ maxWidth: "720px", width: "100%" }}
                        src={image}
                        className="m-0 p-0 border border-2 border-primary rounded"
                        alt={name}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "2px",
                            right: "2px",
                            backdropFilter: "blur(3px)",
                            height: "30px",
                            width: '80px'
                        }} className="m-0 p-0 rounded"
                    >
                        
                    </div>
                </div>

                <div
                    style={{
                        maxWidth: "720px",
                        width: "100%",
                        backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                        margin: "0px",
                        // marginBottom: "30px",
                        padding: "15px",
                        paddingTop: "30px",
                    }}
                    className=" col-auto row justify-content-between align-items-center border border-2 border-primary rounded"
                >
                    {/* <div style={{ height: "15px", }}></div> */}

                    {/* <div
                        style={{
                            fontSize: "36px",
                            height: "60px",
                            marginBottom: "30px",
                        }}
                        className=" p-0 col-12 col-sm text-white  d-flex align-items-center justify-content-center fw-bold"
                    >
                        {name}
                    </div> */}

                    <div
                        style={{ minWidth: "150px" }}
                        className="m-0 p-0 col row justify-content-center align-items-center"
                    >
                        <div
                            style={{
                                fontSize: "36px",
                                // fontStyle: "italic",
                                minHeight: "60px",
                                marginBottom: "30px",
                            }}
                            className="p-0 ps-3 pe-3 col-auto  text-white  d-flex align-items-center justify-content-center fw-bold border-bottom border-4 border-primary"
                        >
                            {name}
                        </div>
                    </div>

                    <div
                        style={{
                            margin: 0,
                            padding: "0",
                            // position: "absolute",
                            // bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 900,
                            textAlign: "center",
                            fontWeight: "bold",
                            border: "none",
                            color: "white",
                            // left: left,
                            // top: top,
                            height: "45px",
                            marginBottom: "30px",
                            minWidth: "150px",
                        }}
                        className="col "
                    >
                        <div
                            style={{
                                margin: 0,
                                padding: "0px",
                                minWidth: "45px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                fontSize: "24px",
                                textAlign: "center",
                                minHeight: "45px",
                                fontSize: "36px",
                                maxHeight: "45px",

                                // backdropFilter: "blur(5px)",
                                // backgroundColor: "hsla(0, 0%, 0%, 0.5)"
                            }}
                            className="o_btn_nav pb-1 rounded"
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
                                fontSize: "24px",
                                fontWeight: "bold",
                                backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                                backdropFilter: "blur(24px)",
                                height: "45px",
                                maxHeight: "45px",

                                fontStyle: "italic",
                                // backdropFilter: "blur(5px)",
                                // textShadow:
                                //     "1px 1px 1px black, 1px 1px 5px black, 1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black"
                            }}
                        >
                            {quantity}
                        </div>

                        <div
                            style={{
                                margin: 0,
                                padding: "0px",
                                minWidth: "45px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                fontSize: "36px",
                                minHeight: "45px",
                                maxHeight: "45px",

                                // border: "1px solid white",
                                textAlign: "center",
                                // backdropFilter: "blur(5px)",
                                // backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                paddingTop: "0.05vh",
                            }}
                            className="o_btn_nav rounded"
                            onClick={increment}
                        >
                            +
                        </div>
                    </div>

                    <div
                        style={{ minWidth: "150px" }}
                        className="m-0 p-0 col row justify-content-center"
                    >
                        <div
                            style={{
                                fontSize: "36px",
                                fontStyle: "italic",
                                minHeight: "60px",
                                marginBottom: "30px",
                            }}
                            className="p-0 ps-3 pe-3 col-auto  text-white  d-flex align-items-center justify-content-center fw-bold border-bottom border-4 border-primary"
                        >
                            {sum} zł
                        </div>
                    </div>

                    <div
                        style={{
                            cursor: "pointer",
                            zIndex: 800,
                            minHeight: "60px",
                            // minWidth: "120px",
                        }}
                        className="o_btn_nav m-0  p-1 col-12 fw-bold text-center d-flex justify-content-center align-items-center rounded"
                        onClick={buy}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            width="36"
                            height="36"
                            className="bi bi-bag-fill m-0 p-1 "
                            viewBox="0 0 16 16"
                            style={{ minWidth: "36px" }}
                        >
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                        </svg>
                        <div className="m-0 p-0 ps-2 pt-1 text-start d-flex justify-content-center align-items-center">
                            Dodaj do koszyka
                        </div>
                    </div>

                    <div style={{ height: "30px" }} className="m-0 p-0"></div>

                    <div
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            textAlign: "justify",
                            textShadow:
                                "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black,",
                        }}
                        className="m-0 p-0 text-white"
                    >
                        &nbsp; {text}
                    </div>

                    <div
                        style={{ height: "25px" }}
                        className="m-0 p-0 col-12"
                    ></div>

                    <div
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            minHeight: "45px",
                            width: "180px",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                            margin: "5px",
                        }}
                        className=" p-1 ps-2 text-white  d-flex align-items-center justify-content-center border border-2 border-primary rounded"
                    >
                        Wysokość: <b className="m-0 p-0 ps-2 pe-2"> {height}</b>
                    </div>

                    <div
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            minHeight: "45px",
                            width: "180px",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                            margin: "5px",
                        }}
                        className="p-1 ps-2 text-white  d-flex align-items-center justify-content-center border border-2 border-primary rounded"
                    >
                        Materiał: <b className="m-0 p-0 ps-2 pe-2"> {material}</b>
                    </div>

                    <div
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            minHeight: "45px",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                            width: "240px",
                            margin: "5px",
                        }}
                        className="p-1 ps-2 text-white  d-flex align-items-center justify-content-center border border-2 border-primary rounded"
                    >
                        Zakres ruchu:
                        <b className="m-0 p-0 ps-2 pe-2"> {ruch} </b>
                    </div>

                    <div
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            minHeight: "45px",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                            width: "270px",
                            margin: "5px",
                        }}
                        className="p-1 ps-2 text-white  d-flex align-items-center justify-content-center border border-2 border-primary rounded"
                    >
                        Akcesoria w zestawie:
                        <b className="m-0 p-0 ps-2 pe-2"> {acsesoria} </b>
                    </div>

                    <div
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            minHeight: "45px",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                            width: "280px",
                            margin: "5px",
                        }}
                        className="p-1 ps-2 text-white  d-flex align-items-center justify-content-center border border-2 border-primary rounded"
                    >
                        Producent: <b className="m-0 p-0 ps-2 pe-2"> {producent}</b>
                    </div>

                    <div style={{ height: "10px" }} className="m-0 p-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Towar;
