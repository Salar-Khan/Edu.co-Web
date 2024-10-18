import Item from "./Item"
import React from "react"
import { Bootcamps,Support,Partners,Careers } from "../Data/Data"
const ItemContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-5 sm:px-8 py-16">
        <Item Links={Bootcamps} title ="Bootcamps"/>
        <Item Links={Support} title ="Support"/>
        <Item Links={Partners} title ="Partners"/>
        <Item Links={Careers} title ="Careers"/>
    </div>
  )
}

export default ItemContainer