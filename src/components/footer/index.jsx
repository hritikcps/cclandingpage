import React from 'react';
import logo from "../../utils/img/Group 53.png";
import twitter from "../../utils/img/twitter.png";

const Footer = () => {
    return (
        <div className='flex justify-center items-center mt-[8rem]'>
            <div className='grid grid-cols-2 gap-4 text-white'>
                <div className='col-span-1 row-span-3 flex flex-col items-center text-right'>
                    <img src={logo} alt="logo" className='mb-[2rem]' />
                    <p className='text-xl mb-[1.5rem]'>Contact Us</p>
                    <p style={{ maxWidth: '300px' }}>Sandesh sadan near mamta apartment, south shivpuri Patna 800023</p>
                </div>

                <div className='flex items-center flex-col flex-wrap justify-between mt-[4rem] text-right '>
                    <img src={twitter} alt="twitter logo" className=' w-10 h-10 mb-[1.3rem]' />
                    <p>+917870081711</p>
                    <p>join@codingcommando.in</p>
                </div>

            </div>
        </div>

    );
};

export default Footer;
