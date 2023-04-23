import React from 'react'
import {  TfiSearch  } from "react-icons/tfi";
import { AiFillMessage} from "react-icons/ai";
import {HiBell   } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <div>
        <div className='head'>
              <div className='topLeft'>
                <span className='logo'>Facebook</span>
              </div>
              <div className='topCenter'>
                <div className='searchbar'>
                <TfiSearch className="searchIcons"/>
                <input placeholder='Search for friend ,post or video' className='searchInput'/>
                </div>
              </div>
              <div className='topRight'>
                <div className="topbarLink">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>TimeLine</span>
                </div>
                <div className='topbarIcons'>
				    <div className="topbarIconsItem">
                      <MdAccountCircle/>
                        <span className='topbarIconsBadge'>1</span>
                </div>
                <div className='topbarIconsItem'>
                         <AiFillMessage/>
                        <span className='topbarIconsBadge'>2</span>
                </div>
                   <div className='topbarIconsItem'>
                        <HiBell/>
                        <span className='topbarIconsBadge'>1</span>
                </div>
				</div>
				<img  src="Tejpal.jpg" className="topbarImg" alt=""/>
              </div>
        </div>

    </div>
	
  )
}

export default Header;