
import './Navber.css';



function Navbar(){
   
    return(
        <>
        <nav className="Navbar">
            <div className="nav-logo">
                <a href="">Home</a>
            </div>

            <div className="Nav-items">
                <ul className="Nav-links">
                <li>
                    <a href="/About Me">About Me</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="/Contact Me">Contact Me</a>
                </li>
                <li>
                    <a href=""><button>Login/Signup</button></a>
                </li>
                </ul>
            </div>

        </nav>
        
        </>
    )
}

export default Navbar;