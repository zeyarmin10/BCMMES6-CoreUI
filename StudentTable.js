import React from "react";
import {CImg}  from "@coreui/react";

const StudentTable = (props) => {
    console.log("show",props.showTable.length);
    
    return(
        props.showTable.length > 0 && 
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Eamil</th>
                    <th scope="col">PhoneNo</th>
                    <th scope="col">Action</th>
                </tr>    
            </thead>
            <tbody >
            {props.showTable.map((data,index)=>{
                return (
                    
                        <tr key={index}>
                            <td scope="col">{data.id}</td>
                            <td scope="col">{data.name}</td>
                            <td scope="col">{data.email}</td>
                            <td scope="col">{data.phone}</td>
                            <td scope="col">
                                <CImg
                                    src={"/avatars/delete.png"}
                                    alt="id"
                                    width={35}
                                    height={35}
                                    style={{ marginLeft: "10px" }}
                                    onClick={() => props.remove(data.id)}
                                />
                            </td>  
                        </tr>   
                  
                );
            })}
            </tbody>
        </table>
     )
    
    
};

export default StudentTable;
