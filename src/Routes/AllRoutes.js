// import {Routes, Route, Navigate} from 'react-router-dom'
// import { Header } from '../Components'
import { Routes, Route } from "react-router-dom"
import { MovieDetailPage, MoviePage, PageNotFound } from "../Pages"
import { useState, useEffect } from "react";
export const AllRoutes = () => {
  let [url, seturl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=dd2be466d8d6061a6016dfc08bf067c2&language=en-US');
  return (
      <Routes>
        <Route path='/' element={<MoviePage url="https://api.themoviedb.org/3/movie/now_playing?api_key=dd2be466d8d6061a6016dfc08bf067c2&language=en-US"/>}/>
        <Route path='Popular' element={<MoviePage url="https://api.themoviedb.org/3/movie/popular?api_key=dd2be466d8d6061a6016dfc08bf067c2&language=en-US"/>}/>
        <Route path='TopRated' element={<MoviePage url="https://api.themoviedb.org/3/movie/top_rated?api_key=dd2be466d8d6061a6016dfc08bf067c2&language=en-US"/>}/>
        <Route path='Upcoming' element={<MoviePage url="https://api.themoviedb.org/3/movie/upcoming?api_key=dd2be466d8d6061a6016dfc08bf067c2&language=en-US"/>}/>
        <Route path='movie/detail' element={<MovieDetailPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    )
}