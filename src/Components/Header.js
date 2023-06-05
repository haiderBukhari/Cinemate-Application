import React from 'react'
import Logo from '../asset/Logo.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CSS/Header.css'
export const Header = ({setset}) => {
    let Navigate = useNavigate();
    let handleurl = (e)=>{
    setset(e.target.value.toLowerCase());
  }
  return (
    <div>
        <header className='header bg-white dark:bg-slate-800'>
            <div className="main-header">
                <div className="logo">
                    <img src={Logo} alt="Logo" srcset="" className='w-14'/>
                    <p className='main-text text-blue-600 text-xl pl-3 font-medium	'>Cinemate</p>
                </div>
                <div className="options">
                    <span><a href = "/">Home</a></span>
                    <span><a href = "/Popular">Popular</a></span>
                    <span><a href = "/TopRated">Top Rated</a></span>
                    <span><a href = "/Upcoming">Upcoming</a></span>
                </div>
                <div className="mode-search">
                    <i class="fa-solid fa-moon cursor-pointer ml-20 px-2.5"></i>
                        <i class="fa-solid fa-magnifying-glass cursor-pointer px-2.5"></i>
                        <input type="text" name="" id="" className='search mr-10 p-2'placeholder='Search' onChange={handleurl}/>
                        <i class="fa-solid fa-bars bars cursor-pointer px-2.5"></i>
                </div>
            </div>
            <div className='bootoms'>
                <input type="search" name="" id="" placeholder='Search' className='search_it' onChange={handleurl}/>
                <div className="option">
                    <span><a href = "/">Home</a></span>
                    <span><a href = "/Popular">Popular</a></span>
                    <span><a href = "/TopRated">Top Rated</a></span>
                    <span><a href = "/Upcoming">Upcoming</a></span>
                </div>
            </div>
        </header>
    </div>
  )
}