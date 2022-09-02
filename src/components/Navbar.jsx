import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
const Navbar = () => {

      const [toggleMenu, setToggleMenu] = useState(false)
      const toggleNav = () => {
            setToggleMenu((e) => !e)
      }

      return (
            <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>

                  <h2 className="h2 m-2">Trevland</h2>
                  <ul className='ul '>
                        <li>Home</li>
                        <li>Location</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Contact</li>
                        <button className='btn btn-danger p-2'>Booking now</button>

                  </ul>
                  {/* <button type='button' className='btn btn-danger mx-auto p-2 bg-danger text-white'>Booking now</button> */}

                  <div className="toggle-icon" onClick={toggleNav}>
                        {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
                  </div>
            </div >
      );
};

export default Navbar;