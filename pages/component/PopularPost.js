import Head from 'next/head'
import React, { useEffect,useState } from 'react';
import { getPopularPost } from '../action/sharecodeAction';
export default function PopularPost() {

  const [popularPost, setPopularPost] = React.useState([]);

  useEffect(() => {
    initialDataLoading(); 
  }, [])


  let initialDataLoading = async()=>{
    let popularPost = await getPopularPost();
    console.log('popularPost', popularPost.data);
    setPopularPost(popularPost);
    
  }

  return (
    <div className="categoriesMenu">
      <h3>Popular Posts</h3>
      <ul>
      {
          popularPost.data && popularPost.data.map((item)=>(
          <li><a href="#">{item.title}</a></li>
          ))
        }
            
      </ul>
   
   
</div>
  )
}
