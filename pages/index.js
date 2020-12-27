import Head from 'next/head'
import CategoriesMenu from './component/CategoriesMenu';
import PopularPost from './component/PopularPost';
import Post from './component/Post';

import Sidebar from './component/sidebar';

export default function Home() {
  return (
    <div className="container-fluid nopadding">
      <div className="row">
        <div className="col-md-3 col-12 col-sm-12">
          <Sidebar/>
        </div>
        <div className="col-md-6 col-12 col-sm-12">
          {/* <Post/> */}
          <Blog/>
        </div>
        <div className="col-md-3 col-12 col-sm-12">
          <CategoriesMenu/>
          <PopularPost/>
        </div>
      </div>
    </div>
  )
}
