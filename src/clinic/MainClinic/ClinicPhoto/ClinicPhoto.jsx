import "./clinicPhoto.css";

const ClinicPhoto = () => {
  return (
    <>
      <div className='clinicPhoto_container'>
        <img
          src='https://www.mayoclinic.org//-/media/kcms/gbs/patient-consumer/images/2019/09/26/22/32/home_hero_desktop.jpg'
          alt=''
          className='c_photo'
        />
        <div className='c_photo_caption'>
          <h3 className='c_photo_title'>For Healthy Life</h3>
          <p className='c_photo_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            delectus laborum totam inventore perferendis molestiae modi est
          </p>
        </div>
      </div>

      <div className='c_adver_photo_container'>
        <img
          src='https://www.mayoclinic.org//-/media/kcms/gbs/patient-consumer/images/2019/09/26/22/32/home_hero_desktop.jpg'
          alt=''
          className='c_adver_photo'
        />
        <div className='c_adver_photo_caption'>
          <h3 className='c_adver_photo_title'>For Healthy Life</h3>
          <p className='c_adver_photo_des'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi
            possimus aut at eos minima numquam quia, sint vitae voluptas, optio
            nobis nulla aspernatur ab commodi impedit! Illo, laborum corrupti!
          </p>
          <button className='c_adver_btn'>Contact Now</button>
        </div>
      </div>
    </>
  );
};

export default ClinicPhoto;
