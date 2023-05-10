import "./Style/Navbar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="main-navbar-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <h2>Ecommerce</h2>
                    </div>
                    <div className="col-3 text-end">
                        <div className="cart-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}