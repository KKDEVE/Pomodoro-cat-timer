import React from 'react';
import { useState } from 'react';

const Header = ({ openTodo, openStore }) => {
    // const backgroundImage1 = 'public/1.webp';
    // const backgroundImage2 = 'public/2.gif';
    // const [bgImg, setBgImg] = useState(backgroundImage1)

    // const handleChangeBg = () => {
    //     if (bgImg === backgroundImage1) {
    //         setBgImg(backgroundImage2);
    //     } else {
    //         setBgImg(backgroundImage1);
    //     }
    // }


    return (
        <>
            {/* className='header' onClick={() => handleChangeBg()} style={{ backgroundImage: `url(${bgImg})` }} */}
            <div>

                <div >header</div>
                <button onClick={openTodo}>Open Todo</button>
                <button onClick={openStore}>Open Store</button>
            </div>

        </>

    )
}

export default Header