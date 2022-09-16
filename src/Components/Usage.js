import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";


export default function Usage({ formData, setFormData }) {
  
  const selectorButton = {
    maxWidth: "250px",
    display: "inline-block",
    border: "1px solid LightGray",
    backgroundColor: "white",
    borderRadius: "10px",
    
  };
  return (
    <>
      <h2>How are you planning to use Eden?</h2>
      <small style={{ color: "GrayText" }} className="mb-4">
        We'll streamline your setup experience accordingly.
      </small>
      
      <button
        type="button"
        className=" m-2 text-left p-4"
        style={selectorButton}
        value={"individual"}
        onClick={(e) => {
          
          setFormData({ ...formData, usedBy: e.target.value});
        }}
      >
        <PersonIcon htmlColor="blueviolet"  style={{ height: "40px", width: "30px" ,marginBottom: "10px"}} /> 
        
        <br />
        <b>For myself</b>
        <small style={{ color: "GrayText" }} className="mb-4">
          <br />
          Write better. Think more clearly. Stay organized.
        </small>
      </button>


      <button
        type="button"
        className=" m-2 text-left p-4"
        style={selectorButton}
        value={"group"}
        onClick={(e) =>  {
            
           setFormData({ ...formData, usedBy: e.target.value});
          
          
        }
      }
        
      >
        <GroupsIcon htmlColor="blueviolet" style={{ height: "40px", width: "30px" ,marginBottom: "10px"}}/> <br />
        <b>With my team</b>
        <small style={{ color: "GrayText" }} className="mb-4">
          <br />
          Wikis, docs, tasks & projects, all in one place.
        </small>
      </button>
    </>
  );
}
