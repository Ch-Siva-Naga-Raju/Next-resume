import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube,AiOutlineCloudDownload} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go';

function Sidebar() {
  return <div>
      <img className='w-32 h-32 rounded-full mx-auto' src='https://media-exp1.licdn.com/dms/image/C5103AQGwTuLEdT11Pg/profile-displayphoto-shrink_200_200/0/1565245492955?e=1648080000&v=beta&t=VNCg5DtJfkdT69abPjuIIGi5klUZ3PQNAibbaBcL8nM' alt='Siva'/>
      <p className='text-2xl font-medium mt-5 font-kaushan text-green'>Siva Naga Raju</p>
      <p className='mt-5 bg-gray-200 rounded-full p-2'><span className='font-kaushan text-green'>Fullstack</span> Web Developer</p>
      <a href='*' className='flex items-center justify-evenly mt-5 mx-auto bg-gray-200 rounded-full' download='name'><span className='p-2'>Download Resume</span><AiOutlineCloudDownload className='w-8 h-8'/></a>
      {/* Social Icons - Linkedin, Youtube, Github, Twitter* */}
      <div className='flex items-center mt-5 justify-evenly text-green'>
          <a href='*'><AiFillGithub className='w-10 h-10'/></a>
          <a href='*'><AiFillLinkedin className='w-10 h-10'/></a>
          <a href='*'><AiFillTwitterCircle className='w-10 h-10'/></a>
          <a href='*'><AiFillYoutube className='w-10 h-10'/></a>
        </div>
      {/* Address and Phone number* */}
      <div className='bg-gray-200' style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className='flex items-center justify-center mt-5'><span><GoLocation/></span>Andhra, India</div>
        <div className='flex justify-center mt-5'>siva.naga.raju.sw@gmail.com</div>
        <div className='mt-5'>8368983742</div>
      </div>
      {/* Email me button* */}
      <button className='mt-5 bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full text-white'
      onClick={()=>{window.open('mailto: siva.naga.raju.sw@gmail.com')}}>Email Me</button>
      </div>;
}

export default Sidebar;
