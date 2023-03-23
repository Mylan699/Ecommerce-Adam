import React  from "react";
import {useState} from "react"
import Navbar from "../components/Navbar"
import Product from "../components/Product";

const Root = () => {

  const [price, setPrice] = useState(125.0);
  const [qty, setQty] = useState(0);


  return (
    <React.Fragment >
    <Navbar price={price} qty={qty} setQty={setQty} />
    <Product/>
    </React.Fragment>
  )
}

export default Root
