import React, { useState } from "react";
import "./PersonalAreaModal.css"
import { Link } from "react-router-dom";
import logo from "../../../img/icons/logo.png"
import md from "./PersonalAreaModal.module.css"

const PersonalAreaModal = ({ setVisible }) => {
    const [valueEmeil, setValueEmail] = useState("Emeil adress")
    const [valuePass, setValuePass] = useState("Password")

    return (
        <>
            <div className={md.PersonalAreaModal}>
                <div className={md.logo_modal}>
                    <img src={logo} alt="logo_modal" className={md.logo_modal} />
                </div>
                <div>
                    <h1>Great to have you back!</h1>
                </div>
                <input
                    className={md.maodal_person_areea_input}
                    type="email"
                    value={valueEmeil}
                    onChange={event => setValueEmail(event.target.value)}
                    onFocus={() => setValueEmail(" ")}
                />
                <input
                    className={md.maodal_person_areea_input}
                    type="text"
                    name="text"
                    value={valuePass}
                    onChange={event => setValuePass(event.target.value)}
                    onFocus={() => setValuePass(" ")}
                />
                <Link className={md.maodal_person_areeaA} to="/personal_area">
                    Forgot your password?
                </Link>
                <button className="maodal_person_areea_ligin_in">Login In</button>
                <div className="maodal_person_areea_register_naw">
                    <p>Don’t have an account?</p>
                    <button className="">Register now</button>
                </div>
            </div>
        </>
    )
}

export default PersonalAreaModal