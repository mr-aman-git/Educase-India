import { FaCloud, FaHome, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-gray-50 text-gray-500 text-sm border-t">

      <div className="flex items-center gap-2">
        <span>Made with Adobe XD</span>
        <FaCloud size={16} />
      </div>

      
      <div className="flex items-center gap-2">
        <FaHome size={16} />
        <FaChevronLeft size={14} />
        <span>1 of 4</span>
        <FaChevronRight size={14} />
      </div>

      
      <div className="text-right text-xs">
        Link updated: May 9, 2023, 8:43 AM
      </div>
    </div>
  );
};

export default Footer;
