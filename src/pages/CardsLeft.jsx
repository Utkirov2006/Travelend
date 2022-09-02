import React from 'react';

const CardsLeft = (props) => {
      return (
            <div className='cards-left'>

                  <img style={{ width: '100%' }} src={props.img} />

                  <h4 className='py-2'> {props.title}</h4>
                  <li className='list-unstyled py-1'><i class="bi bi-geo-alt text-danger"></i> {props.location}</li>
                  <li className='list-unstyled py-1'>{props.open}</li>
                  <li className='list-unstyled py-1'>{props.price}</li>
            </div>
      );
};

export default CardsLeft;