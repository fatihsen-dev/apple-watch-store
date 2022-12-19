import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter, AiFillApple } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import hamburger from "./assets/icons/hamburger.svg";
import bag from "./assets/icons/bag.svg";
import search from "./assets/icons/search.svg";
import blackWatch from "./assets/watch/black.png";
import blueWatch from "./assets/watch/blue.png";
import orangeWatch from "./assets/watch/orange.png";
import turquoiseWatch from "./assets/watch/turquoise.png";
import { useState } from "react";

export default function App() {
   const [active, setActive] = useState(0);
   const [rotate, setRotate] = useState(0);
   const [color, setColor] = useState([
      { c1: "#778190", c2: "#929497" },
      { c1: "#B6CCDA", c2: "#C8DCE5" },
      { c1: "#58D7C4", c2: "#90C3BC" },
      { c1: "#FFAA9B", c2: "#F9CAC2" },
   ]);

   return (
      <div className='grid place-items-center h-full bg-[#E5E5E5]'>
         <div className='w-[1212px] h-[740px] mx-auto bg-light flex flex-row rounded overflow-hidden'>
            <div className='flex flex-col justify-between bg-light py-7 pl-5 pr-3 items-center'>
               <button>
                  <img className='w-10' src={hamburger} alt='Not found' />
               </button>
               <ul className='text-2xl flex text-bluev1 flex-col gap-3'>
                  <li>
                     <a href='#'>
                        <TiSocialFacebook />
                     </a>
                  </li>
                  <li>
                     <a href='#'>
                        <AiOutlineTwitter />
                     </a>
                  </li>
                  <li>
                     <a href='#'>
                        <TiSocialLinkedin />
                     </a>
                  </li>
               </ul>
            </div>
            <div
               style={{
                  "--color-1": color[active].c1,
                  "--color-2": color[active].c2,
               }}
               className='linear-gradient flex-1 rounded-l-2xl py-8 px-10 text-light flex flex-col gap-10'>
               <div className='flex items-center justify-between pl-4 z-10'>
                  <AiFillApple className='text-4xl' />
                  <ul className='flex items-center gap-2'>
                     <label style={{ color: color[active].c1 }}>
                        <input className='peer hidden' type='radio' name='navBtn' />
                        <span className='nav-btn'>Mac</span>
                     </label>
                     <label style={{ color: color[active].c1 }}>
                        <input className='peer hidden' type='radio' name='navBtn' />
                        <span className='nav-btn'>İphone</span>
                     </label>
                     <label style={{ color: color[active].c1 }}>
                        <input className='peer hidden' type='radio' name='navBtn' />
                        <span className='nav-btn'>İPad</span>
                     </label>
                     <label style={{ color: color[active].c1 }}>
                        <input
                           className='peer hidden'
                           defaultChecked
                           type='radio'
                           name='navBtn'
                        />
                        <span className='nav-btn'>İWatch</span>
                     </label>
                     <label className='text-orangev1'>
                        <input className='peer hidden' type='radio' name='navBtn' />
                        <span className='nav-btn'>Support</span>
                     </label>
                  </ul>
                  <div className='flex items-center'>
                     <button className='px-4'>
                        <img className='w-8' src={search} alt='Not found' />
                     </button>
                     <span className='block h-6 w-[1px] bg-light'></span>
                     <button className='px-4'>
                        <img className='w-8' src={bag} alt='Not found' />
                     </button>
                  </div>
               </div>
               <div className='flex-1 flex relative'>
                  <div className='text-5xl flex-1 my-auto flex flex-col gap-3'>
                     <span className='font-medium'>The Perfect Moment </span>
                     <span className='font-light'>Between Past And </span>
                     <span className='font-light'>Future.</span>
                  </div>
                  <div className='text-3xl flex-1 absolute h-[740px] -right-10 -top-[108px] w-[800px]'>
                     <div
                        style={{ transform: `rotate(${-rotate}deg)` }}
                        className='w-[900px] h-[900px] transition-transform duration-500 -top-[100px] -right-[600px] absolute rounded-full grid place-items-center'>
                        <div
                           style={{ transform: `rotate(${-rotate + 180}deg)` }}
                           className='w-80 h-80 absolute transition-transform duration-300 -top-40'>
                           <img draggable='false' src={blueWatch} alt='Not found' />
                        </div>
                        <div
                           style={{ transform: `rotate(${-rotate}deg)` }}
                           className='w-80 h-80 absolute transition-transform duration-300 -right-40'>
                           <img draggable='false' src={turquoiseWatch} alt='Not found' />
                        </div>
                        <div
                           style={{ transform: `rotate(${-rotate + 180}deg)` }}
                           className='w-80 h-80 absolute transition-transform duration-300 -bottom-40'>
                           <img draggable='false' src={orangeWatch} alt='Not found' />
                        </div>
                        <div
                           style={{ transform: `rotate(${-rotate}deg)` }}
                           className='w-80 h-80 absolute transition-transform duration-300 -left-40'>
                           <img draggable='false' src={blackWatch} alt='Not found' />
                        </div>
                     </div>
                  </div>
                  <div className='flex flex-col my-auto gap-0.5 translate-y-7'>
                     <button
                        style={{
                           backgroundColor: color[0].c1,
                           transform: `scale(${active === 0 ? 1.3 : 1})`,
                        }}
                        className='w-4 h-4 transition-transform rounded-full border-[2px]'></button>
                     <span className='doted-border'></span>
                     <button
                        style={{
                           backgroundColor: color[1].c1,
                           transform: `scale(${active === 1 ? 1.3 : 1})`,
                        }}
                        className='w-4 h-4 transition-transform rounded-full border-[2px]'></button>
                     <span className='doted-border'></span>
                     <button
                        style={{
                           backgroundColor: color[2].c1,
                           transform: `scale(${active === 2 ? 1.3 : 1})`,
                        }}
                        className='w-4 h-4 transition-transform rounded-full border-[2px]'></button>
                     <span className='doted-border'></span>
                     <button
                        style={{
                           backgroundColor: color[3].c1,
                           transform: `scale(${active === 3 ? 1.3 : 1})`,
                        }}
                        className='w-4 h-4 transition-transform rounded-full border-[2px]'></button>
                  </div>
               </div>
               <div>
                  <button className='hover:bg-light transition-colors hover:text-orangev1 flex px-8 py-2.5 rounded-full items-center gap-2 border-light border-[2px]'>
                     <span>Buy Now</span>
                     <MdShoppingCart />
                  </button>
               </div>
               <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                     <button
                        onClick={() => {
                           setActive(active !== 0 ? active - 1 : 3);
                           setRotate(rotate - 90);
                        }}
                        className='text-2xl'>
                        <BsArrowLeft />
                     </button>
                     <span className='w-4 grid place-items-center'>{active + 1}</span>
                     <button
                        onClick={() => {
                           setActive(active < 3 ? active + 1 : 0);
                           setRotate(rotate + 90);
                        }}
                        className='text-2xl'>
                        <BsArrowRight />
                     </button>
                  </div>
                  <div className='flex items-center gap-4 z-10'>
                     <button className='w-[100px] h-14 grid place-items-center rounded-md bg-blackv1'>
                        <img
                           className='w-14 -translate-y-5'
                           src={blackWatch}
                           alt='Not found'
                        />
                     </button>
                     <button className='w-[100px] h-14 grid place-items-center rounded-md bg-bluev1'>
                        <img
                           className='w-14 -translate-y-5'
                           src={blueWatch}
                           alt='Not found'
                        />
                     </button>
                     {/* <button className='w-[100px] h-14 grid place-items-center rounded-md bg-orangev1'>
                        <img
                           className='w-14 -translate-y-5'
                           src={orangeWatch}
                           alt='Not found'
                        />
                     </button> */}
                     <button className='w-[100px] h-14 grid place-items-center rounded-md bg-turquoisev1'>
                        <img
                           className='w-14 -translate-y-5'
                           src={turquoiseWatch}
                           alt='Not found'
                        />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
