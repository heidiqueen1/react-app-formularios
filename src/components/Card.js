import React from 'react'


export const Card = (props) => {

  const {name,lastname,number, email} = props;

  return (
    <div className="card-con-datos">
       <p>{name}</p> 
       <p>{lastname}</p> 
       <p>{number}</p>
       <p>{email}</p>
    </div>
  )
}
