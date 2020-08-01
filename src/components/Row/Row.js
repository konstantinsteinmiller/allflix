import React, { useState, useEffect } from 'react'
import axios from '../../api/apiService'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer  from 'movie-trailer'
const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerId, setTrailerId] = useState('')

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(fetchUrl)
        setMovies(data.results)
        // console.table(data.results)
        return data.results
      } catch (e) {
        console.warn('e: ', e)
        return []
      }
    })()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  // const trailerUrl = 'asddQw4w9WgXcQ'
  const handlePictureClick = (movie) => {
    if(trailerId) {
      setTrailerId('')
    }
    else { 
      movieTrailer(movie?.name || '' )
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          const trailerId = urlParams.get('v') || ''
          setTrailerId(trailerId)
        }).catch(error => {
          console.error(error)
          setTrailerId('')
        })
    }
  }

  return (
    <div className="row">
      <h2 className="">{title}</h2>
      <div className="row__posters">
        {movies.length ? movies.map((movie) => (
          <img
            className={`row__poster ${isLargeRow && 'row__poster--large'}`}
            onClick={() => handlePictureClick(movie)}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        )) : ''}
      </div>
      {trailerId && trailerId !== '' && (
        <Youtube videoId={trailerId} opts={opts} />
      )}
    </div>
  )
}

export default Row
