import React, {useState} from "react";
import "./PersonalAreaModal.css"
import {Link} from "react-router-dom";
import personal_area from "../../../img/icons/personal_area.png";
import logo from "../../../img/icons/logo.png"

const PersonalAreaModal=() => {
    const [isOpen, setIsOpen]=useState(false)
    const [valueEmeil, setValueEmail]=useState("Emeil adress")
    const [valuePass, setValuePass]=useState("Password")

    return (
        <>
            <div className="personal_area">
                <button className="personal_area_open" onClick={() => setIsOpen(true)}>
                    <img src={personal_area} alt="personal_area"/>
                </button>
                {isOpen && <div className="maodal_person_areea">
                    <div className="maodal_body_person_areea">
                        <button className="personal_area_close" onClick={() => setIsOpen(false)}>x
                        </button>
                        <div className="logo_modal">
                            <img src={logo} alt="logo_modal"/>
                        </div>
                        <h1>Great to have you back!</h1>
                        <input
                            type="email"
                            value={valueEmeil}
                            onChange={event => setValueEmail(event.target.value)}
                            onFocus={() => setValueEmail(" ")}
                        />
                        <input
                            type="text"
                            name="text"
                            value={valuePass}
                            onChange={event => setValuePass(event.target.value)}
                            onFocus={() => setValuePass(" ")}
                        />
                        <Link to="/personal_area">
                            Forgot your password?
                        </Link>
                        <button className="maodal_person_areea_ligin_in">Login In</button>
                        <div className="maodal_person_areea_register_naw">
                            <p>Don’t have an account?</p>
                            <button className="">Register now</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default PersonalAreaModal