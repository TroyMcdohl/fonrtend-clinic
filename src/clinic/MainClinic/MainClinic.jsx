import React from "react";
import NavBar from "../../Navbar/NavBar";
import BotBar from "../../shared/BotBar/BotBar";
import ChooseUi from "../../shared/Choose/ChooseUi";
import ClinicPhoto from "./ClinicPhoto/ClinicPhoto";
import ClinicPros from "./ClinicPros/ClinicPros";
import UserRight from "../../shared/UserCan/UserRight";

const MainClinic = () => {
  return (
    <>
      <NavBar />
      <ChooseUi />
      <UserRight />
      <ClinicPhoto />
      <ClinicPros />
      <BotBar />
    </>
  );
};

export default MainClinic;
