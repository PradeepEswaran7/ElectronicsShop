import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Mcreate() {
    const[values, setValues]= useState(
        {
            pprice:'',
            cname:'',
            specifications:''
        })

        const navigate = useNavigate();
        const navi=useNavigate();
        const nav=()=>{
            navi('/cmob');
        }
        const handleSubmit= ((event)=>{
                event.preventDefault();
                axios.post('http://localhost:8888/mobiles',values)
                .then((res)=>{
                    console.log(res);
                    window.alert("laptop added successfully")
                    navigate('/');
                })
                .catch((err)=>console.log(err));

        })

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100 w-100'>
            <div className='w-50 border bg-white shadow px-5 pb-5 rounded'>
                <h1>Add a Mobile</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='price'>Price: </label>
                        <input type="number"  name="price" className='form-control' placeholder='Enter Price'
                        onChange={(e)=>setValues({...values, pprice: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='cname'>Company Name: </label>
                        <input type="text"  name="cname" className='form-control' placeholder='Enter company Name'
                        onChange={(e)=>setValues({...values, cname: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='spce'>Specifications: </label>
                        <input type="text"  name="spce" className='form-control' placeholder='Enter Specifications'
                        onChange={(e)=>setValues({...values, specifications: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <button className='btn btn-primary ms-3' type='button' onClick={nav}>Back</button>
                </form>
            </div>
        </div>
    )
}

export default Mcreate
