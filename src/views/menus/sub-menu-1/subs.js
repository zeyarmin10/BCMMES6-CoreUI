import React, { useState } from "react";

const Subs = (props) => {
    return (
        <div className="Subs">
            <input type={'text'} value={props.subsFirst} onChange={props.subfirstChange} />
            <label onChange={props.secChange} className={"opsign"}>-</label>
            <input type={'text'} value={props.substhird} onChange={props.subthirdChange} />
            <button type="button" onClick={props.subisequalto}>=</button>
            <input type={'text'} value={props.subsResult}/>
        </div>
    )
}

export default Subs;