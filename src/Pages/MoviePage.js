import React, { useEffect, useState } from 'react'
import { Header, Footer, FetchData, Cards } from '../Components'
import { useLocation } from 'react-router-dom';
import './CSS/MoviePage.css'
export const MoviePage = ({url}) => {
let [data, setdata] = useState([]);
let [set, setset] = useState("");
return (
    <div>
        <Header setset={setset}/>
        <FetchData url={url} setdata={setdata}/>
        {set==""?false:true && <h3 className='find'>Finding Results for <span>{set}</span></h3>}
            <div className='movies-list'>
                {
                    data && data.map((arr)=>{
                        if((set=="" || arr.backdrop_path.toLowerCase().includes(set) || arr.original_title.toLowerCase().includes(set) )){
                            let image = "https://image.tmdb.org/t/p/w500/" + arr.backdrop_path;
                            return <Cards datas={image} headings = {arr.original_title} para = {arr.overview}/>
                            
                        }
                    })
                }
            </div>
        <Footer/>
    </div>
  )
}
