import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div style={{backgroundColor:'#81CCC5',height:'500px'}} className="mt-5 pt-5">
            <div className="justify-content-center text-center">
                <h1>EDUKIDS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, et?</p>
            </div>
           i <footer className="main-footer">
                <div className="social-icon">
                    <a href="https://twitter.com/"><img src="https://i.ibb.co/Ch244kF/Twitter.png" alt="" /></a>
                    <a href="https://www.facebook.com/"><img src="https://i.ibb.co/k5016hW/Facebook.png" alt="" /></a>
                    <a href="https://www.youtube.com/"><img src="https://i.ibb.co/rQZcpQ1/YouTube.png" alt="" /></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;