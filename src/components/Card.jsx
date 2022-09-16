import React from 'react'

export const Card = ({nombre, urlImg, descripcion}) => {
  return (
    <div className='card'>
        <img src={urlImg} class="card-img-top" alt={nombre} ></img>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            
        </div>
    </div>
  )
}
