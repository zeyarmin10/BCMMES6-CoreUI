import { CRow } from "@coreui/react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol
} from "@coreui/react";
import React,{useState} from "react";
import StudentInput from "./StudentInput";
import StudentTable from "./StudentTable";
import './styleStd.css';

const StudentForm = () =>{

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");


    const [showTable,setShowTable] = useState([])

    const handleChangeId=(e)=>{
        setId(e.target.value);

    }
    const handleChangeName=(e)=>{
        setName(e.target.value);
    }
    const handleChangeEmail=(e)=>{
        setEmail(e.target.value);
        
    }
    const handleChangePhone=(e)=>{
        setPhone(e.target.value);
    }

    const addStudent = () =>{

        let dataArr =[], tmp =[],tmpData = [];

        if(showTable.length > 0 && id!="" && name!="" && email!="" && phone!=""){
            for(let i=0; i< showTable.length; i++){
                let oldData = showTable[i];
                if(oldData["id"] != id ){
                    tmpData["id"]=id;
                    tmpData["name"]=name;
                    tmpData["email"]=email;
                    tmpData["phone"]=phone;

                    // dataArr.push(tmpData);
                    // let showArr = showTable.concat(dataArr);
                    // setShowTable(showArr);

                    setShowTable([...showTable,tmpData]);

                }else if(oldData["id"] == id ){
                    alert(id + " is already exit");
                    setShowTable(showTable);
                    break;
                }
            } 
            // let showArr = showTable.concat(dataArr);
            // setShowTable(showArr);
            
        }
        else if(id!="" && name!="" && email!="" && phone!=""){
            tmp["id"]= id;
            tmp["name"]= name;
            tmp["email"]= email;
            tmp["phone"]= phone;

            dataArr.push(tmp);
            setShowTable(dataArr);
        }
        // setShowTable([...showTable, {"id":id, "name": name, "email": email, "phone": phone}]);
    }

    let remove=(id)=>{
        let data = showTable.filter((d)=>{
            return id != d.id
            
        })
        setShowTable(data);
        
    }
    return(
        <CRow>
            <CCol xs="12">
                <CCard>
                <CCardHeader
                    style={{
                    padding: "30px",
                    fontFamily: "monospace",
                    fontSize: "20px",
                    color: "#a6057b",
                    }}
                >
                    Student List
                </CCardHeader>
                <CCardBody>
                    <StudentInput id={id} name={name} email={email} phone={phone}
                        handleChangeId={handleChangeId}
                        handleChangeName={handleChangeName}
                        handleChangeEmail={handleChangeEmail}
                        handleChangePhone={handleChangePhone}
                        addStudent={addStudent}
                    />
                    <StudentTable 
                       
                        showTable={showTable} remove={remove}
                    />
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default StudentForm;