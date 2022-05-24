import React, { useState } from "react";

const UserInfo = (props) => {
  return (
    <div>
      <table className="table-primary table-style">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
            
          {props.userData.map((data, index)=>{
              return (
                  <tr className="table-info" key={index}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.phone}</td>
                  </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
