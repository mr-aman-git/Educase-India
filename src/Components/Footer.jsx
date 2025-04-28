import React, { useState, useEffect } from 'react';
import { FaCloud, FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
    const [page , setPage]= useState(1)
    const totalPage = 4;
    const goToHomePage = () => {
        navigate('/');
      };
    const goToLoginPage = () => {
        navigate('/login');
      };
    
      const handleLeft = () => {
        if (page < totalPage) {
            setPage(prevPage => prevPage + 1);
            console.log("page left: ", page);
            
          }
        
      };
    
      const handleRight = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
            console.log("page right: ", page);
          }
      };

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-gray-50 text-gray-500 text-sm border-t mt-4">

      <div className="flex items-center gap-2">
        <span>Made with Adobe XD</span>
        <FaCloud size={16} />
      </div>

      
      <div className="flex items-center gap-2">
        <FaHome size={16} onClick={goToHomePage}  className='cursor-pointer hover:text-gray-700' />
        <FaChevronLeft size={14} onClick={handleLeft}/>
        <span> {page} of {totalPage}</span>

        <FaChevronRight size={14} onClick={handleRight} />
      </div>

      
      <div className="text-right text-xs">
        Link updated: May 9, 2023, 8:43 AM
      </div>
    </div>
  );
};

export default Footer;
