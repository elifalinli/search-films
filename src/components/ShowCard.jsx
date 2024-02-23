import React from 'react'

const ShowCard = ({title, date, poster, description, film}) => {
  return (
    <div className="flex items-center justify-center h-full ">
    <div className="mx-auto rounded-xl overflow-hidden shadow-sm bg-slate-100 h-60">
            <img
              key={film.id}
              src={`http://image.tmdb.org/t/p/w500/${poster ? poster : film.backdrop_path}`}
              className="w-full h-full rounded-xl object-cover"
              alt={title}
            />
   
    </div>
  </div>
  )
}

export default ShowCard
