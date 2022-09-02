import React from 'react';
import BoxLeft from '../pages/BoxLeft';
import img1 from "../img/boxleft1.png";
import img2 from "../img/boxleft2.png";
import img3 from "../img/boxleft3.png";

const Boxs = () => {
      return (
            <div className='boxs'>
                  <h1 className="pt-5 pb-3 text-center">Popular Location</h1>
                  <ol className='text-center py-3 text-secondary'>For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and <br /> voyagers— from island hopping in the</ol>

                  <div className="box-right d-xl-flex d-grid justify-content-evenly">
                        <BoxLeft img={img1} title="Istanbul, Turkey" about="Istanbul is a major city in Turkey that straddles Europe. " />
                        <BoxLeft img={img3} title="Kuala Lumpur, Malaysia" about="A 272-step long trek leads you to this century." />
                        <BoxLeft img={img2} title="Seoul, South Korea" about="South Korea officially the Republic of Korea is a country in East Asia." />

                  </div>

            </div>
      );
};

export default Boxs;