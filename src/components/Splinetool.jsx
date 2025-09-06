import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';

const Splinetool = () => {
    const splineScene = useMemo(() => (
        <Spline scene="https://prod.spline.design/dNUJPcFe2cSWd3U1/scene.splinecode" />
    ), []); 

    return (
        <>
            {splineScene}
        </>
    );
};

export default Splinetool;
