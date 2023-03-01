import React from 'react';
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../Assets/82445-travelers-walking-using-travelrmap-application.json";


const ExtraSection = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div>
            <h1 className='lg:hidden mt-8 text-center'>Plan your dream trip today</h1>
            <section className="hero">

                <div className="container">
                    <div className="hero-content">
                        <>{View}</>
                        <div className='mb-8'>
                            <div className='mb-8'>
                                <h1 className='text-center mb-8 hidden lg:block mt-8'>Plan your dream trip today</h1>
                                <p className='ml-4 p-4'>Find the best deals on flights, hotels, and rental cars with our easy-to-use booking platform. Whether you're looking for a romantic getaway, a family vacation, or a solo adventure, we've got you covered.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraSection;