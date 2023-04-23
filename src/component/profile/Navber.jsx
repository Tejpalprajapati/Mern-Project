import React ,{Component}from 'react';
export default class Navber extends Component
{
	render()
	{
	return(
	  <>
	  
	    <div className='ha'>
		  <nav>
		    <ul>
			  <ul className="nav">
				  <li><a  href="posts">Posts</a></li>
				  <li><a  href="about">About</a></li>
				  <li><a  href="photos">Photos</a></li>
				  <li><a  href="videos">Videos</a></li>
				  <li><a  href="mentions">Mentions</a></li>
				</ul>
		    </ul>
		  </nav>
		</div>
	  </>
	);
	}
}