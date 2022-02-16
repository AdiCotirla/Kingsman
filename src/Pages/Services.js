import React from 'react'
import { MenuItems } from '../Data/MenuItems'
import { Link } from "react-router-dom"
export default function Services() {
  return (
    MenuItems.map((items,index) => {
      return <div key={index}>
        <Link to={items.path}>{items.title}</Link>
      </div>
    })
  )
}
