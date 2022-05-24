import React from "react";

const StudentInput = (props) =>{
    return(
        <div>
            <div className="row">
                <div className="col">
                    <label>ID</label>
                    <input type="text" value={props.id}  onChange={props.handleChangeId} />
                </div>
                <div className="col">
                    <label>Name</label>
                    <input type="text" value={props.name}  onChange={props.handleChangeName} />
                </div>
                <div className="col">
                    <label>Email</label>
                    <input type="text" value={props.email}  onChange={props.handleChangeEmail} />
                </div>
                <div className="col">
                    <label>PhoneNo</label>
                    <input type="text" value={props.phone}  onChange={props.handleChangePhone} />
                </div>
                <div className="col">
                    <div className="row"></div>
                    <button  id="btnAdd" onClick={props.addStudent}>Add</button>
                </div>
            </div>
        </div>
        
    )
}

export default StudentInput;