import React, { useState, useEffect } from "react";
import { FaCloud, FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { usePage } from "./hook/PageContext";
const Footer = () => {
  const navigate = useNavigate();
  const { page, setPage } = usePage();
  const totalPage = 4;
  const goToHomePage = () => {
    setPage(1);
  };

  const handleLeft = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleRight = () => {
    if (page < totalPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (page === 1) {
      navigate("/", { replace: true });
    } else if (page === 2) {
      navigate("/login", { replace: true });
    } else if (page === 3) {
      navigate("/register", { replace: true });
    } else if (page === 4) {
      navigate("/profile", { replace: true });
    }
  }, [page, navigate]);

  const currentDateTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-3 bg-gray-50 text-gray-500 text-sm border-t mt-4">
      <a
        href="https://helpx.adobe.com/support/xd.html?sdid=YXPZG4ZY&mv=other"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gray-700"
      >
        <span>Made with Adobe XD</span>
        <FaCloud size={16} />
      </a>

      <div className="flex items-center gap-3">
        <FaHome
          size={16}
          onClick={goToHomePage}
          className="cursor-pointer hover:text-gray-700"
        />
        <FaChevronLeft
          size={14}
          onClick={handleLeft}
          className="cursor-pointer hover:text-gray-700"
        />
        <span className="whitespace-nowrap">
          {page} of {totalPage}
        </span>
        <FaChevronRight
          size={14}
          onClick={handleRight}
          className="cursor-pointer hover:text-gray-700"
        />
      </div>

      <div className="text-xs text-center md:text-right w-full md:w-auto">
        Link updated: {currentDateTime}
      </div>
    </div>
  );
};

export default Footer;
