import React from "react";
import StepWizard from "react-step-wizard";
import Wizzuno from 'components/Wizzards/WizzardInit.js';
import Wizzdos from 'components/Wizzards/WizzardSeg.js';
import Wizztres from 'components/Wizzards/WizzardTerc.js';

function Wizard() {

  return <div className='__main_wizzard'>

    <StepWizard>
        <Wizzuno />
        <Wizzdos />
        <Wizztres />
    </StepWizard>
  </div>
}
export default Wizard;