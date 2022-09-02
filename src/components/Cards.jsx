import React from 'react';
import CardsLeft from '../pages/CardsLeft';

import image1 from '../img/cardsleft1.png';
import image2 from '../img/cardsleft2.png';
import image3 from '../img/cardsleft3.png';
import image4 from '../img/cardsleft4.png';
import image5 from '../img/cardsleft5.png';

const Cards = () => {
      return (
            <div className='cards'>
                  <h1 className="pt-5 text-center">Special Offers</h1>
                  <ol className='text-center py-5 text-secondary'> With the New Year comes a refreshing sense of wanderlust, a longing in our souls <br /> to escape to warmer climates, </ol>

                  <div className="cards-right d-xl-flex d-block  justify-content-between">

                        <CardsLeft img={image1} title="Statue of Liberty." location="New York" open="4 Day 5 Nights" price="$450/person"/>
                        <CardsLeft img={image2} title="The Great Wall " location="China " open="7 Day 8 Nights" price="$850/person"/>
                        <CardsLeft img={image3} title="Dizin" location="Iran" open="5 Day 6 Nights" price="$550/person"/>
                        <CardsLeft img={image4} title="Sajek Valley" location="Bangladesh" open="3 Day 4 Nights" price="$400/person"/>
                        <CardsLeft img={image5} title="Osaka Castle" location="Japan" open="4 Day 5 Nights" price="$700/person"/>

                  </div>



            </div>
      );
};

export default Cards;