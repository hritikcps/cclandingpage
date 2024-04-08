import React, { useState } from 'react';
import founder from "../../utils/img/founder.png";
import pinkBtn from "../../utils/img/pinkBtn.png";

const Bottom = () => {
    const agenda = [
        {
            img: pinkBtn,
            text: "Introduction to Salesforce",
            description: "This is an introduction to Salesforce."
        },
        {
            img: pinkBtn,
            text: "Career Opportunities in the Salesforce Ecosystem",
            description: "This session covers various career opportunities in the Salesforce ecosystem."
        },
        {
            img: pinkBtn,
            text: "Building Blocks of Salesforce Knowledge",
            description: "This session covers various Building Blocks of Salesforce Knowledge."

        },
        {
            img: pinkBtn,
            text: "Q&A Session",
            description: "This session covers various Q&A Session."
        },
        {
            img: pinkBtn,
            text: "Exclusive Offer: Unlock Full Salesforce Course",
            description: "Introduction to the comprehensive Salesforce course offered by Coding Comando. Special discount or bonuses for workshop attendees who enroll in the full course."
        },
        {
            img: pinkBtn,
            text: "Closing and Call to Action",
            description: "This session covers various Closing and Call to Action."
        },
    ];

    const [expandItems, setExpandItems] = useState(Array(agenda.length).fill(false));

    const toggleExpand = index => {
        const newExpandItems = [...expandItems];
        newExpandItems[index] = !newExpandItems[index];
        setExpandItems(newExpandItems);
    };

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

            <div className="mt-16 mb-8 w-[55rem] rounded-xl shadow-md flex flex-col h-auto" style={{ '@media only screen and (max-width: 768px)': { flexDirection: 'column' } }}>
                <p className="text-white text-center font-bold text-4xl mt-10 mb-[2rem]" style={{ fontFamily: 'syne' }}>Frequently Asked Questions</p>
                <div className="flex flex-col space-y-4">
                    {agenda.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center px-4 mx-[9rem] py-2 rounded-2xl bg-inherit relative" style={{ border: '1px solid rgba(79, 79, 79, 1)' }}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <img src={item.img} alt="button" className="size-5" />
                                    <span className="ml-4 text-white">{item.text}</span>
                                </div>
                                <button
                                    className="flex justify-end text-white"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expandItems[index] ? '-' : '+'}
                                </button>
                            </div>
                            {expandItems[index] && (
                                <p className="text-center py-[0.5rem] text-sm text-white">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="reserve-button"
                    style={{
                        background: 'rgba(245, 71, 142, 1)',
                        boxShadow: '0px 4px 82px 0px #00000040',
                        padding: '0.1rem 6rem',
                        margin: '2rem auto',
                        borderRadius: '1.8rem',
                        fontFamily: 'Poppins',
                        fontSize: '25px',
                        fontWeight: '600',
                        lineHeight: '46.92px',
                        textAlign: 'center',
                        '@media only screen and (max-width: 768px)': {
                            margin: '4rem auto',
                        }
                    }}
                >
                    Reserve My Seat Now!
                </button>
            </div>
        </div>
    );
};

export default Bottom;
