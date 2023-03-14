// import React from 'react'
import styles from './style';
import {Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero} from './components';

const App = () => (
  // NAVBAR
  <div className={`bg-primary w-full overflow-hidden`}>
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/> 
        <Business/> 
        <Billing/> 
        <CardDeal/> 
        <Testimonials/> 
        <Clients/> 
        <CTA/> 
        <Footer/>
      </div>
    </div>
  </div>
);
export default App

// ed: dunno
// school: stressed but trying
// t: trying to ignore
// in general: dunno, feeling kinda overwhelmed 
// strugle: concentrate 
// how can i stop trying to feel bad?
// update with self harm
// parent dgaf
