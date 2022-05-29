import { CCol, CInputCheckbox, CLabel, CRow } from "@coreui/react";
import React from "react";

const CheckBoxChild = (props) => {
  let { chkData, chkChange, chkResult, resultDataName } = props;
  return (
    <CRow className="check-box">
      {chkData.map((data, index) => {
        return (
          <CCol md="2" key={index}>
            <CInputCheckbox
              value={data.id}
              checked={data.is_checked}
              onChange={chkChange}
            />
            <CLabel>{data.name}</CLabel>
          </CCol>
        );
      })}
      <CCol md="12">
        {resultDataName != "" && (
          <CLabel style={{ paddingTop: "2rem" }}>
            Check:
            {resultDataName}
          </CLabel>
        )}
      </CCol>
    </CRow>
  );
};

export default CheckBoxChild;
