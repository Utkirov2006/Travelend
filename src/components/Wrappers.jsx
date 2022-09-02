import React from 'react';

import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';

const Wrappers = () => {
      return (
            <div className='wrappers'>
                  <h1 className="pt-5 text-center">From Blog & News</h1>
                  <ol className='text-center py-5 text-secondary'> Welcome to Community Conversations, a new interview series featuring <br /> Intrepid travellers, creatives and activists in our community. </ol>

                  <div className="wrappers_left d-xl-flex d-block justify-content-evenly">
                        <div className="wrappers_left_main">
                             <div className="wrap">
                             <img src={avatar1} className="py-4 wrappers_img" />
                              <h2 className="py-2">Banff National Park</h2>

                              <li className="list-unstyled py-2">Banff National Park lies in the heart of the majestic Rocky <br /> Mountains in the province of Alberta, and showcases <br /> some of Canada's most beautiful scenery. <br /> Turquoise-colored lakes, snow-capped peaks, and glaciers <br /> are all easily accessible </li>

                              <li className="list-unstyled py-2">@thomasalva_adison</li>
                             </div>
                        </div>


                        <div className="wrappers_left_main2">
                              <div className="wrap my-4 d-xl-flex d-block">
                                    <img src={avatar2} className="wrappers_img" />
                                    <ul>
                                          <h3 className='py-4'>The Hiroshima Peace!</h3>
                                          <li className='list-unstyled'>It was formally opened to <br /> the public in August that year.</li>
                                          <li className='list-unstyled py-4'>@shova_bd88</li>
                                    </ul>
                              </div>
                              <div className="wrap my-4 d-xl-flex d-block">
                                    <img src={avatar3} className="wrappers_img" />
                                    <ul>
                                          <h3 className='py-4'>The Hiroshima Peace!</h3>
                                          <li className='list-unstyled'>It was formally opened to <br /> the public in August that year.</li>
                                          <li className='list-unstyled py-4'>@shova_bd88</li>
                                    </ul>

                              </div>
                              <div className="wrap my-4 d-xl-flex d-block">
                                    <img src={avatar4} className="wrappers_img" />
                                    <ul>
                                          <h3 className='py-4'>The Hiroshima Peace!</h3>
                                          <li className='list-unstyled'>It was formally opened to <br /> the public in August that year.</li>
                                          <li className='list-unstyled py-4'>@shova_bd88</li>
                                    </ul>

                              </div>
                        </div>
                  </div>


            </div>
      );
};

export default Wrappers;