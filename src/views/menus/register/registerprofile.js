import React from "react";

const RegisterProfile = (props) => {
  return (
    <div className="regForm">
      <div className="inputBoxContainer">
        <label className="inputLabel">Name :</label>
        <input
          type={"text"}
          value={props.name}
          onChange={props.nameChange}
          className="textInput"
        />
      </div>
      <div className="inputBoxContainer">
        <label className="inputLabel">Full Name:</label>
        <input
          type={"text"}
          value={props.fullname}
          onChange={props.fullnameChange}
          className="textInput"
        />
      </div>
      <div className="inputBoxContainer">
        <label className="inputLabel">Email :</label>
        <input
          type={"text"}
          value={props.email}
          onChange={props.emailChange}
          className="textInput"
        />
      </div>
      <div className="inputBoxContainer">
        <label className="inputLabel">Department :</label>
        <select className="textInput" onChange={props.deptChange}>
          <option>--- Please Select Dept ---</option>
          {props.dept.map((data, index) => {
            return (
              <option key={index} value={data.name}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="inputBoxContainer">
        <label className="inputLabel">Gender :</label>
        <div className="inputBox">
          {props.radioData.map((data, index) => {
            return (
              <div className="radioBox" key={index}>
                <label>
                  <input
                    className="radioInput"
                    id="radioGP"
                    value={data.id}
                    type={"radio"}
                    checked={props.gender == parseInt(data.id) ? true : false}
                    onChange={() => props.radioChange(data.id, data.name)}
                  />
                  {data.name}
                </label>
              </div>
            );
          })}
          {/* <div>
              <label>{props.radioChkResl} is checked</label>
            </div> */}
        </div>
      </div>
      <div className="inputBoxContainer">
        <label className="inputLabel">Skills :</label>
        <div className="inputBox">
          {props.skills.map((data, index) => {
            return (
              <div className="checkBox" key={index}>
                <label>
                  <input
                    type={"checkbox"}
                    id="checkboxGP"
                    value={data.id}
                    checked={data.is_checked}
                    onChange={props.chkChange}
                  />
                  {data.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="btnContainer">
        <button className="btnSave" onClick={props.saveClick}>
          Save
        </button>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Full Name</th>
            <th>Email </th>
            <th>Dept</th>
            <th>Gender</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {props.saveData !== "" &&
            props.saveData.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.fullname}</td>
                  <td>{data.email}</td>
                  <td>{data.dept}</td>
                  <td>{data.gender}</td>
                  <td>{data.skills}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterProfile;
