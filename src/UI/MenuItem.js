import React, { useState, useEffect } from "react";
import Quantity from "./Quantity";
import { Link } from "react-router-dom";

function MenuItem({ id, image, name, price, text, height, material, ruch, acsesoria, producent }) {
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

        sessionStorage.setItem(`text-${id}`, text);
        sessionStorage.setItem(`height-${id}`, height);
        sessionStorage.setItem(`material-${id}`, material);
        sessionStorage.setItem(`ruch-${id}`, ruch);
        sessionStorage.setItem(`acsesoria-${id}`, acsesoria);
        sessionStorage.setItem(`producent-${id}`, producent);

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

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div
            style={{
                // backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                position: "relative",
                // boxShadow: "1px 1px 50px black",
            }}
            className="m-0 p-0 "
        >
            <div
                style={{
                    padding: "15px",
                }}
                className="m-0  row justify-content-center align-items-center "
            >
                <div
                    style={{
                        maxWidth: "360px",
                        width: "100%",
                        backdropFilter: "blur(1px)",
                        boxShadow: "1px 1px 50px black",
                        // margin: "15px",
                    }}
                    className=" p-0 col-auto d-flex justify-content-center rounded"
                >
                    <img
                        style={{ maxWidth: "360px", width: "100%" }}
                        src={image}
                        className="m-0 p-0 o_towar rounded"
                        alt={name}
                    />

                    <div
                        style={{
                            position: "absolute",
                            maxWidth: "360px",
                            width: "100%",
                            maxHeight: "360px",
                            height: "100%",
                        }}
                        className="m-0 p-0 "
                    >
                        <Link
                    className="m-0 p-0"
                    style={{ width: "360px" }}
                    onClick={scrollToTop}


                    to={{
                        pathname: "/Sklep/Towar", // The path you want to navigate to
                        search: `?image=${encodeURIComponent(
                            image
                        )}&name=${encodeURIComponent(
                            name
                        )}&price=${encodeURIComponent(
                            price
                        )}&id=${encodeURIComponent(
                            id
                        )}&increment=${encodeURIComponent(
                            increment
                        )}&decrement=${encodeURIComponent(
                            decrement
                        )}&text=${encodeURIComponent(
                            text
                        )}&height=${encodeURIComponent(
                            height
                        )}&material=${encodeURIComponent(
                            material
                        )}&ruch=${encodeURIComponent(
                            ruch
                        )}&acsesoria=${encodeURIComponent(
                            acsesoria
                        )}&producent=${encodeURIComponent(
                            producent
                        )}
                        `,
                    }}
                >
                    <img
                        style={{ width: "100%" }}
                        src={image}
                        className="m-0 p-0 o_towar rounded"
                        alt={name}
                    />
                </Link>

                        <p
                            style={{
                                fontSize: "24px",
                                color: "white",
                                position: "absolute",
                                left: "0px",
                                top: '0px',
                                height: "45px",
                                backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                backdropFilter: "blur(5px)",
                                fontStyle: "italic",
                            }}
                            className="m-0 p-0 ps-3 pe-3 col-auto d-flex align-items-center fw-bold rounded"
                        >
                            {name}
                        </p>

                        <p
                            style={{
                                fontSize: "24px",
                                color: "white",
                                position: "absolute",
                                bottom: "0px",
                                right: "0px",
                                backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                backdropFilter: "blur(5px)",
                                height: "45px",
                                fontStyle: "italic",
                            }}
                            className="m-0 p-1 ps-3 pe-3 col-auto fw-bold d-flex align-items-center justify-content-end rounded"
                        >
                            {sum} zł
                        </p>

                        <div style={{ height: "0px" }}>
                            <Quantity
                                left="0vh"
                                quantity={quantity} // Use the state `quantity` here
                                increment={increment}
                                decrement={decrement}
                            />
                        </div>

                        <div
                            style={{
                                right: "0",
                                top: "0",
                                cursor: "pointer",
                                zIndex: 800,
                                height: "60px",
                                width: "45px",
                            }}
                            className="o_btn_nav m-0 p-1 fw-bold position-absolute d-flex justify-content-center align-items-center rounded"
                            onClick={buy}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                width="36"
                                height="36"
                                className="bi bi-bag-fill m-0 p-1"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
