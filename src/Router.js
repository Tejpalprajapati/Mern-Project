
const Router = () =>  {
    window.onhashchange = function(){

        var hash = window.location.hash.split("#")[1];
        window.localStorage.setItem('hash', hash );     
        window.location.reload(true);

       // console.log(window.location.href);
    }

    if( window.location.href.indexOf("#") > -1 ){
        
        window.localStorage.setItem('logs','Router Reloaded');     
           window.location.assign( window.location.hash.replace("#",""))

    }
   
    return window.localStorage.getItem('hash');
}
const redirect=(hashurl)=>{
		window.location.hash=hashurl;
		window.location.reload(true);
	}

let route = Router();
export {route,redirect};