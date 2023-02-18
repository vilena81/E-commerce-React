import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <ul>
                <li className="home">
                    <Link to="/">Home</Link>
                </li>
                
                <li className="products">
                    <Link to="/products">Products</Link>
                </li>
                <li className="contact">
                    <Link to="/contacts">Contacts</Link>
                </li>

            </ul>
        </div>
    )
}