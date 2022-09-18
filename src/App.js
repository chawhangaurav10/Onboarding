import "./App.css";
import logo from "./logo.png";
import React from "react";
import { useState } from "react";
import Name from "./Components/Name";
import WorkSpace from "./Components/WorkSpace";
import Usage from "./Components/Usage";
import Submitted from "./Components/Submitted";
import Progressbar from "./Components/Progressbar";

export default function App() {
  const [info, setInfo] = useState({
    fullName: "",
    userName: "",
    workspaceName: "",
    workspaceUrl: "",
    usedBy: "",
  });
  const [step, setStep] = useState(1);

  const Forms = () => {
    if (step === 1) {
      return <Name formData={info} setFormData={setInfo} />;
    } else if (step === 2) {
      return <WorkSpace formData={info} setFormData={setInfo} />;
    } else if (step === 3) {
      return <Usage formData={info} setFormData={setInfo} />;
    } else if(step ===4){
      return <Submitted formData={info} setFormData={setInfo} />;
    }
  };

  const button = {
    backgroundColor: "blueviolet",
    color: "white",
    fontSize: "20px",
   
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>
          <img className="mb-3 mr-1" src={logo} alt="logo" height={35} />
          Eden
        </h1>
        <div className=" p-3" style={{width:'40%'}}>
        <Progressbar step={step}/>
          {Forms()}
         
        <button
          type="submit"
          className="btn btn-lg btn-block  my-5"
          style={button}
          
            onClick={() => {
              if (step === 4) {
                alert("FORM SUBMITTED Please check console for info");
                console.log(info);
              } else {
                setStep((currentStep) => currentStep + 1);
              }
            }}
          
        >
            {step === 4 ? "Launch Eden" : "Create Workspace"}
        </button>
        </div>
      </div>
    </div>
  );
}

App.defaultProps={
  usedBy: "individual",
}