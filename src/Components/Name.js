import React from "react";

export default function Name({ formData, setFormData }) {

  return (
    <>
      <h2>Welcome! First things first...</h2>
      <small style={{ color: "GrayText" }} className='mb-5'>
        You can always change them later
      </small>
      <br />
      

      <div className="form-group text-left mt-5">
        <h5 htmlFor="fullname">Full Name</h5>
        <input
          type="text"
          className="form-control"
          id="fullname"
          placeholder="Steve Jobs"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
          }}
          />
      </div>

      <div className="form-group text-left">
        <h5 htmlFor="displayname">Display Name</h5>
        <input
          type="text"
          className="form-control"
          id="displayname"
          placeholder="Steve"
          value={formData.userName}
          onChange={(e) => {
            setFormData({ ...formData, userName: e.target.value });
          }}
        />
      </div>
    </>
  );
}
