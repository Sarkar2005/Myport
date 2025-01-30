import "./Contact.css";
import contact from "./assets/contact.gif";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <>
        <div className="card3">
        <img style={{ height: "300px" }} src={contact} alt="contact-pic" />
        <div className="content">
          {/* <marquee direction="">
            <h2 style={{color:'rgb(119, 225, 190)' }}>Conncet!! with Me Click any icon</h2>
          </marquee> */}
          <h4 style={{padding:'20px'}}>Feel free to reach out—I’d love to connect and discuss exciting ideas or opportunities!</h4>
         <div className="iconsd"><h4> <a href="https://www.instagram.com/_dsarkarr/?hl=en"><InstagramIcon  style={{fontSize:'40px',color:'#00FFFF'}}/></a> <a href="https://www.facebook.com/profile.php?id=100063596674106"><FacebookIcon  style={{fontSize:'40px',color:'#00FFFF'}} /></a>  <a href="mailto:sarkar2005dipanjan@gmail.com"><EmailIcon  style={{fontSize:'40px',color:'#00FFFF'}}/></a>  <a href="https://www.linkedin.com/in/dipanjan-dsarkar/">< LinkedInIcon  style={{fontSize:'40px',color:'#00FFFF'}}/></a></h4></div>
        
          <h4><ArrowUpwardIcon/>click above to Connect</h4>

          <h5>@sarkarportfolio</h5>

        </div>
      </div>
    </>
  );
}

export default Contact;
