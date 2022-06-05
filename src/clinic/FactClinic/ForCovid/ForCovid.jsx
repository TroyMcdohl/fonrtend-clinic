import NavBar from "../../../Navbar/NavBar";
import BotBar from "../../../shared/BotBar/BotBar";
import ChooseUi from "../../../shared/Choose/ChooseUi";
import ClinicPhoto from "../../MainClinic/ClinicPhoto/ClinicPhoto";
import "./forCovid.css";

const ForCovid = () => {
  return (
    <>
      <NavBar />
      <ChooseUi />

      <div className='covid_container'>
        <div className='covid_wrapper'>
          <div className='covid_top'>
            <img
              src='https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2021/06/01/21/19/3956781-0008r-1248px.jpg'
              alt=''
              className='covid_img'
            />
            <div className='covid_facts'>
              <h4 className='covid_top_title'>
                About Covid 19 And Their Deases
              </h4>
              <p className='covid_top_para'>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by the SARS-CoV-2 virus. Most people infected with the virus
                will experience mild to moderate respiratory illness and recover
                without requiring special treatment. However, some will become
                seriously ill and require medical attention. Older people and
                those with underlying medical conditions like cardiovascular
                disease, diabetes, chronic respiratory disease, or cancer are
                more likely to develop serious illness. Anyone can get sick with
                COVID-19 and become seriously ill or die at any age. The best
                way to prevent and slow down transmission is to be well informed
                about the disease and how the virus spreads. Protect yourself
                and others from infection by staying at least 1 metre apart from
                others, wearing a properly fitted mask, and washing your hands
                or using an alcohol-based rub frequently. Get vaccinated when
                it’s your turn and follow local guidance. The virus can spread
                from an infected person’s mouth or nose in small liquid
                particles when they cough, sneeze, speak, sing or breathe. These
                particles range from larger respiratory droplets to smaller
                aerosols. It is important to practice respiratory etiquette, for
                example by coughing into a flexed elbow, and to stay home and
                self-isolate until you recover if you feel unwell.
                <h4>Prevention</h4>
                To prevent infection and to slow transmission of COVID-19, do
                the following: Get vaccinated when a vaccine is available to
                you. Stay at least 1 metre apart from others, even if they don’t
                appear to be sick. Wear a properly fitted mask when physical
                distancing is not possible or when in poorly ventilated
                settings. Choose open, well-ventilated spaces over closed ones.
                Open a window if indoors. Wash your hands regularly with soap
                and water or clean them with alcohol-based hand rub. Cover your
                mouth and nose when coughing or sneezing. If you feel unwell,
                stay home and self-isolate until you recover.
                <h4>Symptom</h4>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate illness and
                recover without hospitalization. Most common symptoms: fever
                cough tiredness loss of taste or smell. Less common symptoms:
                sore throat headache aches and pains diarrhoea a rash on skin,
                or discolouration of fingers or toes red or irritated eyes.
                Serious symptoms: difficulty breathing or shortness of breath
                loss of speech or mobility, or confusion chest pain. Seek
                immediate medical attention if you have serious symptoms. Always
                call before visiting your doctor or health facility. People with
                mild symptoms who are otherwise healthy should manage their
                symptoms at home. On average it takes 5–6 days from when someone
                is infected with the virus for symptoms to show, however it can
                take up to 14 days.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BotBar />
    </>
  );
};

export default ForCovid;
