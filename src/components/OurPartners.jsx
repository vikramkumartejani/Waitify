import React from 'react'
import ThreePortals from "../assets/3-portals.svg"
import _ThreePortals from "../assets/_3-portals.svg"
import Europa from "../assets/europa.svg"
import _Europa from "../assets/_europa.svg"
import Galileo from "../assets/galileo.svg"
import _Galileo from "../assets/_galileo.svg"
import Spherule from "../assets/spherule.svg"
import _Spherule from "../assets/_spherule.svg"
import Catalog from "../assets/catalog.svg"
import _Catalog from "../assets/_catalog.svg"
import Hexsmith from "../assets/hexsmith.svg"
import _Hexsmith from "../assets/_hexsmith.svg"
import Lightbox from "../assets/lightbox.svg"
import _Lightbox from "../assets/_lightbox.svg"
import Layers from "../assets/layers.svg"
import _Layers from "../assets/_layers.svg"
import Quixotic from "../assets/quixotic.svg"
import _Quixotic from "../assets/_quixotic.svg"
import ContrastAI from "../assets/contrastAI.svg"
import SectionTitle from './SectionTitle'

const partnersData = [
    {
        id: 1,
        icon: ThreePortals,
        mobileicon: _ThreePortals,
    },
    {
        id: 2,
        icon: Europa,
        mobileicon: _Europa,
    },
    {
        id: 3,
        icon: Galileo,
        mobileicon: _Galileo,
    },
    {
        id: 4,
        icon: Spherule,
        mobileicon: _Spherule,
    },
    {
        id: 5,
        icon: Catalog,
        mobileicon: _Catalog,
    },
    {
        id: 6,
        icon: Hexsmith,
        mobileicon: _Hexsmith,
    },
    {
        id: 7,
        icon: Lightbox,
        mobileicon: _Lightbox,
    },
    {
        id: 8,
        icon: Layers,
        mobileicon: _Layers,
    },
    {
        id: 9,
        icon: Quixotic,
        mobileicon: _Quixotic,
    },
    {
        id: 10,
        icon: ContrastAI,
        mobileicon: null,
    },
];

const OurPartners = () => {
    const OurPartnersTitle = "Our partners";
    return (
        <section className="py-[70px] md:py-[100px] px-5">
            <div className="flex flex-col justify-center items-center gap-3 mb-10">
                <SectionTitle text={OurPartnersTitle} />

                <h1 className="font-semibold text-2xl md:text-[40px] mt-3 text-center text-[#1c1c1c] dark:text-white">
                    Built for Innovators, <span className="text-[#007dfc]">Trusted by</span> Leaders
                </h1>

                <p className="text-sm md:text-lg text-[#4d4d4d] text-center max-w-[650px] w-full mx-auto dark:text-white/90">
                    From startups to enterprises, teams around the world rely on Nexora to get things done seamlessly.
                </p>
            </div>

            <div className='max-w-[390px] md:max-w-[1100px] w-full mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {partnersData.map((partner) => (
                    <div key={partner.id} className={`partners-box rounded-[15px] md:rounded-[25px] p-[15px] md:p-5 flex items-center justify-center ${!partner.mobileicon ? 'hidden md:flex' : ''}`}>
                        <div>
                            <img
                                src={partner.icon}
                                alt="Icon"
                                loading='lazy'
                                className='h-[38px] w-[90px] lg:w-[120px] hidden md:flex'
                            />
                            <img
                                src={partner.mobileicon}
                                alt="Icon"
                                loading='lazy'
                                className='h-6 w-5 flex md:hidden'
                            />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default OurPartners