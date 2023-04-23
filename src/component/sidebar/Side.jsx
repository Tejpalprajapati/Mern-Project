import React from 'react'
import "./side.css"
import { MdRssFeed ,MdPlayCircle,MdGroup,MdOutlineBookmark,MdHelpOutline,MdWorkOutline,MdEvent,MdSchool} from "react-icons/md";
import { AiFillMessage} from "react-icons/ai";
import CloseFriend from '../closeFriend/CloseFriend'
import {Users} from '../feed/dummyData.js';
const side = () => {
  return (
  <>

    <div className="sidebar">
	  <div className="sidebarWrapper">
	      <ul className="sidebarList">
		     <li className="sidebarListItem">
			 <MdRssFeed className="sidebarIcon"/>
			 <span className="sidebarListText">Feed</span>
			 </li>
			 <li className="sidebarListItem">
			 <AiFillMessage className="sidebarIcon"/>
			 <span className="sidebarListText">Chats</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdPlayCircle className="sidebarIcon"/>
			 <span className="sidebarListText">Vidios</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdGroup className="sidebarIcon"/>
			 <span className="sidebarListText">Groups</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdOutlineBookmark className="sidebarIcon"/>
			 <span className="sidebarListText">Bookmarks</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdHelpOutline className="sidebarIcon"/>
			 <span className="sidebarListText">Questions</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdWorkOutline className="sidebarIcon"/>
			 <span className="sidebarListText">Jobs</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdEvent className="sidebarIcon"/>
			 <span className="sidebarListText">Events</span>
			 </li>
			 <li className="sidebarListItem">
			 <MdSchool className="sidebarIcon"/>
			 <span className="sidebarListText">Course</span>
			 </li>
	      </ul>
		  <button className="sidebarButton">Show More</button>
		  <hr className="sidebarHr"/>
		  <ul className="sidebarFriendList">
		    {Users.map((u)=>(
		  <CloseFriend key={u.id} user={u}/>
		))} 
		  </ul>
	  </div>
	</div>
	</>
  )
}

export default side