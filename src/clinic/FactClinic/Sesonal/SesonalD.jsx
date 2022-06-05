import "./sesonalD.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../../../Navbar/NavBar";
import ChooseUi from "../../../shared/Choose/ChooseUi";
import BotBar from "../../../shared/BotBar/BotBar";

const SesonalD = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <NavBar />
      <ChooseUi />
      <div className='seasonal_container'>
        <div data-aos='fade-right' className='seasonal_card'>
          <div className='seasonal_left'>
            <img
              src='https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2020/05/22/18/29/ibc-home-employer-employee-resources-640x400-2x'
              alt=''
              className='seasonal_img'
            />
          </div>
          <div className='seasonal_right'>
            <div className='seasonal_des'>
              <h4 className='seasonal_title'> Causes of seasonality</h4>
              <p className='seasonal_para'>
                The causes of seasonal and longer period cycles in the incidence
                of infectious diseases have long puzzled epidemiologists (e.g.
                Ransome 1880). Careful mathematical analysis in the early
                twentieth century led to the description of the ‘law’ of mass
                action, which states that the number of new infections depends
                on the product of the number of infected individuals, the number
                susceptible and a transmission parameter (called variously a
                ‘contact rate’, ‘coefficient of infectivity’, etc.; for a
                history, see Heesterbeek 2005). If infection results in
                protective immunity or death, the law of mass action predicts
                cycles in disease incidence. Soper (1929), however, made it
                clear that, at least in the case of measles, significant
                seasonal variation in the transmission parameter must also
                occur. One proposed cause of this seasonal variation was the
                congregation of children during school terms. This was confirmed
                about 50 years later by detailed analysis of weekly measles case
                reports from England and Wales, which demonstrated a decline in
                the transmission parameter during school holidays (Fine &
                Clarkson 1982).
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-left' className='seasonal_card'>
          <div className='seasonal_left'>
            <div className='seasonal_des'>
              <h4 className='seasonal_title'>
                {" "}
                Survival of pathogen outside host
              </h4>
              <p className='seasonal_para'>
                he survival of the pathogenic organism outside a host depends on
                the characteristics of the environment, particularly
                temperature, humidity, exposure to sunlight, pH and salinity.
                Annual variation in climate can therefore result in annual or
                more complex peaks in disease incidence, depending on the
                influence of climatic variables, such as rainfall or cloud cover
                on the environment. This relationship depends on the type of
                environment (e.g. sewage, aerosol, droplets, etc.), and hence
                route of transmission. The most studied examples of
                environmentally driven seasonality are for pathogens whose
                predominant route of transmission is faecal–oral. The enhanced
                survival of rotavirus and norovirus at low temperatures is
                responsible for the typically observed winter peaks in
                gastroenteritis (Cook et al. 1990; Mounts et al. 2000).
                Similarly, seasonal increases in cholera incidence occur when
                the micro-environment favours growth of the bacterium (Pascual
                et al. 2000, 2002).
              </p>
            </div>
          </div>
          <div className='seasonal_right'>
            <img
              src='https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/09/26/22/32/mc_cardiology_referral_program'
              alt=''
              className='seasonal_img'
            />
          </div>
        </div>

        <div data-aos='fade-right' className='seasonal_card'>
          <div className='seasonal_left'>
            <img
              src='https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2020/05/22/18/29/ibc-home-employer-employee-resources-640x400-2x'
              alt=''
              className='seasonal_img'
            />
          </div>
          <div className='seasonal_right'>
            <div className='seasonal_des'>
              <h4 className='seasonal_title'> Causes of seasonality</h4>
              <p className='seasonal_para'>
                The causes of seasonal and longer period cycles in the incidence
                of infectious diseases have long puzzled epidemiologists (e.g.
                Ransome 1880). Careful mathematical analysis in the early
                twentieth century led to the description of the ‘law’ of mass
                action, which states that the number of new infections depends
                on the product of the number of infected individuals, the number
                susceptible and a transmission parameter (called variously a
                ‘contact rate’, ‘coefficient of infectivity’, etc.; for a
                history, see Heesterbeek 2005). If infection results in
                protective immunity or death, the law of mass action predicts
                cycles in disease incidence. Soper (1929), however, made it
                clear that, at least in the case of measles, significant
                seasonal variation in the transmission parameter must also
                occur. One proposed cause of this seasonal variation was the
                congregation of children during school terms. This was confirmed
                about 50 years later by detailed analysis of weekly measles case
                reports from England and Wales, which demonstrated a decline in
                the transmission parameter during school holidays (Fine &
                Clarkson 1982).
              </p>
            </div>
          </div>
        </div>

        <div data-aos='fade-left' className='seasonal_card'>
          <div className='seasonal_left'>
            <div className='seasonal_des'>
              <h4 className='seasonal_title'>
                {" "}
                Survival of pathogen outside host
              </h4>
              <p className='seasonal_para'>
                he survival of the pathogenic organism outside a host depends on
                the characteristics of the environment, particularly
                temperature, humidity, exposure to sunlight, pH and salinity.
                Annual variation in climate can therefore result in annual or
                more complex peaks in disease incidence, depending on the
                influence of climatic variables, such as rainfall or cloud cover
                on the environment. This relationship depends on the type of
                environment (e.g. sewage, aerosol, droplets, etc.), and hence
                route of transmission. The most studied examples of
                environmentally driven seasonality are for pathogens whose
                predominant route of transmission is faecal–oral. The enhanced
                survival of rotavirus and norovirus at low temperatures is
                responsible for the typically observed winter peaks in
                gastroenteritis (Cook et al. 1990; Mounts et al. 2000).
                Similarly, seasonal increases in cholera incidence occur when
                the micro-environment favours growth of the bacterium (Pascual
                et al. 2000, 2002).
              </p>
            </div>
          </div>
          <div className='seasonal_right'>
            <img
              src='https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2019/09/26/22/32/mc_cardiology_referral_program'
              alt=''
              className='seasonal_img'
            />
          </div>
        </div>
      </div>
      <BotBar />
    </>
  );
};

export default SesonalD;
