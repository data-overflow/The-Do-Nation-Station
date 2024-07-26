import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue to-blue-skyblue">
      <div className="relative p-8 bg-black/15 rounded-3xl shadow-lg w-full max-w-md">
        <div className="absolute inset-0 bg-noise bg-primary rounded-lg" />
        <form className="relative space-y-6 ">
        <div className="flex items-center space-x-4">
            <label htmlFor="username" className="flex items-center justify-center w-8 h-8 bg-gray-200 cursor-pointer rounded-full">
              <FaRegUser className="text-gray-600" />
            </label>
            <input id="username" className="flex-1 p-4 border-none text-gray-600 text-lg placeholder-gray-400 rounded-lg outline-none transition-transform duration-150 transform focus:scale-105" placeholder="Username" type="text" />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="email" className="flex items-center justify-center w-8 h-8 bg-gray-200 cursor-pointer rounded-full">
              <MdMailOutline className="text-gray-600" />
            </label>
            <input id="email" className="flex-1 p-4 border-none text-gray-600 text-lg placeholder-gray-400 rounded-lg outline-none transition-transform duration-150 transform focus:scale-105" placeholder="Email" type="text" />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="password" className="flex items-center justify-center w-8 h-8 bg-gray-200 cursor-pointer rounded-full">
              <MdLockOutline className="text-gray-600" />
            </label>
            <input id="password" className="flex-1 p-4 border-none text-gray-600 text-lg placeholder-gray-400 rounded-lg outline-none transition-transform duration-150 transform focus:scale-105" placeholder="Password" type="password" />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="userType" className="flex items-center justify-center w-8 h-8 bg-gray-200 cursor-pointer rounded-full">
              <IoBagOutline className="text-gray-600" />
            </label>
            <select id="userType" className="flex-1 p-4 border-none text-gray-400 text-lg placeholder-gray-400 rounded-lg outline-none transition-transform duration-150 transform focus:scale-105" placeholder="User Type">
              <option value="" disabled selected className='text-gray-400 text-lg'>Select Type</option>
              <option value="donor" className='text-gray-400 text-lg'>Donor</option>
              <option value="organization" className='text-gray-400 text-lg'>Organization</option>
            </select>
          </div>
          <CustomButton title="Sign Up"/>
        </form>
        <div className="flex justify-center items-center text-xs mt-4">
          <span className="text-primary">Not new?</span>
          <a href="#" className="text-blue-300 hover:font-bold focus:font-bold ml-1">Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
