//filter.jsx
import React, { useState } from "react";
import AppData from "../../utils/data/images/data";
import './filter.css'
const FilterPage = ()=>{
    const [store,setStore] = useState(AppData)
    const [data,setData] = useState('');

    const getData = (e)=>{
        console.log(e.target.value)
        setData(e.target.value)
    }
  let filterOut =  store.filter((currenVal)=>{
        return(
            currenVal.name.toLowerCase().includes(data.toLowerCase()) ||currenVal.brand.toLowerCase().includes(data.toLowerCase())
        )
    })
    return(
        <div className="container">
            <h1>Basic Filter Concept</h1>
            <input type="text" placeholder="search here...." onChange={getData} />
            <div>
                <h3>Name</h3>
                <h3>Brand</h3>
                <h3>Images</h3>
            </div>
            {
                filterOut.map((cur)=>{
                    return(
                    <div>
                        <p>{cur.name}</p>
                        <p>{cur.brand}</p>
                        <img src={cur.img} />
                    </div>
                    
                    )
                })
            }
        </div>
    )
}
export default FilterPage