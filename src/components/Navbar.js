import { Link } from "react-router-dom"
import "./Style/Navbar.scss";

export default function Navbar() {
    return (
        <div className="main-navbar-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Link to="/">Ecommerce</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}