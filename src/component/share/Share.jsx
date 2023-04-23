import React from 'react'
import {MdPermMedia,MdRoom,MdLabel,MdEmojiEmotions } from "react-icons/md";
import './Share.css';
const Share = () => {
  return (
  <>


    <div className="share">
	   <div className="shareTop">
	      <img src="Tejpal.jpg" alt="" className="shareProfileImg"/>
          <input  className="shareInput" placeholder="What's in your mind Safak ?"/>		 
	   </div>
	   <hr className="shareHr"/>
	   <div className="shareBottom">
	     <div className="shareOptions">
		   <div className="shareOption">
		    <MdPermMedia style={{color:'red'}}
			className="shareIcon" />
		    <span className="sahreOptionText">Photo or Video</span>
		   </div>
		   <div className="shareOption">
		    <MdLabel  className="shareIcon" style={{color:'blue'}}/>
		    <span className="sahreOptionText">Tag</span>
		   </div>
		   <div className="shareOption">
		    <MdRoom  className="shareIcon" style={{color:'green'}}/>
		    <span className="sahreOptionText">Location</span>
		   </div>
		   <div className="shareOption">
		    <MdEmojiEmotions className="shareIcon" style={{color:'orange'}}/>
		    <span className="sahreOptionText">Feelings</span>
		   </div>
		 </div>
		 <button className="shareButton">Share</button>
	   </div>
	</div>
	
	</>
  )
}

export default Share;