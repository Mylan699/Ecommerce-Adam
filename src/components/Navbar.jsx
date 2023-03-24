import React, { useState } from "react";
import logo from "../assets/logo.png";
import cartIcon from "../assets/icon-cart.svg";
import menuIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";
import avatarImg from "../assets/image-avatar.png";
import smallImg1 from "../assets/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/icon-delete.svg";
import { Link, NavLink, useNavigate } from 'react-router-dom';

import Bouton from "./button";
import { useCartContext } from "../cartProvider";

const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    const [toggleCart, setToggleCart] = useState(true);
    const [toggleLogin, setToggleLogin] = useState(true);
    const {cart, removeProductFromCart} = useCartContext()
    const navigate = useNavigate();

    const toggleHandler = () => {
        setToggle((prev) => !prev);
    };


    return (
        <nav className="w-[90%] md:w-[80%] py-[20px] md:py-[40px] mx-auto md:border-b-2 flex justify-between items-center">
            <div className="left flex space-x-4">
                <img
                    onClick={toggleHandler}
                    className="md:hidden object-contain cursor-pointer"
                    src={menuIcon}
                    alt="menu"
                />
                <img
                    className="w-[300%] h-[22px] md:pr-[80px] cursor-pointer"
                    src={logo}
                    alt="sneakers-logo"
                />
                <ul className="hidden md:flex space-x-10">
                    <li>
                        <Bouton path={"Collection"} label={"Collection"}/>
                    </li>
                    <li>
                        <NavLink
                            className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
                            to={"/"}
                        >
                            Homme
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
                            to={"/Femme"}
                        >
                            Femme
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-darkGrayishBlue transition-all hover:border-b-4 border-orange hover:pb-[53px] hover:text-black"
                            to={"/odyssée"}
                        >
                            Odyssée
                        </NavLink>
                    </li>
                    <li>
                    <Bouton path={"Contact"} label={"Contact"}/>
                    </li>
                </ul>
            </div>

            <ul
                className={`${toggle ? "hidden" : "block"
                    } md:hidden bg-white absolute top-0 left-0 z-10 w-[70%] h-[100vh] pt-[100px] pl-6 space-y-6 font-[700] text-[18px]`}
            >
                <img
                    onClick={toggleHandler}
                    className="-mt-[75px] mb-14 md:hidden object-contain cursor-pointer"
                    src={closeIcon}
                    alt="menu"
                />
                <li>
                    <a href="#">Collection</a>
                </li>
                <li>
                    <a href="#">Homme</a>
                </li>
                <li>
                    <a href="#">Femme</a>
                </li>
                <li>
                    <a href="#">Odyssée</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <div className="right flex space-x-5 md:space-x-10 items-center relative">
                <span
                    className={`${cart.quantity > 0 ? "flex" : "hidden"
                        } bg-orange-500 px-2 text-[10px] rounded-[12px] text-white absolute top-0 left-7 md:left-12 md:top-2`}
                >
                    {cart.quantity}
                </span>
                <img
                    onClick={() => setToggleCart((prev) => !prev)}
                    className="h-[20px] cursor-pointer"
                    src={cartIcon}
                    alt="cart-icon"
                />
                <img
                    onClick={() => setToggleLogin((prev) => !prev)}
                    className="h-[30px] md:h-[50px] cursor-pointer transition-all hover:border-4 rounded-full border-orange"
                    src={avatarImg}
                    alt="avatar-image"
                />


            </div>


            {
                cart.quantity ? (
                    <div
                        className={`${toggleCart ? "hidden" : "block"
                            } cart-container transition-all z-10 w-[350px] md:w-[370px] bg-white shadow-2xl rounded-lg py-8 absolute top-[11%] left-3 md:top-[12%] md:left-[65%]`}
                    >
                        <p className="pl-5 font-[700]">Panier</p>
                        <hr className="my-4" />
                        <div className="details flex justify-between px-5">
                            <div className="small-img-container mb-4">
                                <img className="w-[50px] rounded-lg" src={smallImg1} alt="" />
                            </div>
                            <div className="text">
                                <p className="text-darkGrayishBlue">
                                    Edition limité de ...
                                </p>
                                <span className="text-darkGrayishBlue mr-2">{cart.priceWithReduc}€</span>
                                <span className="text-darkGrayishBlue mr-2">x</span>
                                <span className="text-darkGrayishBlue mr-2">{cart.quantity}</span>
                                <span className="font-[700]">{parseFloat(cart.priceWithReduc) * cart.quantity}€</span>
                            </div>
                            <div className="remove-container">
                                <img
                                    onClick={removeProductFromCart}
                                    className="h-[20px] mt-3 cursor-pointer"
                                    src={deleteIcon}
                                    alt="remove-from-cart"
                                />
                            </div>
                        </div>
                        <button className="bg-orange-500 text-white mx-5 block rounded-lg py-4 w-[90%] transition-all hover:opacity-50" onClick={()=> navigate("/payment")}>
                            Payement
                        </button>
                    </div>

                ) : (
                    <div
                        className={`${toggleCart ? "hidden" : "block"
                            } cart-container transition-all z-10 w-[350px] md:w-[370px] h-[240px] bg-white shadow-2xl rounded-lg py-8 absolute top-[11%] left-3 md:top-[12%] md:left-[65%]`}
                    >
                        <p className="pl-5 font-[700]">Panier</p>
                        <hr className="my-4" />
                        <div className="details flex justify-center mt-14">
                            <p className="font-[700] text-darkGrayishBlue">
                                Ton panier est vide.
                            </p>
                        </div>
                    </div>
                )


            }
            {
                <div
                    className={`${toggleLogin ? "hidden" : "block"
                        } cart-container transition-all z-10 w-[200px] md:w-[200px] bg-white shadow-2xl rounded-lg py-8 absolute top-[11%] left-3 md:top-[12%] md:left-[82%]`}
                >
                    <p className="pl-5  font-[700] text-center">Utilisateurs</p>
                    <div className="flex flex-col items-center">
                        <button className="bg-orange-500 text-white mx-5 block rounded-lg py-4 w-[90%] transition-all hover:opacity-50 ">
                            <NavLink to="/Register" className="text-white">Connexion</NavLink>
                        </button>
                        <span className="text-darkGrayishBlue my-2">ou</span>
                        <button className="bg-orange-500 text-white mx-5 block rounded-lg py-4 w-[90%] transition-all hover:opacity-50">
                            Inscription
                        </button>
                    </div>
                </div>
            }
        </nav >
    );
};

export default Navbar;