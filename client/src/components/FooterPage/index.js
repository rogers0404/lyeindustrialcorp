import React from 'react';
import twitterImage from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import emailImage from "../../assets/email.png";
function FooterPage() {

  return (
    <footer className="footerImage d-flex justify-content-center">
        <div className="p-1 m-3 d-flex justify-content-center w-25 align-items-center">
          <div>
             <a className="text-white" href="https://github.com/rogers0404/" target="blank">
                <img className="img-fluid brandImageSize" src={instagram} alt="Rogers"/>
            </a>
          </div>
          <div>
             <a className="text-white" href="https://twitter.com/rogersalberto" target="blank">
             <img className="img-fluid brandImageSize" src={twitterImage} alt="Rogers" />
            </a>
          </div>
          <div>
             <a className="text-white" href="https://www.linkedin.com/in/rogers-ramirez-496a66b6" target="blank">
             <img className="img-fluid brandImageSize" src={facebook} alt="Rogers"/>
            </a>
          </div>
          <div>
             <a className="text-white" href="mailto:rogers.ramirez2008@gmail.com" target="blank">
             <img className="img-fluid brandImageSize" src={emailImage} alt="Rogers" />
            </a>
          </div>
        </div>
        <div className="p-1 m-3 d-flex justify-content-end w-75 align-items-center">
          <div>
              &copy; 2021 iT Solutions. 
          </div>
        </div>
    </footer>
  );
}

export default FooterPage;