import React from 'react'
import catogiriesdata from './cato.jsx'
import Cato1 from './cato1.js'
export default function catogiries() {
    const prodata=catogiriesdata.map(pro=>{
        return <Cato1 img={pro.img} name={pro.name} />
      })
  return (
    <>
       <div className='cat-div '>{prodata}</div>
    </>
  )
}