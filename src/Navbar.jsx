
import './Navber.css';


function Navbar(){
    return(
        <>
        <nav className="Navbar">
            <div className="nav-logo">
                <a href="">Myport</a>
            </div>

            <div className="Nav-items">
                <ul className="Nav-links">
                <li>
                    <a href="">About Me</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contact Me</a>
                </li>
                <li>
                    <a href=""><button>Login</button></a>
                </li>
                </ul>
            </div>

        </nav>
        
        </>
    )
}

export default Navbar;