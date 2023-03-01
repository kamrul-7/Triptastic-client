import React from 'react';
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../Assets/97930-loading (1).json"
const Loading = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div>
            <div className="h-20 bg-black"></div>
            <div className='h-56 w-96 mt-8 mx-auto mb-44'>
                <>{View}</>
            </div>
        </div>
    );
};

export default Loading;