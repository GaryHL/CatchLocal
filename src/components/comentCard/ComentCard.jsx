import React from 'react'
import './commentCard.scss'

const ComentCard = (props) => {
  return (
    <div className='container_comment'>
      <div className="container_user">
        <img src={props.src} alt="usuario" />
        <p className='user'>{props.user}</p>
      </div>
      <p>{props.text}</p>
    </div>
  )
}

export default ComentCard