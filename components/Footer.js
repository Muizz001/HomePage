
export default function Footer() {
    return (
      <footer className="bg-[#1a1a1a] text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
          <h1 className='text-white'>SET<span className='text-[#DE3163]'>MySpace</span></h1>
          <p className="mt-2 text-sm">
              A Unit Of UrbanBarrow Pvt. Ltd. <br />
              Whitefield, Bangalore <br />
              Karnataka, India 560066
            </p>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col items-start md:items-end text-sm space-y-2 md:space-y-0 md:space-x-6 md:flex-row">
            <a href="#" className="hover:text-white">
              Help & Support
            </a>
            <span className="hidden md:inline text-pink-500">|</span>
  
            <a href="#" className="hover:text-white">
              Signup As Partner
            </a>
            <span className="hidden md:inline text-pink-500">|</span>
  
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <span className="hidden md:inline text-pink-500">|</span>
  
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
  
        {/* Bottom Text */}
        <div className="mt-6 text-center text-xs text-gray-500">
          All Rights reserved 2022 setmyspace
        </div>
      </footer>
    );
  }
  