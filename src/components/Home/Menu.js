import React, { useState, useRef } from "react";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../../UI/MenuItem";

const Menu = ({ img }) => {
    const itemsPerPage = 6; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(0); // Start with the first page
    const menuRef = useRef(null); // Reference to the container

    // Calculate the items to display for the current page
    const currentItems = MenuList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    // Scroll to the top of the page or container
    const scrollToTop = () => {
        if (menuRef.current) {
            menuRef.current.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Handle going to the next page
    const nextPage = () => {
        if ((currentPage + 1) * itemsPerPage < MenuList.length) {
            setCurrentPage((prevPage) => prevPage + 1);
            scrollToTop();
        }
    };

    // Handle going to the previous page
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
            scrollToTop();
        }
    };

    return (
        <div
            className="m-0 p-0 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                // backgroundSize: "cover", // Make sure the image covers the div properly

                objectFit: "cover",
            }}
            ref={menuRef} // Attach the ref here
        >
            <div
                style={{
                    backdropFilter: "blur(25px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    width: "100vw",
                }}
                className="m-0 p-0 row align-items-evenly justify-content-center"
            >
                {/* <div style={{ height: "15px" }} className="m-0 p-0 row"></div> */}

                {/* Render current items in a grid with 3 items per row */}
                <div
                    className="m-0  d-flex flex-wrap justify-content-center"
                    style={{
                        maxWidth: "1200px", // Optional: you can control the maximum width
                        padding: "15px",
                    }}
                >
                    {currentItems.map((menuItem) => (
                        <MenuItem
                            key={menuItem.id}
                            id={menuItem.id}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                            
                            text={menuItem.text}
                            height={menuItem.height}
                            material={menuItem.material}
                            ruch={menuItem.ruch}
                            acsesoria={menuItem.acsesoria}
                            producent={menuItem.producent}
                        />
                    ))}
                </div>

                {/* Pagination Buttons */}
                <div
                    style={{ paddingInline: "30px" }}
                    className="m-0  row justify-content-center"
                >
                    <div
                        style={{ height: "30px" }}
                        className="m-0 p-0 row"
                    ></div>

                    <div
                        style={{ width: "180px" }}
                        className="m-0 p-0 row justify-content-center"
                    >
                        <button
                            className={`o_btn_nav m-0 p-0 col rounded ${
                                currentPage === 0
                                    ? "border-primary pe-none"
                                    : ""
                            }`}
                            style={{
                                width: "60px",
                                minWidth: "30px",
                                boxShadow: "1px 1px 50px black",
                                // maxHeight: '45px',
                            }}
                            onClick={prevPage} // Go to the previous page
                            disabled={currentPage === 0} // Disable if on the first page
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="currentColor"
                                class="bi bi-arrow-left-short"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                                />
                            </svg>
                        </button>

                        <div
                            style={{
                                width: "60px",
                                minWidth: "30px",
                                fontSize: "18px",
                                // maxHeight: '45px',
                                backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                                fontStyle: "italic",
                            }}
                            className="o_text m-0 p-0 fw-bold rounded"
                        >
                            {currentPage + 1}
                        </div>

                        <button
                            style={{
                                width: "60px",
                                // maxHeight: '45px',
                                minWidth: "30px",
                                boxShadow: "1px 1px 50px black",
                            }}
                            className={`o_btn_nav m-0 p-0 col rounded ${
                                (currentPage + 1) * itemsPerPage >=
                                MenuList.length
                                    ? "border-primary pe-none"
                                    : ""
                            }`}
                            onClick={nextPage} // Go to the next page
                            disabled={
                                (currentPage + 1) * itemsPerPage >=
                                MenuList.length
                            } // Disable if no more items
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill="currentColor"
                                className="bi bi-arrow-right-short"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                />
                            </svg>
                        </button>
                    </div>

                    <div style={{ height: "60px" }} className="m-0 p-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
