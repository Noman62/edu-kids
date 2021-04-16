import React from 'react';
import Classes from '../Classes/Classes';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
         <Header></Header>
         <Classes></Classes>
         <Services></Services>
         <ContactUs></ContactUs>
         <Review></Review>
         <Footer></Footer>
        </div>
    );
};

export default Home;