import Head from 'next/head'
import CategoriesMenu from './component/CategoriesMenu';
import PopularPost from './component/PopularPost';
import Post from './component/Post';
import SingleArticle from './articles/SingleArticle'

import Sidebar from './component/sidebar';

export default function about() {
  return (
    <div className="container-fluid nopadding">
      <div className="row">
        <div className="col-md-3 col-12 col-sm-12">
          <Sidebar/>
        </div>
        <div className="col-md-6 col-12 col-sm-12">
         <SingleArticle/>
        </div>
        <div className="col-md-3 col-12 col-sm-12">
          <CategoriesMenu/>
          <PopularPost/>
        </div>
      </div>
    </div>
  )
}
