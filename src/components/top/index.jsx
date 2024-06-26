import React from 'react'
import background from "../../utils/img/logo.png"
import logo from "../../utils/img/Group 53.png"
import founder from "../../utils/img/founder.png"
import founderDetails from "../../utils/img/founderDetails.png"

const Top = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-[3rem] mb-[8rem]'>
            <nav className='flex justify-center mb-[7rem]'>
                <img src={logo} alt="logo" className='mb-[2rem] absolute' />
            </nav>
            <div className='overflow-hidden'>
                <img
                    src={background}
                    alt="background"
                    className='bg-cover absolute top-0 left-0 '
                />
            </div>
            <div className='text-white flex justify-center items-center flex-col '>
                <p className='mb-[2rem]'>Master the Salesforce Domain with Industry Expert Prateek Prasoon!</p>
                <button
                    type="submit"
                    style={{
                        background: 'rgba(245, 71, 142, 1)',
                        boxShadow: '0px 4px 82px 0px #00000040',
                        padding: '0.1rem 4rem',
                        margin: '1rem 5rem',
                        borderRadius: '1.8rem',
                        fontFamily: 'Poppins',
                        fontSize: '25px',
                        fontWeight: '600',
                        lineHeight: '46.92px',
                        letterSpacing: '0.17em',
                        textAlign: 'center',
                    }}
                >
                    Reserve Seat now for Rs 249/-
                </button>

            </div>
            <div className='flex justify-center items-center mt-[4rem]'>
                <img src={founder} alt="founder" className='h-[10rem] ml-[8rem]' />
                <img src={founderDetails} alt="founderDetails" className='h-[10rem] ml-[5rem]' />
            </div>
            <div className='bg-white mt-[4rem] h-[20rem] w-[40rem] rounded-xl flex justify-center items-center'>
                Video or Photo
            </div>
            <style>
                {`
                @media only screen and (max-width: 768px) {
                    .mb-[8rem] {
                        margin-bottom: 4rem !important;
                    }
                    .mb-[7rem] {
                        margin-bottom: 3.5rem !important;
                    }
                    .ml-[8rem] {
                        margin-left: 4rem !important;
                    }
                    .ml-[5rem] {
                        margin-left: 2.5rem !important;
                    }
                    .h-[10rem] {
                        height: 8rem !important;
                    }
                    .w-[40rem] {
                        width: 35rem !important;
                    }
                }
                `}
            </style>
        </div>

    )
}

export default Top
