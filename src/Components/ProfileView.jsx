import React, {useState} from "react";
import { FaCamera } from "react-icons/fa";
import dp from "../assets/dp-girl.png";
import { usePage } from "./hook/PageContext";
import { useEffect } from "react";

const ProfileView = () => {
  const { setEmail, email, name, setName } = usePage();
  const [image, setImage] = useState(localStorage.getItem("profileImage") || "");

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    if (name) setName(name);
    if (email) setEmail(email);
  }, []);


const handleImageUpload = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    const base64 = reader.result;
    setImage(base64);
    localStorage.setItem("profileImage", base64);
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};


  return (
    <>
      <div className="h-[90vh] flex flex-col justify-between bg-gray-50 overflow-hidden">
        <div className="flex-grow flex items-center justify-center">
          <div className="w-[350px] bg-[#f7f8f9] border border-gray-300 h-[600px] flex flex-col">
            <div className="p-6 border-b border-gray-200 bg-white">
              <h2 className="text-lg font-semibold">Account Settings</h2>
            </div>

            <div className="p-6 flex-1">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={ image ||dp}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <label className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full cursor-pointer">
                    <FaCamera className="text-white text-xs" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div>
                  <h3 className="font-semibold">{name || "Marry Doe"}</h3>
                  <p className="text-gray-500 text-sm">
                    {email || "Marry@Gmail.Com"}
                  </p>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-700">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
              </div>
            </div>

            <div className="border-t border-dashed border-gray-300 p-4 mb-[330px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
