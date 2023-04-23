import React ,{Component} from 'react';
import './profile.css';
import { AiFillMessage} from "react-icons/ai";
import Header from '../../Header';
import Side from '../../component/sidebar/Side';
import Right from '../../component/rightbar/Right';
import Feed from '../../component/feed/Feed';
import Navber from '../../component/profile/Navber';
import {GrMore} from "react-icons/gr";
import {route} from '../../Router';
import Posts from './Posts';
import About from    './About';
import Photos from   './Photos';
import Videos from   './Videos';
import Mentions from  './Mentions';

import { HiExclamationCircle ,HiChevronDoubleLeft,HiChevronDoubleRight,HiArrowCircleRight,HiDotsCircleHorizontal} from "react-icons/hi";
import {GiFirstAidKit,GiPhone,GiEnvelope,GiMoebiusStar } from "react-icons/gi";
export default class Profile extends Component{
	        constructor(props)
	{
		super(props)
	    this.view={
		posts:<Posts/>,
		about:<About/>,
		photos:<Photos/>,
		videos:<Videos/>,
		mentions:<Mentions/>,

	}
	}
	render(){
	return(
	   <>
	    <Header/>
		 <div className="profile">
			 <Side/>
			 <div className="profileRight">
			  <div className="profileRightTop">
			    <div className="profileCover">
			    <img src="3.jpeg" alt="" className="profileCoverImg"/>
			    <img src="Tejpal.jpg" alt="" className="profileUserImg"/>
				</div>
				<div className="profileInfo">
				 <h4 className="profileInfoName">Daksh Prajapti</h4>
				 <span className="profileInfoDesc">Daksh Prajapti</span>
				</div><br/>
				         <button className="btn1"><GiFirstAidKit style={{color:'white',marginTop:'-9px'}}/> Follow</button>
				         <button className="btn1"> <AiFillMessage style={{color:'white'}}/> Message</button>
				 	     <button className="bt"><GrMore/></button>
						 
                <hr style={{height:'4px'}}/>
				     <Navber/>
					 	     {this.amazon()}
				<hr/>
				<h4 style={{marginLeft:'10px'}}>Details</h4>
				<HiExclamationCircle style={{fontSize:'25px',marginLeft:'10px',color:'gray'}}/><b className="a">Pages </b> .<span className="a">Business Services</span><br/><br/>
				  <HiArrowCircleRight style={{fontSize:'25px',marginLeft:'10px',color:'gray'}}/> <span className="a"><HiChevronDoubleLeft/> not-applicable<HiChevronDoubleRight/>,Mumbai,India,Lucknow</span><br/><br/>
				<GiPhone style={{fontSize:'23px',marginLeft:'10px',color:'gray'}}/> <span className="a" style={{color:'blue'}}>9027910626</span><br/><br/>
				<GiEnvelope style={{fontSize:'23px',marginLeft:'10px',color:'gray'}}/> <span className="a" style={{color:'blue'}}>9027tejpalprajapati@gamil.com</span><br/><br/>
				<GiMoebiusStar style={{fontSize:'23px',marginLeft:'10px',color:'gray'}}/><span className="a" style={{color:'blue'}}>Not yet rated( 0 Reviewa)</span><br/><br/>
				  <HiDotsCircleHorizontal style={{fontSize:'25px',marginLeft:'10px',color:'gray'}}/> <span className="a">See more About The Raichand Group</span>
			  </div>
	
			  <div className="profileRightBottom">
				 <Feed/>
				 <Right profile/>
				
			   </div>
			   </div>
		 </div>
	   </>
	);
}
amazon=()=>{
		return this.view[route]
	}
}