import React, { useState, useEffect } from 'react'
import axios from '../../api/apiService'
import './Banner.css'
import requests from '../../api/tmdb'
const base_url = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [movie, setMovie] = useState([Banner])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(requests.fetchNetflixOriginals)
        console.log('data: ', data)
        const randomMovieIndex = Math.floor(Math.random() * data?.results?.length)
        setMovie(data.results[randomMovieIndex])
        return data?.results
      } catch (e) {
        console.warn('e: ', e)
        return []
      }
    })()
  }, [])

  const truncate = (str, n) => str?.length > n ? `${str.substr(0, n-1)}...`: str

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{ movie?.title || movie?.name || movie?.original_name }</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          { truncate(movie?.overview, 200) }
        </h1>
      </div>

      <div className="banner__bottom--fade"></div>
    </header>
  )
}

export default Banner
