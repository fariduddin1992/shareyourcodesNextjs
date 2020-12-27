import Head from 'next/head'
import React, { useEffect,useState } from 'react';
import { Children } from 'react';
import {
  EmailShareButton,
  FacebookShareCount,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  FacebookIcon
} from "react-share";
import { GetAllPost } from '../action/sharecodeAction';
import renderHTML from 'react-render-html';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import fetch from 'isomorphic-unfetch';




function Post( props ) {

  console.log('props', props.data);
  // const [post, setPost] = React.useState([]);
  // const router = useRouter();
  // console.log(' router.query total post',  router.query);
  // const { vehicle, person } = router.query;
  



  // let initialDataLoading = async()=>{
  //   let postData = await GetAllPost();
  //   console.log('postData', postData.data);
  //   setPost(postData);
    
  // }

  return (
   
    {
         
      postsData&&postsData.map((item)=>(
         <Link 
         >
           <div className="posts-container">
             <h1>{item.title}</h1>
             {renderHTML(item.description.substr(0,300))}
             <p>Share this</p>
             <div className="socialIcon">
  
             <FacebookShareButton url={`https://programmingwithmosh.com/react-native/your-react-native-newbie-questions-answered/`}>
               {/* <FacebookIcon/> */}
               { <img src="/facebook.png" width="25" height="25" />}
             </FacebookShareButton>
               <a href><img src="/linkedin.png" width="25" height="25" /></a>
               <a href><img src="/twitter.png" width="25" height="25" /></a>
               <a href><img src="/mail.png" width="25" height="25" /></a>
             </div>
             <div className="postTag">
               <a href="">Tags:</a>
               <a href="#">Api</a>
               <a href="#">data</a>
               <a href="#">fetch</a>
             </div>
           </div>
       </Link>
      ))  
     
     }
  )
}



// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://10.17.2.20:8010/shareyou/api/getBlog')
//   const postsData = await res.json();

//   console.log('postsData', postsData);

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       postsData,
//     },
//   }
// }
Post.getInitialProps= async function()
{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  console.log('res', res);
  alert();
  const postsData = await res.json();
  return{
    postsData
  }
}
export default Post;
