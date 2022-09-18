import React from "react";

export default function WorkSpace({ formData, setFormData }) {
  return (
    <>
      <h2>Let's set up a home for all your work</h2>
      <small style={{ color: "GrayText" }}  className='mb-5'>
        You can always create another workspace later.
      </small>
      <br />
      

      <div className="form-group text-left mt-5">
        <h5 htmlFor="workspacename">Workspace Name</h5>
        <input
          type="text"
          className="form-control"
          id="workspacename"
          placeholder="Eden"
          value={formData.workspaceName}
          onChange={(e) => {
            setFormData({ ...formData, workspaceName: e.target.value });
          }}
        />
      </div>

      <div className="form-group text-left">
        <h5 htmlFor="displayname">
          WorkSpace URL
          <small style={{ color: "GrayText" }}>(optional)</small>
        </h5>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              www.eden.com/
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="displayname"
            placeholder="Example"
            value={formData.workspaceUrl}
            onChange={(e) => {
              setFormData({ ...formData, workspaceUrl:  `www.eden.com/${e.target.value}`});
            }}
          />
        </div>
      </div>
    </>
  );
}
