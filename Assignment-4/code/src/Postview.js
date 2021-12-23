import React,{useState} from 'react';
import './Postview.css';
import cam from "./logo.jpg"




const Postview=()=> {
  const [posts,setPost]=useState([]); 
  React.useEffect(()=>{
    fetch("http://localhost:3004/user")
    .then((res)=>res.json())
    .then((responseData)=>setPost(responseData))
  },[])
  return(
    <div className="site-container">
      <hr></hr>
      <div className="insta">
        <div className='align1'><h1>Instaclone</h1></div>
        <div className='align2'><img src={cam} className='logo' alt='random'/></div>
        
      </div>
      <hr></hr>
      {posts.map((post,index)=>{
          return (
            <div className='post' key={index}>
              <div className='box1'>
              <strong>{post.name}</strong>
              <br></br>
              {post.location}
              </div>
              <div className='box2'>
                <img src={post.PostImage} className='pic' alt='random'/>
              </div>
              <div className='box3'>
                <div className='box31'>
                  {post.date}
                </div>
                <div className='box32'>
                  {post.likes} likes
                  <br></br>
                  <strong>{post.description}</strong>

                  
                </div>
              </div>
            </div> 
          )}
        )} 
     

   
    </div> 
  )}
   
export default Postview;
