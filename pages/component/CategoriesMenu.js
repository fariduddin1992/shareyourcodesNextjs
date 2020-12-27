
import React, { useEffect,useState } from 'react';
import { GetMenuList } from '../action/sharecodeAction';

export default function CategoriesMenu() {
  const [menu, setMenu] = React.useState([]);

  useEffect(() => {
    initialDataLoading(); 
  }, [])


  let initialDataLoading = async()=>{
    let menuList = await GetMenuList();
    console.log('menuList', menuList.data);
    setMenu(menuList);
    
  }

 

  return (
    <div className="categoriesMenu">
      <li className="menuTitle">Categories</li>
      <ul>
        {
          menu.data && menu.data.map((item)=>(
          <li><a href="#">{item.name}</a></li>
          
          ))
        }
      </ul>
   
   
</div>
  )
}
