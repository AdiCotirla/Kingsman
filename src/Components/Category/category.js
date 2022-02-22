import React from 'react'
import { Link } from "react-router-dom"
import { CategoryData } from '../../Data/CategoryData'
import "../../Styling/category.css"

export default function Category() {
  return (<>
    <div className='category-title'>
      <h1>We have a vast variety of items for you</h1>
    </div>
    <div className='container-category'>
        {CategoryData.map((items,index) => {
              return(
                    <div key={index} className={items.cName}>
                        <Link to={items.path}>{items.title}</Link>
                      </div>)})}
    </div></>
  )
}

