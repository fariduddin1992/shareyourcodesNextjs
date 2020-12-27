

import React, { useEffect,useState } from 'react';
import { getShowPost } from '../../action/sharecodeAction';
import renderHTML from 'react-render-html';
import Sidebar from '../../component/sidebar';
import PopularPost from '../../component/PopularPost';
import CategoriesMenu from '../../component/CategoriesMenu';
import { useRouter } from "next/router";

export  function SinglePost() {
  const router = useRouter();

    return (
     NULL
    //   <div className="container-fluid nopadding">
    //   <div className="row">
    //     <div className="col-md-3 col-12 col-sm-12">
    //       <Sidebar/>
    //     </div>
    //     <div className="col-md-6 col-12 col-sm-12">
    //     <div className="title singleImage">
    //        {/* <h1>{data.title}</h1> */}
    //        {/* <a href="#"><img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2020/11/jessica-delp-p1P_e86R2DI-unsplash.jpg?ssl=1"/></a> */}
            
    //         {/* {renderHTML(data.description)} */}
    //      </div>
    //     </div>
    //     <div className="col-md-3 col-12 col-sm-12">
    //       <CategoriesMenu/>
    //       <PopularPost/>
    //     </div>
    //   </div>
    // </div>
    
    )

}

// export async function getServerSideProps({router}) {
  
//   // Fetch data from external API

//   const res = await fetch(`http://10.17.1.156:8010/shareyou/api/getBlog/${id}`)
//   const data = await res.json();
 

//   // Pass data to the page via props
//  return { props: { data} }
// }


// export async function getServerSideProps(context) {
  
// console.log('context', context);
//   const res = await fetch("http://10.17.1.121:8010/shareyou/api/getBlog/31");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://10.17.1.121:8010/shareyou/api/getBlog/31`)
//   const dataJSON = await res.json();
//   const data = dataJSON.data;
//   console.log('data', data);
//   return { props: { data }}
// }

// export async function getStaticPaths() {
//   const res = await fetch(`http://10.17.1.121:8010/shareyou/api/getBlog`);
//   const products = await res.json();
//   // const products = dataJSON.data;
//   console.log('products', products);

//   const paths = products.map((product) => ({
//       params: { 
//         subcategory: product.id.toString() ,
//         postId: product.id.toString() ,
//         singlePost: product.id.toString() ,
//       }
//   }));
//   return { paths, fallback: true }
// }

export default SinglePost
