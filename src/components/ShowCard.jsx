import React from 'react'
import {Link} from "react-router-dom"

const ShowCard = ({title, poster, film}) => {
  return (
   
    <div className="flex items-center justify-center h-full hover:bg-[#f2f2f2]">
       <Link to={`${film.media_type}/${film.id}/details`} >
    <div className="mx-auto rounded-xl overflow-hidden shadow-sm bg-slate-100 h-60">
            <img
              key={film.id}
              src={`http://image.tmdb.org/t/p/w500/${poster ? poster : film.backdrop_path}`}
              className="w-full h-full rounded-xl object-cover"
              alt={title}
            />
   
    </div>
     </Link>
  </div>

  )
}

export default ShowCard
