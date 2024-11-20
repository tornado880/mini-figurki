import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Quantity from "./Quantity";

function MenuItem2({ id, image, name, price, sum, quantity, onItemDelete }) {
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const [itemSum, setItemSum] = useState(sum);

    const text = sessionStorage.getItem(`text-${id}`);
    const height = sessionStorage.getItem(`height-${id}`);
    const material = sessionStorage.getItem(`material-${id}`);
    const ruch = sessionStorage.getItem(`ruch-${id}`);
    const acsesoria = sessionStorage.getItem(`acsesoria-${id}`);
    const producent = sessionStorage.getItem(`producent-${id}`);

    // Update sum and sync sessionStorage whenever quantity changes
    useEffect(() => {
        const newSum = price * itemQuantity;
        setItemSum(newSum);

        sessionStorage.setItem(`quantity-${id}`, itemQuantity);
        sessionStorage.setItem(`sum-${id}`, newSum);
    }, [itemQuantity, price, id]);

    const increment = () => setItemQuantity((prev) => prev + 1);
    const decrement = () =>
        setItemQuantity((prev) => (prev > 1 ? prev - 1 : prev));

    const handleDelete = () => {
        // Loop through the keys and remove them from sessionStorage
        [
            "id",
            "image",
            "name",
            "price",
            "sum",
            "quantity",
            "text",
            "height",
            "material",
            "ruch",
            "acsesoria",
            "producent",
        ].forEach((key) => {
            sessionStorage.removeItem(`${key}-${id}`); // Remove each key for the specific id
        });

        // Set the total values to 0 after deleting the item
        sessionStorage.setItem("totalSum", 0);
        sessionStorage.setItem("totalQuantity", 0);

        onItemDelete(id); // Notify parent to remove the item
    };

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",

                width: "360px",
                position: "relative",
                boxShadow: "1px 1px 50px black",
                margin: "15px",
            }}
            className="o_towar p-0 rounded"
        >
            <div
                style={{ backgroundColor: "hsla(0, 0%, 0%, 0.25)" }}
                className="rounded"
            >
                <Link
                    className="m-0 p-0 rounded"
                    onClick={scrollToTop}
                    to={{
                        pathname: "/Towar", // The path you want to navigate to
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
                        )}&producent=${encodeURIComponent(producent)}
                        `,
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: "blur(5px)",
                        zIndex: 1,
                    }}
                >
                    {" "}
                </Link>

                <Link
                    className="m-0 p-0 rounded"
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
                        )}&producent=${encodeURIComponent(producent)}`,
                    }}
                >
                    {" "}
                   
                    <img
                        style={{
                            width: "150px",
                            position: "relative",
                            zIndex: 2,
                        }}
                        src={image}
                        alt={name}
                        className="m-0 p-0 rounded"
                    />
                </Link>
                

                    <p
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: "130px",
                        zIndex: 995,
                        height: "7px",
                        backdropFilter: "blur(3px)",
                        width: '20px',

                    }}
                    className="m-0 p-0 rounded-end rounded-pill rounded-bottom-0"
                >
               </p>
                <p
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "150px",
                        zIndex: 995,
                        fontSize: "24px",
                        color: "white",
                        height: "45px",
                        fontStyle: "italic",
                        backgroundColor: "hsla(0, 0%, 0%, 0.25)",

                        textShadow:
                            "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                    }}
                    className="m-0 p-1 ps-2 pe-2 fw-bold d-flex align-items-center rounded"
                >
                    {name}
                </p>

                <div
                    style={{
                        right: 0,
                        top: 0,
                        zIndex: 9,
                        position: "absolute",
                        width: "30px",
                        height: "45px",
                        minWidth: "30px",
                        minHeight: "30px",
                    }}
                    className="o_btn_nav m-0 p-0 col fw-bold d-flex justify-content-center align-items-center border-top-0 border-end-0 rounded rounded-top-0 rounded-end-0"
                    onClick={handleDelete}
                    aria-label={`Delete ${name}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        width="30"
                        height="30"
                        className="bi bi-x-lg m-0 p-1 "
                        viewBox="0 0 16 16"
                        style={{ zIndex: 888 }}
                    >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </div>

                <Quantity
                    left="150px"
                    top="106px"
                    quantity={itemQuantity}
                    increment={increment}
                    decrement={decrement}
                />

                <p
                    style={{
                        position: "absolute",
                        right: "0px",
                        bottom: "50px",
                        zIndex: 995,
                        fontSize: "24px",
                        color: "white",
                        height: "45px",
                        fontStyle: "italic",
                        backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                        textShadow:
                            "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                    }}
                    className=" m-0 p-1 ps-2 pe-3 fw-bold d-flex justify-content-center align-items-center rounded"
                >
                    {itemSum} zł
                </p>
            </div>
        </div>
    );
}

export default MenuItem2;
