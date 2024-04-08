import React, { useState } from 'react';
import purpleBtn from "../../utils/img/purpleBtn.png";
import pencil from "../../utils/img/pencil.png";
import stars from "../../utils/img/stars.png";
import bulb from "../../utils/img/bulb.png";
import sound from "../../utils/img/sound.png";
import pinkBtn from "../../utils/img/pinkBtn.png";


const Middle = () => {
    const programData = [
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
        'BCA / MCA Graduates',
    ];

    const benefits = [
        {
            img: pencil,
            text: "Learn the foundations of Salesforce from scratch"
        },
        {
            img: stars,
            text: "Understand the career opportunities in the Salesforce ecosystem"
        },
        {
            img: bulb,
            text: "Gain insights from real-world industry experiences"
        },
        {
            img: sound,
            text: "Interactive Q&A session to get your queries answered"
        }
    ];

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

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className='flex justify-center items-center flex-col overflow-hidden'>
            <div className='bg-white mt-[4rem] mb-[2rem] w-[55rem] h-[27rem] rounded-xl flex flex-col' style={{ '@media only screen and (max-width: 768px)': { width: '80%' } }}>
                <p className='flex font-bold text-4xl mt-[3rem] ml-[15rem] mb-[2rem]' style={{ fontFamily: 'syne', textAlign: 'center' }}>
                    Who is this program for?
                </p>
                <div style={gridStyle}>
                    {programData.map((item, index) => (
                        <div key={index} className='flex justify-center items-center mx-[2rem] rounded-3xl' style={{ backgroundColor: 'rgba(123, 16, 200, 0.1)', padding: '0.5rem 1rem', fontSize: '1.2rem' }}>
                            <img src={purpleBtn} alt="purple button" className='size-5 mr-[1rem]' />
                            {item}
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    style={{
                        background: 'rgba(245, 71, 142, 1)',
                        boxShadow: '0px 4px 82px 0px #00000040',
                        padding: '0.1rem 0.9rem',
                        margin: '1rem 11rem ',
                        borderRadius: '1.8rem',
                        fontFamily: 'Poppins',
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        lineHeight: '46.92px',
                        textAlign: 'center',
                        width: 'fit-content',
                    }}
                >
                    Kickstart your Salesforce Career at just Rs 249/-
                </button>
            </div>
            <div className='flex flex-col rounded-4xl my-[2rem]' style={{ width: '55rem', '@media only screen and (max-width: 768px)': { width: '80%' } }}>
                <p className='text-white flex justify-center items-center mb-[2rem] text-3xl'>Benefits</p>
                <div className='flex justify-center flex-wrap'>
                    {benefits.map((item, index) => (
                        <div className="mx-2 mb-4 flex flex-col items-center gap-[1rem]" key={index} style={{ minWidth: '180px', maxWidth: '300px', textAlign: 'center' }}>
                            <img src={item.img} alt="benefits" className="w-15 h-20 mb-4" />
                            <p className="mb-2 text-white" style={{ maxWidth: '200px' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white mt-16 mb-8 w-[55rem] h-auto py-[2rem] rounded-xl shadow-md flex flex-col" style={{ '@media only screen and (max-width: 768px)': { width: '80%' } }}>
                <p className="text-center font-bold text-2xl mt-10 mb-[2rem]">Agenda</p>
                <div className="flex flex-col space-y-4">
                    {agenda.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center px-4 mx-[9rem] py-1 rounded-lg bg-gray-100 relative" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <img src={item.img} alt="button" className="size-5" />
                                    <span className="ml-4 text-black">{item.text}</span>
                                </div>
                                <button
                                    className="flex justify-end text-black"
                                    onClick={() => toggleExpand(index)}
                                >
                                    {expandItems[index] ? '-' : '+'}
                                </button>
                            </div>
                            {expandItems[index] && (
                                <p className="text-center py-[0.5rem] text-sm text-black">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Middle;
