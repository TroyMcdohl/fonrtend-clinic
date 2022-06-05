import "./clinicPros.css";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import BloodtypeOutlinedIcon from "@mui/icons-material/BloodtypeOutlined";
import HealingOutlinedIcon from "@mui/icons-material/HealingOutlined";

const ClinicPros = () => {
  return (
    <div className='c_pros_container'>
      <div className='c_pros_wrapper'>
        <div className='c_pros_card'>
          <div className='c_pros_icon'>
            <MedicalInformationOutlinedIcon style={{ fontSize: "45px" }} />
          </div>
          <h4 className='c_pros_title'>More Experience</h4>
          <p className='c_pros_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            saepe, maiores officiis asperiores incidunt neque velit
            consequuntur? Voluptatum repellendus quod nobis minima perspiciatis
            officia quam illo minus facilis laudantium.
          </p>
        </div>
        <div className='c_pros_card'>
          <div className='c_pros_icon'>
            <EvStationOutlinedIcon style={{ fontSize: "45px" }} />
          </div>
          <h4 className='c_pros_title'>The Right Answers</h4>
          <p className='c_pros_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            saepe, maiores officiis asperiores incidunt neque velit
            consequuntur? Voluptatum repellendus quod nobis minima perspiciatis
            officia quam illo minus facilis laudantium.
          </p>
        </div>
        <div className='c_pros_card'>
          <div className='c_pros_icon'>
            <VolunteerActivismOutlinedIcon style={{ fontSize: "45px" }} />
          </div>
          <h4 className='c_pros_title'>You Come First</h4>
          <p className='c_pros_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            saepe, maiores officiis asperiores incidunt neque velit
            consequuntur? Voluptatum repellendus quod nobis minima perspiciatis
            officia quam illo minus facilis laudantium.
          </p>
        </div>
        <div className='c_pros_card'>
          <div className='c_pros_icon'>
            <EmojiPeopleOutlinedIcon style={{ fontSize: "45px" }} />
          </div>
          <h4 className='c_pros_title'>Innovation with impact</h4>
          <p className='c_pros_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            saepe, maiores officiis asperiores incidunt neque velit
            consequuntur? Voluptatum repellendus quod nobis minima perspiciatis
            officia quam illo minus facilis laudantium.
          </p>
        </div>
        <div className='c_pros_card'>
          <div className='c_pros_icon'>
            <BloodtypeOutlinedIcon style={{ fontSize: "45px" }} />
          </div>
          <h4 className='c_pros_title'>Medical Care</h4>
          <p className='c_pros_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            saepe, maiores officiis asperiores incidunt neque velit
            consequuntur? Voluptatum repellendus quod nobis minima perspiciatis
            officia quam illo minus facilis laudantium.
          </p>
        </div>
        <div className='c_pros_card'>
          <div className='c_pros_icon'>
            <HealingOutlinedIcon style={{ fontSize: "45px" }} />
          </div>
          <h4 className='c_pros_title'>Heal Your Health</h4>
          <p className='c_pros_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            saepe, maiores officiis asperiores incidunt neque velit
            consequuntur? Voluptatum repellendus quod nobis minima perspiciatis
            officia quam illo minus facilis laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicPros;
