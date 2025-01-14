import Ai from "./assets/Ai.webp";
import block from "./assets/block.webp";
import house from "./assets/house.jpg";
import "./card.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Card() {
  return (
    <>
      <div className="card2">
        <img
          src={Ai}
          style={{ height: "230px", width: "240px" }}
          alt="Ai-pic"
        />
        <h3>AI Assistant using Python</h3>
        <p> Developed PyAssist , an advanced AI Assistant using Python, showcasing proficiency in natural language processing and 
        machine learning. </p>
      </div>
      <div className="card2">
        <img
          src={block}
          style={{ height: "230px", width: "240px" }}
          alt="Ai-pic"
        />
        <h3>Business House Website</h3>
        <p>Designed and implemented a sleek, interactive portfolio website using HTML and CSS,JavaScrpt and react to showcase skills and projects. </p>
      </div>
      <div className="card2">
        <img
          src={house}
          style={{ height: "230px", width: "240px" }}
          alt="Ai-pic"
        />
        <h3> Ethereum Wallet Adapter</h3>
        <p>Developed a seamless wallet integration  enabling detection and support for multiple browser-based Ethereum wallets.             
        
          </p>
          
      </div>
      <AddCircleOutlineIcon />
      
     
    </>
  );
}

export default Card;
