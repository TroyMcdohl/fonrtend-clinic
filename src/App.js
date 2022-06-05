import './App.css'
import Doctors from './clinic/Doctors/Doctors'
import ForCovid from './clinic/FactClinic/ForCovid/ForCovid'
import HealthyLife from './clinic/FactClinic/HealthyLife/HealthyLife'
import LifeEvery from './clinic/FactClinic/LiveEvery/LifeEvery'
import SesonalD from './clinic/FactClinic/Sesonal/SesonalD'
import ClinicPhoto from './clinic/MainClinic/ClinicPhoto/ClinicPhoto'
import ClinicPros from './clinic/MainClinic/ClinicPros/ClinicPros'
import NavBar from './Navbar/NavBar'
import BotBar from './shared/BotBar/BotBar'
import ChooseUi from './shared/Choose/ChooseUi'
import UserRight from './shared/UserCan/UserRight'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MainClinic from './clinic/MainClinic/MainClinic'

const App = () => {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<MainClinic/>}/>
       <Route path="/covid" element={<ForCovid/>}/>
       <Route path="/healthylife" element={<HealthyLife/>}/>
       <Route path="/sesonaldisease" element={<SesonalD/>}/>
       <Route path="/getahappylife" element={<LifeEvery/>}/>
       <Route path="/doctors" element={<Doctors/>}/>
    {/* <NavBar/>
    <ChooseUi />
      <UserRight />
    <ClinicPhoto/>
    <ClinicPros/>
    <BotBar/> */}
    {/* <ForCovid/> */}
    {/* <HealthyLife /> */}
    {/* <SesonalD/> */}
  {/* <LifeEvery/> */}
  {/* <Doctors/> */}
  </Routes>
   </Router>
  )
}

export default App