import React, { useEffect, useState } from "react";
import MenuItem2 from "../../UI/MenuItem2";
import { Link } from "react-router-dom";

const Menu2 = ({ img }) => {
    const [menuItems, setMenuItems] = useState([]); // Store menu items in state
    const [storedSum, setStoredSum] = useState(0); // Store total sum
    const [totalQuantity, setTotalQuantity] = useState(0); // Store total quantity

    useEffect(() => {
        let totalSum = 0;
        let quantitySum = 0;
        const items = [];

        // Fetch each item from sessionStorage
        Object.keys(sessionStorage).forEach((key) => {
            if (key.startsWith("id-")) {
                const id = sessionStorage.getItem(key);
                const image = sessionStorage.getItem(`image-${id}`);
                const name = sessionStorage.getItem(`name-${id}`);
                const price =
                    parseFloat(sessionStorage.getItem(`price-${id}`)) || 0;
                const sum =
                    parseFloat(sessionStorage.getItem(`sum-${id}`)) || 0;
                const qty =
                    parseInt(sessionStorage.getItem(`quantity-${id}`)) || 0;

                // Calculate totals only if valid values are found
                if (sum && qty) {
                    totalSum += sum;
                    quantitySum += qty;
                    items.push({ id, image, name, price, sum, quantity: qty });
                }
            }
        });

        // Update state after data processing
        setStoredSum(totalSum);
        setTotalQuantity(quantitySum);
        setMenuItems(items);
    }, [storedSum]);

    useEffect(() => {
        // Function to update the storedSum from sessionStorage
        const updateStoredSum = () => {
            let totalSum = 0;
            Object.keys(sessionStorage).forEach((key) => {
                if (key.startsWith("id-")) {
                    const id = sessionStorage.getItem(key);
                    const sum =
                        parseFloat(sessionStorage.getItem(`sum-${id}`)) || 0;
                    totalSum += sum;
                }
            });
            setStoredSum(totalSum); // Update state with the new total
        };

        // Update every second
        const interval = setInterval(updateStoredSum, 100);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Remove item by id and update the state accordingly
    const handleItemDelete = (itemId) => {
        // Remove item from session storage and menuItems state
        ["id", "image", "name", "price", "sum", "quantity"].forEach((key) =>
            sessionStorage.removeItem(`${key}-${itemId}`)
        );

        // Update menu items and total state
        const updatedItems = menuItems.filter((item) => item.id !== itemId);
        const newTotalSum = updatedItems.reduce(
            (acc, item) => acc + item.sum,
            0
        );
        const newTotalQuantity = updatedItems.reduce(
            (acc, item) => acc + item.quantity,
            0
        );

        setMenuItems(updatedItems);
        setStoredSum(newTotalSum);
        setTotalQuantity(newTotalQuantity);
    };

    return (
        <div
            className="m-0 p-0 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`, // Correct way to use a variable for background image
                // backgroundSize: "cover", // Make sure the image covers the div properly
                backgroundPosition: "center", // Centers the background image
                objectFit: "cover", // Ensures the image maintains its aspect ratio and covers the container
            }}
        >
            <div
                style={{
                    width: "100vw",
                    backdropFilter: "blur(25px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    paddingInline: "15px",
                }}
                className="m-0 p- row align-items-evenly justify-content-center"
            >
                <div style={{ height: "15px" }} className="m-0 p-0 row"></div>

                {menuItems.length > 0 ? (
                    <>
                        <div
                            className="m-0 p-0 d-flex flex-wrap justify-content-center"
                            style={{
                                maxWidth: "1180px", // Optional: you can control the maximum width
                            }}
                        >
                            {menuItems.map((item) => (
                                <MenuItem2
                                    key={item.id}
                                    {...item}
                                    onItemDelete={handleItemDelete}
                                />
                            ))}
                        </div>
                        <div
                            style={{ height: "45px" }}
                            className="m-0 p-0 row"
                        ></div>
                    <div style={{padding: '0px', paddingInline: '15px'}} className="m-0 d-flex justify-content-center">

                        <div
                            className="m-0 p-0 ms-auto me-auto ps-3 pe-3 text-center col-auto d-flex flex-column justify-content-center align-items-center text-start fw-bold border border-2 border-primary text-white rounded"
                            style={{
                                minHeight: "60px",
                                maxWidth: "360px",
                                backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                fontSize: "24px",
                                width: "100%", // Matches the width of "Darmowa Dostawa"

                                textShadow:
                                    "1px 1px 10px black, 1px 1px 30px black",
                                boxShadow: "1px 1px 30px black",
                                fontStyle: "italic",
                            }}
                        >
                            Do zapłaty - {storedSum} zł

                        </div>                        </div>

                    </>
                ) : (
                    <div style={{padding: '0px', paddingInline: '15px'}} className="m-0 d-flex justify-content-center">
                        <Link
                            style={{
                                width: "100%", // Matches the width of "Darmowa Dostawa"
                                maxWidth: "360px", // Optional: set a max width for consistency
                                boxShadow: "1px 1px 50px black",
                                minHeight: "60px",
                                marginTop: "45px",
                                // marginBottom: "15px",
                            }}
                            className="o_btn_nav p-1 ps-3 pe-3 d-flex justify-content-center align-items-center text-center rounded"
                            to={"/"}
                        >
                            Wybierz Figurku
                        </Link>{" "}
                    </div>
                )}

                <div style={{ height: "60px" }} className="m-0 p-0 row"></div>
            </div>
        </div>
    );
};

export default Menu2;
