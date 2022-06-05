import NavBar from "../../../Navbar/NavBar";
import BotBar from "../../../shared/BotBar/BotBar";
import ChooseUi from "../../../shared/Choose/ChooseUi";
import "./healthyLife.css";

const HealthyLife = () => {
  return (
    <>
      <NavBar />
      <ChooseUi />

      <div className='healthy_container'>
        <div className='healthy_card'>
          <div className='healthy_left'>
            <h4 className='healthy_left_title'>
              Weight-loss and well-being support from C Clinic experts
            </h4>
            <p className='healthy_left_para'>
              The Mayo Clinic Healthy Living Program provides healthy lifestyle
              experiences that focus on physical activity, nutrition, and
              resiliency. Our goal? Add a wellness component to everyone's Mayo
              Clinic experience. We offer a variety of options to meet your
              interests, time, and budget, and, we’re open to everyone –
              patients, caregivers, visitors and the community.
            </p>
            <div className='healthy_left_btns'>
              <button className='healthy_left_btn'>Contact Us</button>
              <button className='healthy_left_btn'>See Location</button>
            </div>
          </div>
          <div className='healthy_right'>
            <img
              src='https://mccms.cws.net/content/healthyliving.mayoclinic.org/images/home/home_DAHLC-building.jpg'
              alt=''
              className='healthy_right_img'
            />
            <p className='healthy_right_des'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              officia, minima autem veritatis est obcaecati quo, sed suscipit
              aperiam tempora illum perferendis expedita consequatur
            </p>
          </div>
        </div>

        <div className='healthy_adver_container'>
          <div className='healthy_adver_des'>
            <h4 className='healthy_adver_title'>
              Call 507-293-2966 to book a Rejuvenate Spa appointment today.
            </h4>
          </div>
        </div>

        <div className='healthy_card'>
          <div className='healthy_left'>
            <h4 className='healthy_left_title'>Rejuvenate Spa</h4>
            <p className='healthy_left_para'>
              Rejuvenate Spa is open and our commitment to your health and
              safety is our top priority! As part of Mayo Clinic’s response to
              COVID-19, we have enhanced our cleaning protocols and are
              diligently enforcing masking and distancing. Some services may be
              temporarily unavailable or modified.
            </p>
          </div>
          <div className='healthy_right'>
            <img
              src='https://mccms.cws.net/content/healthyliving.mayoclinic.org/images/home/HLP_Spa_5alt_410_final_386x238.jpg'
              alt=''
              className='healthy_right_img'
            />
            <p className='healthy_right_des'>
              Offering massage, acupuncture, manicures, pedicures, waxing, body
              wraps, makeup, eyelash extensions, LED light therapy and more.
            </p>
          </div>
        </div>

        <div className='healthy_card'>
          <div className='healthy_left'>
            <h4 className='healthy_left_title'>
              A science-based weight loss solution
            </h4>
            <p className='healthy_left_para'>
              A science-based weight loss solution Meet your weight loss goals
              through lifestyle change by working with the experts behind The
              Mayo Clinic Diet. Multi-day Diet Experience participants receive a
              full year of wellness coaching support. Past participants have
              lost an average of nine percent of their body weight.
            </p>
          </div>
          <div className='healthy_right'>
            <img
              src='https://mccms.cws.net/content/healthyliving.mayoclinic.org/images/home/home_comprehensive-experience.jpg'
              alt=''
              className='healthy_right_img'
            />
            <p className='healthy_right_des'>
              Personal guidanceReceive personal attention from Mayo Clinic
              experts and ongoing support from a Mayo Clinic wellness coach.
            </p>
          </div>
        </div>

        <div className='healthy_card'>
          <div className='healthy_left'>
            <h4 className='healthy_left_title'>
              Wellness training for medical professionals
            </h4>
            <p className='healthy_left_para'>
              Wellness training for medical professionals Expand your personal
              knowledge with help from Mayo Clinic. Participate in Healthy
              Living for Physicians, a four-module CME course. Or, sign up for
              the Mayo Clinic Wellness Coach Training & Certification Program,
              which is an approved training program through the National Board
              for Health and Wellness Coaching.
            </p>
          </div>
          <div className='healthy_right'>
            <img
              src='https://mccms.cws.net/content/healthyliving.mayoclinic.org/images/home/home_focused-expereinces.jpg'
              alt=''
              className='healthy_right_img'
            />
            <p className='healthy_right_des'>
              Gain the knowledge, data, and expert guidance needed to succeed.
            </p>
          </div>
        </div>
      </div>

      <BotBar />
    </>
  );
};

export default HealthyLife;
