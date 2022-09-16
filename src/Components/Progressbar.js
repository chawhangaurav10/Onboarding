import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const steps = [
  {
    status: "Name",
  },
  {
    status: "WorkSpace",
  },
  {
    status: "cancelled",
  },
  {
    status: "Usage",
  },
];

export default function Progressbar(props) {
  return (
    <>
      <div className="m-5 pb-5">
        <ProgressBar height= '1px'
          percent={100 * (props.step / 4)}
          // percent ={83} // 13 50 83 100
          filledBackground="blueviolet"
          
        >
          {steps.map((step, index) => {
            return (
            
              <Step 
              key={index}
                position={props.step / 4}
                transition="scale"
                children={({ accomplished }) => (
                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      width: '50px',
                      height: '50px',
                      borderColor: "LightGray",
                      border: accomplished ? "" : "1px solid",
                      color: accomplished ? "white" : "LightGray",
                      backgroundColor: accomplished ? "blueviolet" : "white",
                    }}
                  >
                    {index + 1}
                  </div>
                )}
              />
             );
          })} 
        </ProgressBar>
      </div>
    </>
  );
}
