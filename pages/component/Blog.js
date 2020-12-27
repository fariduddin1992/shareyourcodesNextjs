
import fetch from 'isomorphic-unfetch';




function Blog( props ) {

  console.log('props', props.data);
  

  return (
   
    <div className="posts">
       <h1>Hello</h1>
        
    </div>
  )
}



Blog.getInitialProps = async function()
{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  console.log('res', res);
  alert();
  const data = await res.json();
  return{
    data
  }
}
export default Blog;
