import logo from '../assets/Group 12.png'; // Adjust the path as necessary

const Header = () => {
  return (
    <div className="w-full bg-red-500 flex justify-center items-center py-4 md:py-6 lg:py-8">
      <img
        src={logo}
        alt="My Blindle Logo"
        className="py-4 w-36 sm:w-44 md:w-52 lg:w-60 object-contain"
      />
    </div>
  );
};

export default Header;
