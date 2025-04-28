import React from "react";
import Footer from "./Footer";
import { FaCamera } from "react-icons/fa";

const ProfileView = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-between bg-gray-50 overflow-hidden">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-[350px] bg-[#f7f8f9] border border-gray-300 h-[600px] flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-white">
              <h2 className="text-lg font-semibold">Account Settings</h2>
            </div>

            <div className="p-6 flex-1">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src="https://photosnow.org/wp-content/uploads/2024/04/cute-girl-pic_11.jpg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
                    <FaCamera className="text-white text-xs" />
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold">Marry Doe</h3>
                  <p className="text-gray-500 text-sm">Marry@Gmail.Com</p>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-700">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
              </div>
            </div>

            <div className="border-t border-dashed border-gray-300 p-4"></div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProfileView;
