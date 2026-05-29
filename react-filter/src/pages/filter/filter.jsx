//filter.jsx
import React, { useState } from "react";
import AppData from "../../utils/data/images/data";
import './filter.css'
const FilterPage = ()=>{
    const [store,setStore] = useState(AppData)
    // const [data,setData] = useState('');
    const [inputValue,setInputValue] = useState('')

    const getData = (e)=>{
        console.log(e.target.value)
        setData(e.target.value)
    }
  let filterOut =  store.filter((currenVal)=>{
        return(
            currenVal.name.toLowerCase().includes(inputValue.toLowerCase()) ||currenVal.brand.toLowerCase().includes(inputValue.toLowerCase())
        )
    })
    return(
        <div className="container">
            <h1>Basic Filter Concept</h1>
            <input type="text" placeholder="search here...." onChange={(e)=>setInputValue(e.target.value)} />
            <div>
                <h3>Name</h3>
                <h3>Brand</h3>
                <h3>Images</h3>
            </div>
            {
                filterOut.map((cur,index)=>{
                    return(
                    <div key={index}>
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