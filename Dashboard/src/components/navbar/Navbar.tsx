import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="BHlogo_horizontal_primary@2x 1.png" />
        {"|"}
        <img src="OMS.png" />
      </div>
      <div className="icons">
        <img src="Search.svg" alt="" className="icon" />
        <img src="MoreVertFilled.png" alt="" />
        <div className="user">
          <img
            src="Avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
