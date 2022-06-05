import "./chooseUi.css";
import { Link } from "react-router-dom";

const ChooseUi = () => {
  return (
    <div className='choose_container'>
      <div className='choose_wrapper'>
        <div className='choose_piece'>
          <div className='choose_item_top'>Health Information</div>
          <ul className='choose_items'>
            <li className='choose_item'>
              <Link to='/covid'>About Covid-19</Link>
            </li>
            <li className='choose_item'>
              <Link to='/getahappylife'>How to live everyday</Link>
            </li>
            <li className='choose_item'>
              <Link to='/sesonaldisease'>Sesonal Diseases</Link>
            </li>
            <li className='choose_item'>
              <Link to='/healthylife'>Care About Health</Link>
            </li>
          </ul>
        </div>

        <div className='choose_piece'>
          <div className='choose_item_top'>Doctors</div>
          <ul className='choose_items'>
            <li className='choose_item'>
              <Link to='/doctors'>Eye Doctors</Link>
            </li>
            <li className='choose_item'>
              <Link to='/doctors'>Kid Doctors</Link>
            </li>
            <li className='choose_item'>
              <Link to='/doctors'>Bone Doctors</Link>
            </li>
            <li className='choose_item'>
              <Link to='/doctors'>General Doctors</Link>
            </li>
          </ul>
        </div>

        <div className='choose_piece'>
          <div className='choose_item_top'>Research</div>
          <ul className='choose_items'>
            <li className='choose_item'>Vicine for Covid</li>
            <li className='choose_item'>Replacement of Body</li>
            <li className='choose_item'>Usage of Medicine</li>
            <li className='choose_item'>Powerful Health Machine</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseUi;
