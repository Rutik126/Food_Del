import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menutext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum aperiam aspernatur voluptatem quis incidunt cumque autem? Totam ab repellat deleniti veritatis ex odit dolorum. Distinctio minima, quaerat nesciunt error exercitationem nisi expedita? Fugit esse commodi officiis deserunt earum rem?</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu