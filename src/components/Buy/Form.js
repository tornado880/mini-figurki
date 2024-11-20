import React, { useState, useEffect } from "react";

function Form({ img }) {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [telefon, setTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [miasto, setMiasto] = useState("");
    const [paczkomat, setPaczkomat] = useState("");

    useEffect(() => {
        // Retrieve data from sessionStorage on component mount
        const storedImie = sessionStorage.getItem("imie");
        const storedNazwisko = sessionStorage.getItem("nazwisko");
        const storedTelefon = sessionStorage.getItem("telefon");
        const storedEmail = sessionStorage.getItem("email");
        const storedMiasto = sessionStorage.getItem("miasto");
        const storedPaczkomat = sessionStorage.getItem("paczkomat");

        const sum = sessionStorage.getItem("sum");

        if (storedImie) setImie(storedImie);
        if (storedNazwisko) setNazwisko(storedNazwisko);
        if (storedTelefon) setTelefon(storedTelefon);
        if (storedEmail) setEmail(storedEmail);
        if (storedMiasto) setMiasto(storedMiasto);
        if (storedPaczkomat) setPaczkomat(storedPaczkomat);
    }, []); // Empty dependency array ensures this runs only on mount

    useEffect(() => {
        // Save each state to sessionStorage whenever it changes
        sessionStorage.setItem("imie", imie);
        sessionStorage.setItem("nazwisko", nazwisko);
        sessionStorage.setItem("telefon", telefon);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("miasto", miasto);
        sessionStorage.setItem("paczkomat", paczkomat);
    }, [imie, nazwisko, telefon, email, miasto, paczkomat]);

    // Function to check if all fields are filled
    const isFormValid = () => {
        return imie && nazwisko && telefon && email && miasto && paczkomat;
    };

    const [totalSum, setTotalSum] = useState(
        sessionStorage.getItem("totalSum")
    );
    const [formValid, setFormValid] = useState(false); // Replace with your actual form validation function

    useEffect(() => {
        const interval = setInterval(() => {
            setTotalSum(sessionStorage.getItem("totalSum"));
            setFormValid(isFormValid()); // Call your form validation function
        }, 100); // Check every 1 second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div
            className="m-0 p-0 row justify-content-center"
            style={{
                position: "relative",
                height: "auto",
                backgroundImage: `url(${img})`,
                // backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
            }}
        >
            <div
                style={{
                    backdropFilter: "blur(25px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    width: "100vw",
                }}
                className="m-0 p-0 text-white row justify-content-around align-items-center border-top border-2 border-primary"
            >
                <div
                    style={{ height: "25px", minWidth: "360px" }}
                    className="m-0 p-0"
                ></div>

                <div
                    style={{
                        position: "relative",
                        height: "auto",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        objectFit: "cover",
                    }}
                    className="m-0 p-0 row justify-content-center"
                >
                    {" "}
                    <div
                        className="m-0  d-flex flex-wrap justify-content-center"
                        style={{
                            paddingInline: "15px",
                            maxWidth: "1180px", // Optional: you can control the maximum width
                        }}
                    >
                        {[
                            { label: "Imię", value: imie, onChange: setImie },
                            {
                                label: "Nazwisko",
                                value: nazwisko,
                                onChange: setNazwisko,
                            },
                            {
                                label: "Telefon",
                                value: telefon,
                                onChange: setTelefon,
                            },
                            {
                                label: "Email",
                                value: email,
                                onChange: setEmail,
                            },
                            {
                                label: "Miasto",
                                value: miasto,
                                onChange: setMiasto,
                            },
                            {
                                label: "Paczkomat InPost",
                                value: paczkomat,
                                onChange: setPaczkomat,
                            },
                        ].map((field, index) => (
                            <div
                                key={index}
                                style={{
                                    height: "60px",
                                    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                    maxWidth: "360px",
                                    width: "100%",
                                    margin: " 5px",
                                }}
                                className="p-0 row justify-content-center  rounded"
                            >
                                <p
                                    style={{
                                        // backgroundColor: "hsla(0, 0%, 0%, 0.25) ",
                                        fontSize: "15px",
                                        fontStyle: "italic",
                                    }}
                                    className="m-0 ps-3 pe-3 col-auto d-flex align-items-center border border-2 border-primary rounde border-end-0"
                                >
                                    {field.label}:
                                </p>
                                <input
                                    style={{
                                        outline: "none",
                                        fontSize: "18px",
                                        boxShadow: "1px 1px 50px black",
                                        textShadow:
                                            "1px 1px 10px black, 1px 1px 30px  black, 1px 1px 30px black, 1px 1px 30px black, 1px 1px 30px black, 1px 1px 30px black, 1px 1px 30px black, 1px 1px 30px black, 1px 1px 30px black",
                                    }}
                                    className="m-0 p-0 ps-3 col d-flex flex-column justify-content-center text-start bg-transparent text-white rounded-end"
                                    value={field.value}
                                    placeholder="Pole obowiezkowe" // Moved out of style
                                    onChange={(e) =>
                                        field.onChange(e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>{" "}
                </div>

                <div
                    style={{
                        paddingInline: "15px",
                        textShadow: "1px 1px 10px black,1px 1px 30px black,",
                    }}
                    className="m-0 d-flex flex-column justify-content-center align-items-center "
                >
                    <div style={{ height: "55px" }} className="m-0 p-0 "></div>

                    {(sessionStorage.getItem("totalSum") === "0" &&
                        !isFormValid()) ||
                    sessionStorage.getItem("totalSum") === "0" ||
                    !isFormValid() ? (
                        <div
                            style={{
                                height: "30px",
                                fontSize: "15px",
                                width: "100%",
                                maxWidth: "360px",
                                // fontStyle: 'italic',
                            }}
                            className="m-0 p-0 bg-danger d-flex justify-content-center align-items-center rounded"
                        >
                            {sessionStorage.getItem("totalSum") === "0" &&
                            !isFormValid()
                                ? "Wybierz Figurku i Uzupelnij pola formy!"
                                : sessionStorage.getItem("totalSum") === "0"
                                ? "Wybierz Figurku!"
                                : !isFormValid()
                                ? "Uzupelnij wszystkie pola formy!"
                                : null}
                        </div>
                    ) : null}

                    {/* Button */}
                    <button
                        style={{
                            width: "100%",
                            maxWidth: "360px",
                            boxShadow: "1px 15px 60px black",
                            minHeight: "60px",
                        }}
                        className={`o_btn_nav ms-auto me-auto p-1 ps-3 pe-3 m-0 rounded ${
                            !isFormValid() ||
                            sessionStorage.getItem("totalSum") == 0
                                ? "border-primary pe-none"
                                : ""
                        }`}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        disabled={
                            !isFormValid() ||
                            sessionStorage.getItem("totalSum") == 0
                        }
                    >
                        Kupuję i Płacę BLIK
                    </button>

                    <div
                        style={{ height: "60px" }}
                        className="m-0 p-0 row"
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Form;
