import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Menu.css"
import personal_area from "../../../img/icons/personal_area.png";

const Menu=() => {
    const [menuActive, setMenuActiv]=useState(false)
    return (
        <>
            <div className="menu_mob_close_name" onClick={() => setMenuActiv(!menuActive)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="col-sx-5 col-sm-5 col-md-5 col-ld-5">
                <nav>
                    <ul className={menuActive ? "menu menu_mob_open animation_menu_open" : "menu menu_mob_open"}>
                        <div className="menu_mob_open_name" onClick={() => setMenuActiv(!menuActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div>Menu</div>
                        </div>
                        <div className="menu_personal_area_menu">
                            <Link className="personal_area_link" to="/personal_area">
                                <img src={personal_area} alt="personal_area"/>
                                <div className="open_menu_personal_area">login</div>
                            </Link>
                        </div>
                        <li className="product_menu"><Link to="/products">products</Link>
                            <ul className="product_cubmenu">
                                <li>
                                    <Link to="products/iphone">iphone</Link>
                                    <ul className="product_secendmenu">
                                        <li>
                                            <Link to="products/iphone/iphone_x">iphone x</Link>
                                        </li>
                                        <li>
                                            <Link to="products/iphone/iphone_xr">iphone xr</Link>
                                        </li>
                                        <li>
                                            <Link to="products/iphone/iphone_12">iphone 12</Link>
                                        </li>
                                        <li>
                                            <Link to="products/iphone/iphone_13">iphone 13</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="products/macbock">macbock</Link>
                                    <ul className="product_secendmenu">
                                        <li>
                                            <Link to="products/macbock/macbock_x">macbock x</Link>
                                        </li>
                                        <li>
                                            <Link to="products/macbock/macbock_xr">macbock xr</Link>
                                        </li>
                                        <li>
                                            <Link to="products/macbock/macbock_12">macbock 12</Link>
                                        </li>
                                        <li>
                                            <Link to="products/macbock/macbock_13">macbock 13</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="products/case">case</Link>
                                    <ul className="product_secendmenu">
                                        <li>
                                            <Link to="products/case/case_x">case x</Link>
                                        </li>
                                        <li>
                                            <Link to="products/case/case_xr">case xr</Link>
                                        </li>
                                        <li>
                                            <Link to="products/case/case_12">case 12</Link>
                                        </li>
                                        <li>
                                            <Link to="products/case/case_13">case 13</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="products/headphones">headphones</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link className="menu_abaut_ass" to="/about_ass">about ass</Link></li>
                        <li className="menu_blog"><Link to="/blog">blog</Link>
                            <ul>
                                <li>
                                    <Link to="/blog_one">blog 1</Link>
                                </li>
                                <li>
                                    <Link to="/blog_two">blog 2</Link>
                                </li>
                                <li>
                                    <Link to="/blog_thre">blog 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/faqs">faqs</Link></li>
                        <li><Link to="/contact_ass">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu