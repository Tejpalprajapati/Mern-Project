import React,{Component} from 'react'
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';

//console.log(DATA)
 export default class Feed extends Component {
	 constructor(props){
		 super(props)
		 this.state={
			 desc:'',
             picture:'',
	         date :'',
             userId:'',
			 like:'',
			 Comment:'',
			 Posts:[]
			}
	 }
	 componentDidMount(){	
		const url='http://localhost:5000/Posts';
		let promise=fetch(url);
		promise.then((response)=>
		{return response.json()}).then((data)=>{
			if(Array.isArray(data))
			{
				this.setState({
					Posts:data
				});
			}
		}).catch((error)=>{console.log(error)})
	}
	
	 render(){
      return (
    <>
    <div className="feed">
	  <div className="feedWrapper">
	     <Share/>  
			{
			 this.state.Posts.map((item)=><Post data={item} />)
			}
	  </div>
	</div>
	</>
  )
}
 }

