import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { Braces, Code, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <div className='flex items-center'>
          <Link 
            to ='/' 
            className='flex items-center gap-2 pr-5' 
            onClick={()=>{
              setActive("");
              window.scrollTo(0, 0);
              }}
          >
            <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Prabesh
            </p>
          </Link>
          
          <ul className='list-none hidden md:flex flex-row gap-5'>
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >          
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <ul className='gap-5 hidden md:flex'>
          <li
            className='hover:text-white text-[16px] font-medium cursor-pointer text-secondary'
          >
            <a href="https://github.com/prabeshkunwar12" target='_blank' rel='noreferrer'><Github /></a>
          </li>
          <li
            className='hover:text-white text-[16px] font-medium cursor-pointer text-secondary'
          >
            <a href="https://www.linkedin.com/in/prabesh-kunwar/" target='_blank' rel='noreferrer'><Linkedin /></a>
          </li>
          <li
            className='hover:text-white text-[16px] font-medium cursor-pointer text-secondary'
          >
            <a href="https://leetcode.com/u/PrabAce/" target='_blank' rel='noreferrer'><Code /></a>
          </li>
          <li
            className='hover:text-white text-[16px] font-medium cursor-pointer text-secondary'
          >
            <a href="https://www.hackerrank.com/profile/prabeshkunwar12" target='_blank' rel='noreferrer'><Braces /></a>
          </li>
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className='w-[24px] h-[24px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >          
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <div className='flex text-secondary text-center gap-2'>
                <li
                  className='hover:text-white text-[16px] font-medium cursor-pointer'
                >
                  <a href="https://github.com/prabeshkunwar12" target='_blank' rel='noreferrer'><Github /></a>
                </li>
                <li
                  className='hover:text-white text-[16px] font-medium cursor-pointer'
                >
                  <a href="https://www.linkedin.com/in/prabesh-kunwar/" target='_blank' rel='noreferrer'><Linkedin /></a>
                </li>
                <li
                  className='hover:text-white text-[16px] font-medium cursor-pointer'
                >
                  <a href="https://leetcode.com/u/PrabAce/" target='_blank' rel='noreferrer'><Code /></a>
                </li>
                <li
                  className='hover:text-white text-[16px] font-medium cursor-pointer'
                >
                  <a href="https://www.hackerrank.com/profile/prabeshkunwar12" target='_blank' rel='noreferrer'><Braces /></a>
                </li>
              </div>
            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar