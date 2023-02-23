import { Link } from "react-router-dom"


export default function Footer(){
    return(
        <footer className="footer-png">
            <ul>
               <Link to='https://www.facebook.com/nike' ><li><img src="facebook.png"/></li></Link> 
                <Link tp='https://www.instagram.com/nike/'><li><img src="instagram.png"/></li></Link>
                <Link to='https://twitter.com/Nike'><li><img src="twitter.png"/></li></Link>
                <Link to='https://www.youtube.com/user/nike'><li><img src="youtube.png"/></li></Link> 

            </ul>
           
           <p className="copy">© 2023 NIKE, Inc. All Rights Reserved</p>

        </footer>
    )
}