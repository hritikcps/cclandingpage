import React from 'react';
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
    ];

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        '@media only screen and (max-width: 768px)': {
            gridTemplateColumns: '1fr',
        }
    };

    return (
        <div className='flex justify-center items-center flex-col overflow-hidden'>
            <div className='bg-white mt-[4rem] mb-[2rem] w-[55rem] h-[27rem] rounded-xl flex flex-col'>
                <p className='flex font-bold text-4xl mt-[3rem] ml-[15rem] mb-[2rem]' style={{ fontFamily: 'syne' }}>
                    Who is this program for?
                </p>
                <div style={gridStyle}>
                    {programData.map((item, index) => (
                        <div key={index} className='flex justify-center items-center mx-[2rem] rounded-3xl' style={{ backgroundColor: 'rgba(123, 16, 200, 0.1)' }}>
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
                        padding: '0.1rem 0.7rem',
                        margin: '3rem 5rem',
                        borderRadius: '1.8rem',
                        fontFamily: 'Poppins',
                        fontSize: '25px',
                        fontWeight: '600',
                        lineHeight: '46.92px',
                        textAlign: 'center',
                        '@media only screen and (max-width: 768px)': {
                            margin: '3rem 2rem',
                        }
                    }}
                >
                    Kickstart your Salesforce Career at just Rs 249/-
                </button>
            </div>
            <div className='flex flex-col rounded-4xl'>
                <p className='text-white flex justify-center items-center mb-[2rem] text-3xl'>Benefits</p>
                <div className='flex justify-center flex-wrap'>
                    {benefits.map((item, index) => (
                        <div className="mx-2 mb-4 flex flex-col items-center gap-[1rem]" key={index} style={{ minWidth: '180px' }}>
                            <img src={item.img} alt="benefits" className="w-15 h-20 mb-4" />
                            <p className="mb-2 text-white text-center" style={{ maxWidth: '150px' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white mt-16 mb-8 w-[55rem] h-[27rem] rounded-xl shadow-md flex flex-col">
                <p className="text-center font-bold text-2xl mt-10 mb-[2rem]">Agenda</p>
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
            </div>
        </div>
    );
};

export default Middle;
