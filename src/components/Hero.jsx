// import React from 'react';
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
// we don't need a return statement cuz we're gonna return our jsx instantly  
// sm:ml-5 md:ml-20 lg:ml-30
const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col sm:ml-5 md:ml-20 lg:ml-30 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm-px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount For {" "}
            <span className="text-white">1 Month</span> Account 
          </p>
        </div> 

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] ss:leading-[100px] text-[52px] text-white">
            The Next <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">Generation</span> {" "}
            {/* Payment Method. */}
          </h1>
          {/* button */}

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] ss:leading-[100px] text-[52px] text-white w-full">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Minima quod voluptate 
          dolore fugit asperiores est quia quidem sint, 
          adipisci deleniti?
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-10 relative`}>
        <img src={robot} alt="billing" className="relative w-[100%] h-[100%] z-[5]"/>
        {/* for some reason doesn't work for safari browser */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 rounded-full blue__gradient"/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
)

export default Hero