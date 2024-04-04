import React from 'react'
import founder from "../../utils/img/founder.png"
import pinkBtn from "../../utils/img/pinkBtn.png"

const Bottom = () => {
    const agenda = [
        {
            img: pinkBtn,
            text: "Introduction to Salesforce"
        },
        {
            img: pinkBtn,
            text: "Career Opportunities in the Salesforce Ecosystem"
        },
        {
            img: pinkBtn,
            text: "Building Blocks of Salesforce Knowledge"
        },
        {
            img: pinkBtn,
            text: "Q&A Session"
        },
        {
            img: pinkBtn,
            text: "Exclusive Offer: Unlock Full Salesforce Course"
        },
        {
            img: pinkBtn,
            text: "Closing and Call to Action"
        },
    ]

    return (
        <div className='flex justify-center items-center flex-col mt-[3rem] mb-[3rem]'>
            <div className='font-bold text-4xl mb-[2rem]' style={{ fontFamily: 'syne' }}>
                <span className='text-white'>Meet Your </span>
                <span className='text-pink-800'>Instructor</span>
            </div>
            <div className='flex justify-center items-center mt-[4rem] gap-[6rem]'>
                <img src={founder} alt="founder" className='h-[15rem] ml-[8rem]' />
                <div className='text-white'>
                    <p className='text-3xl mb-[2rem] font-bold' style={{ fontFamily: 'syne' }}>Prateek Prasoon</p>
                    <div style={{ maxWidth: '502px' }}>
                        <p className='mb-[2rem]'> Founder of CloudPrism Solutions With over 7 years of hands-on Salesforce expertise, Prateek has guided numerous individuals to successful careers in the tech industry.</p>
                        <p> Founder of CloudPrism Solutions With over 7 years of hands-on Salesforce expertise, Prateek has guided numerous individuals to successful careers in the tech industry.</p>

                    </div>

                </div>
            </div>


            <div className="mt-16 mb-8 w-[55rem] h-[27rem] rounded-xl shadow-md flex flex-col">
                <p className="text-white text-center font-bold text-4xl mt-10 mb-[2rem]" style={{ fontFamily: 'syne' }}>Frequently Asked Questions</p>
                <div className="flex flex-col space-y-4">
                    {agenda.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center px-4 mx-[9rem] py-1 rounded-lg bg-gray-100"
                        >
                            <img src={item.img} alt="button" className="size-5" />
                            <span className="ml-4 text-black">{item.text}</span>
                            <button className="flex justify-end">+</button>
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    style={{
                        background: 'rgba(245, 71, 142, 1)',
                        boxShadow: '0px 4px 82px 0px #00000040',
                        padding: '0.1rem 0.4rem',
                        margin: '4rem 9rem',
                        borderRadius: '1.8rem',
                        fontFamily: 'Poppins',
                        fontSize: '25px',
                        fontWeight: '600',
                        lineHeight: '46.92px',
                        // letterSpacing: '0.17em',
                        textAlign: 'center',
                    }}
                >
                   Reserve My Seat Now!
                </button>
            </div>


        </div>
    )
}

export default Bottom
