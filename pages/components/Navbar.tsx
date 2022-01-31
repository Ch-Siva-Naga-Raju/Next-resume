import React,{useEffect} from 'react';
import Link from 'next/link';

function Navbar() {
  return <div className='flex'>
      <Link href='/about'><a className='p-3 hover:font-bold focus:text-red-400 focus:font-bold'>About</a></Link>
      <Link href='/resume'><a className='p-3 hover:font-bold focus:text-red-400 focus:font-bold'>Resume</a></Link>
      {/* <Link href='/projects'><a className='p-3 hover:font-bold focus:text-red-400 focus:font-bold'>Projects</a></Link> */}
  </div>;
}

export default Navbar;
