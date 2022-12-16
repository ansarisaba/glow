import React from 'react';
import Diamond from "../assets/images/diamond.png"
import Script from "../assets/images/script.png"
import Glowimg from "../assets/images/glowimage2.png"
import Glowimg1 from "../assets/images/glowimg3.png"
import "../App.css";





function Pdp() {
 
  return (
  <>
    <div class="full flex justify-center    lg:w-full lg:flex  lg:justify-center ">
      <div class="md:rounded md:mt-4  md:flex md:flex-col md:items-center md:bg-[#F7F2EC]    lg:rounded lg:mt-4 lg:w-11/12 lg:flex lg:flex-col lg:items-center lg:bg-[#9C6A8C] "> 

      <div class="flex flex-col mt-12 pb-8 items-center text-center lg:flex lg:flex-col lg:mt-16 lg:pb-8 lg:items-center lg:text-center">       
                <h1 class="text-3xl text-[#181A1D] lg:text-4xl lg:text-[#FFFFFF]">Try Before You Buy It</h1>  
                <p class="w-96 text-sm text-[#181A1D] lg:w:96 lg:text-sm lg:mt-2 lg:text-[#FFFFFF] lg:flex ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod Lorem ipsum dolor sit amet</p>
      </div>       
        <div class="flex  flex-col  items-center  lg:flex lg:flex-row  lg:w-3/4 lg:justify-around lg:pb-8 lg:pt-16 lg:items-center ">

        <div className='background'>  
            <img src={Glowimg} alt="Diamond"  class="absolute w-36 h-36 left-72 bottom-0 lg:w-64 lg:h-64 lg:flex lg:bottom-8 lg:left-80 lg:ml-4"/> 
        </div>

            <div class=" lg:mr-0">
            <div class=" flex flex-col mt-2  lg:flex lg:flex-col lg:mt-4"> 
                <h1 class="text-2xl text-[#181A1D] lg:text-3xl lg:text-[#FFFFFF]">Try It On At Home</h1>  
                <p class="text-sm text-[#181A1D] mt-1 lg:text-sm lg:mt-2 lg:text-[#FFFFFF]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy eirmod Lorem ipsum dolor sit amet</p>
            </div> 

            <div class=" flex flex-row lg:flex lg:flex-row lg:items-center">
            <img src={Diamond} alt="Diamond"  class="w-14 h-14 mt-3 p-2 lg:w-14 lg:h-14 lg:mt-3 lg:p-2"/> 
            <div class=" mt-6 lg:flex lg:flex-col lg:mt-6">               
                <h1 class=" text-sm text-[#181A1D] lg:text-base lg:text-[#FFFFFF]">Try This Jewellery At Your Home.</h1>  
                <p class=" text-sm text-[#181A1D] lg:text-xs lg:mt-2 lg:text-[#FFFFFF]">Lorem ipsum dolor sit amet, consetetur</p>
            </div>
            </div>

            <div class="flex flex-row lg:flex lg:flex-row lg:items-center">
            <img src={Script} alt="Diamond"  class=" w-14 h-14 mt-3 p-2 lg:w-14 lg:h-14 lg:mt-3 lg:p-2"/> 
            <div class="flex flex-col mt-6">               
                <h1 class=" text-sm text-[#181A1D] lg:text-base lg:text-[#FFFFFF]">Try This Jewellery At Your Home.</h1>  
                <p class=" text-sm text-[#181A1D] lg:text-xs lg:mt-2 lg:text-[#FFFFFF]">Lorem ipsum dolor sit amet, consetetur</p>
            </div>
            </div>

            <button class="bg-[#181A1D] h-14 mt-6 text-sm text-[#FFFFFF] mt-4 -2 border-2 w-96 lg:bg-[#9C6A8C] lg:h-14 lg:mt-6 lg:text-xs lg:text-[#FFFFFF] lg:mt-4 lg:p-2 lg:border-inherit lg:border-2 lg:rounded lg:w-96">
                BOOK AN APPOINTMENT
            </button>
            </div>
        </div>

        <div class="flex flex-col-reverse items-center mt-12 lg:flex  lg:flex-row  lg:w-3/4 lg:justify-around lg:pb-8 lg:items-center">

            <div class="  lg:ml-16">
            <div class=" flex flex-col mt-4 lg:flex lg:flex-col lg:mt-4">  
                <h1 class=" text-2xl text-[#181A1D] lg:text-3xl lg:text-[#FFFFFF]">Want A Closer Look?</h1>  
                <p class="  text-sm text-[#181A1D] lg:text-sm lg:mt-2 lg:text-[#FFFFFF]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy eirmod Lorem ipsum dolor sit amet</p>
            </div> 

            <div class=" flex flex-row lg:flex lg:flex-row lg:items-center">
            <img src={Diamond} alt="Diamond"  class="w-14 h-14 mt-3 p-2 lg:w-14 lg:h-14 lg:mt-3 lg:p-2"/> 
            <div class=" mt-6 lg:flex lg:flex-col lg:mt-6">               
                <h1 class=" text-sm text-[#181A1D] lg:text-base lg:text-[#FFFFFF]">Try This Jewellery At Your Home.</h1>  
                <p class=" text-sm text-[#181A1D] lg:text-xs lg:mt-2 lg:text-[#FFFFFF]">Lorem ipsum dolor sit amet, consetetur</p>
            </div>
            </div>

            <div class="flex flex-row lg:flex lg:flex-row lg:items-center">
            <img src={Script} alt="Diamond"  class=" w-14 h-14 mt-3 p-2 lg:w-14 lg:h-14 lg:mt-3 lg:p-2"/> 
            <div class="flex flex-col mt-6">               
                <h1 class=" text-sm text-[#181A1D] lg:text-base lg:text-[#FFFFFF]">Try This Jewellery At Your Home.</h1>  
                <p class=" text-sm text-[#181A1D] lg:text-xs lg:mt-2 lg:text-[#FFFFFF]">Lorem ipsum dolor sit amet, consetetur</p>
            </div>
            </div>

            <button class="bg-[#181A1D] h-14 mt-6 text-sm text-[#FFFFFF] mt-4 -2 border-2 w-96 lg:bg-[#9C6A8C] lg:h-14 lg:mt-6 lg:text-xs lg:text-[#FFFFFF] lg:mt-4 lg:p-2 lg:border-inherit lg:border-2 lg:rounded lg:w-96">
            SCHEDULE A VIDEO CALL
            </button>
            </div>

            <div>
            <img src={Glowimg1} alt="Glowimg1"  class="  lg:x-w-2xl lg:max-h-96 lg:mr-16 lg:flex" /> 
            </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Pdp;

