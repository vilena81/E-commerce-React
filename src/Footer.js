import { Link } from "react-router-dom"


export default function Footer(){
    return(
        <footer className="footer-png">
            <ul>
               <Link to='https://www.facebook.com/nike' target="_blank" rel="noopener noreferrer" ><li><img src="facebook.png"/></li></Link> 
                <Link tp='https://www.instagram.com/nike/'target="_blank" rel="noopener noreferrer" ><li><img src="instagram.png"/></li></Link>
                <Link to='https://twitter.com/Nike' target="_blank" rel="noopener noreferrer"><li><img src="twitter.png"/></li></Link>
                <Link to='https://www.youtube.com/user/nike' target="_blank" rel="noopener noreferrer"><li><img src="youtube.png"/></li></Link> 

            </ul>
           
           <p className="copy">© 2023 NIKE, Inc. All Rights Reserved</p>

        </footer>
    )
}