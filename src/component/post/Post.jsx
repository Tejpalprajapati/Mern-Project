import React ,{useState} from 'react'
import {MdMoreVert } from "react-icons/md";
import { GrChat,GrLike,GrShare} from "react-icons/gr";

import './post.css';
import {Users} from '../feed/dummyData.js'

const Post = ({data}) => {
	const [like ,setLike] =useState(data.like)
	const [isLiked ,setIsLiked] =useState(false);
	const likeHandler=()=>{
		setLike(isLiked ? like :like+1)
		setIsLiked(!isLiked)
	}
  return (
    <div className="post">
	   <div className="postWrapper">
	     <div className="postTop">
		   <div className="postTopLeft">
		      <img src={Users.filter((u)=>u.id === data.userId)[0].profilePicture} alt="" className="postProfileImg"/>
			  <span className="postUserName">
			  {Users.filter((u)=>u.id === data.userId)[0].username}
			  </span>
			 <span className="postDate">{data.date}</span>
		   </div>
		   <div className="postTopRight">
		      <MdMoreVert/>
		   </div>
		 </div>
	     <div className="postCenter">
		  <span className="postText" >{data.desc}</span>
		  <img src={data.picture} alt="" className="postImg"/>
		  </div>
	     <div className="postBottom">
		    <div className="postBottomLeft">
			  <img src="heart.jpg" alt="" className="likeIcon" onClick={likeHandler}/>
			  <img src="like.jpg" alt="" className="likeIcon" onClick={likeHandler} />
			  <span className="postLikeCounetr">{like} people like it</span><br/>
			  
			</div>
		    <div className="postBottomRight">
			  <span className="postCommentText">{data.Comment}comments</span>
			</div>
			
		 </div>
		 	<div className="button">
			  			<button className="btn" onClick={likeHandler}><GrLike/></button>
			            <button className="btn" onClick={likeHandler}><GrChat/></button>
			            <button className="btn"><GrShare/></button>
			</div>

	   </div>
	</div>
  )
}

export default Post;