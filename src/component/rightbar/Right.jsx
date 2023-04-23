import React from 'react'
import './right.css';
import Online from '../online/Online'
import {Users} from '../feed/dummyData.js'

const Right = ({profile}) => {
  return (
  <>
    <div className="rightbar">
	  <div className="rightbarWrapper">


         <div className="birthdayContainer">
		 <img src="bir.jpg" className="birthdayImg" alt=""/>
		 <span className="birthdayText">
		 <b>Pola Foster</b> and <b>3 other friends </b>have a birth today
		 </span>
		</div>
		<img src="net.jpg" alt="" className="rightbarAd"/>
		<h4 className="rightbarTitle">Online Friends</h4>
		<ul className="rightbarFriendList">
		{Users.map((u)=>(
		  <Online key={u.id} user={u}/>
		))}
		</ul>
	  </div>
	</div>
	</>
  )
}

export default Right