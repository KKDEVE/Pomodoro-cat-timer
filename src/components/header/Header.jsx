import React from 'react';
import { useState } from 'react';

const header = () => {
    const backgroundImage1 = 'public/1.webp';
    const backgroundImage2 = 'public/2.gif';
    const [bgImg, setBgImg] = useState(backgroundImage1)

    const handleChangeBg = () => {
        if (bgImg === backgroundImage1) {
            setBgImg(backgroundImage2);
        } else {
            setBgImg(backgroundImage1);
        }
    }


    return (
        <div className='header' onClick={() => handleChangeBg()} style={{ backgroundImage: `url(${bgImg})` }}>header</div>
    )
}

export default header