import React, { useState } from "react";
import RegisterProfile from "./registerprofile";

const Register = (props) => {
  const [name, setName] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dept, setDept] = useState([
    { id: "1", name: "IT Dept" },
    { id: "2", name: "Infra Dept" },
    { id: "3", name: "Sales Dept" },
    { id: "4", name: "HR Dept" },
  ]);
  const [deptChangeValue, setDeptChangeValue] = useState("");
  const [radioData, setRadioData] = useState([
    { id: "1", name: "Male" },
    { id: "2", name: "Female" },
  ]);
  const [radioChkResl, setRadioChkResl] = useState("");

  const [skills, setSkills] = useState([
    { id: "1", name: "JavaScript" },
    { id: "2", name: "PHP" },
    { id: "3", name: "Java" },
    { id: "4", name: "C#" },
  ]);
  const [chkSkills, setChkSkills] = useState([]);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const fullnameChange = (e) => {
    setFullName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const deptChange = (e) => {
    setDeptChangeValue(e.target.value);
  };
  const radioChange = (id, name) => {
    setGender(id);
    setRadioChkResl(name);
  };

  const chkChange = (e) => {
    let value = e.target.value;
    let checked = e.target.checked;
    let chk_list = [];
    let data = skills.map((obj) =>
      obj.id === parseInt(value) ? { ...obj, is_checked: checked } : obj
    );

    for (let i = 0; i < data.length; i++) {
      if (data[i].is_checked == true) {
        chk_list.push(data[i].name, ",");
      }
    }
    setSkills(data);
    setChkSkills(chk_list);
  };
  const [saveData, setSaveData] = useState([]);
  const saveClick = () => {
    let arr = [];
    arr["name"] = name;
    arr["fullname"] = fullname;
    arr["email"] = email;
    arr["dept"] = deptChangeValue;
    arr["gender"] = radioChkResl;
    arr["skills"] = chkSkills;
    setSaveData(arr);
    console.log(saveData);
  };
  return (
    <div>
      <h1>User Registration</h1>
      <RegisterProfile
        name={name}
        fullname={fullname}
        email={email}
        dept={dept}
        gender={gender}
        skills={skills}
        nameChange={nameChange}
        fullnameChange={fullnameChange}
        emailChange={emailChange}
        deptChange={deptChange}
        radioData={radioData}
        radioChange={radioChange}
        radioChkResl={radioChkResl}
        chkChange={chkChange}
        saveClick={saveClick}
        saveData={saveData}
      />
    </div>
  );
};

export default Register;
