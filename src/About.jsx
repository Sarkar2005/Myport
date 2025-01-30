import "./About.css";
import giphy from "./assets/giphy.gif";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function About() {
  return (
    <>
      <div className="card">
        <img style={{ height: "300px" }} src={giphy} alt="bot-pic" />
        <div className="content">
          <marquee direction="">
            <h2 style={{color:'#00FFFF' }}>Hello! Welcomes To Dipanjan:s PORTFOLIO</h2>
          </marquee>
          <h4>Dipanajan Sarkar is a passionate Computer Science Engineering student pursuing a B.Tech at a university. With a keen interest in technology and problem-solving, Dipanajan is dedicated to exploring innovative solutions and building impactful projects. From programming to software development, they continuously strive to expand their skills and knowledge. Driven by curiosity and determination, Dipanajan aims to contribute meaningfully to the tech industry and excel in their career path.</h4>
          <h4><ArrowUpwardIcon/>click above to read</h4>
          
        </div>
      </div>
    </>
  );
}

export default About;
