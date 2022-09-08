import React from 'react'
import "../login/FormLogOut.css"


const FormLogout = ({isLogged, setIsLooged}) => {

  const handleClick = () => {
    setIsLooged()
    localStorage.removeItem('token')
  }

  return (
    <article className='form-logout'>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>


    <div className="all">
        <i className="form-logout__icon fa-solid fa-user"></i>
        <h2 className='form-logout__username'>
          {`${isLogged?.firstName} ${isLogged?.lastName}`}
        </h2>
        <i class="form-logout__check fa-solid fa-check"></i>
        <button onClick={handleClick} className='form-logout__btn'>Logout</button>
    </div>
    </article>
  )
}



export default FormLogout