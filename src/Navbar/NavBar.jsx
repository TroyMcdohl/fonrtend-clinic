import "./navBar.css";
import SearchIcon from "@mui/icons-material/Search";
import ChooseUi from "../shared/Choose/ChooseUi";
import UserRight from "../shared/UserCan/UserRight";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav_container'>
      <div className='nav_wrapper'>
        <div className='nav_left'>
          <div className='nav_left_logo'>
            <Link to='/'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN2HnEJepPoDOZVNkOcQ87b2dwRsSfo_BgQ&usqp=CAU'
                alt=''
                className='nav_left_img'
              />
            </Link>
          </div>
        </div>

        <div className='nav_center'>
          <h3 className='nav_title'>C-Clinic For You</h3>
          <p className='nav_title_des'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus in quae, ex animi suscipit repellat eaque soluta eos
            adipisci fugiat at c
          </p>
        </div>

        <div className='nav_right'>
          <div className='nav_search_box'>
            <input
              type='text'
              className='nav_search'
              placeholder='Search Doctors and Medical Check'
            />
            <div className='nav_right_logo'>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
