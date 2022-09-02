import React from 'react';

const BoxLeft = (props) => {
      return (
            <div className="box-left">
                  <img className='box-img' src={props.img} />
                  <h4 className='text-center p-3'>{props.title}</h4>
                  <ol style={{fontSize:"19px"}} className='text-center'> {props.about}</ol>
            </div>
      );
};

export default BoxLeft;