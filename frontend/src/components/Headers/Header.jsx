import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='Header'>
        <div className="header-contents">
            <h2>Order your favourit food hear</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis laborum atque sequi quisquam commodi sed. Deserunt voluptatibus ducimus cupiditate esse natus quia quasi officia expedzzita explicabo sequi, sed dolorem.</p>
            <a href='#explore-menu' onClick={()=>setMenu("menu")}><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header