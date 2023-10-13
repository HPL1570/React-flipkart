import React from 'react'

export default function cato1(props) {
  return (
    <>
    <div >
    <img className='cat-img' src={props.img} alt='HPL' />
    <p className='cat-name'>{props.name}</p>
    </div>
    </>
  )
}