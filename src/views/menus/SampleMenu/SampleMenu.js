import React, { useState } from 'react';
import EntryUserInfo from './entryuserinfo';
import UserInfo from './userinfo';

const SampleMenu = () => {
    const [idNo, setIdNo] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    let [userData, setUserData] = useState([]);


    const idChange = (e) => {
        let idchk = /^[0-9]/;
        if(e.target.value === '' || idchk.test(e.target.value)) {
            setIdNo(e.target.value);
        } else {
            alert('Please Enter Number Only')
        }
        
    }

    const nameChange = (e) => {
        setName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    const phoneChange = (e) => {
        setPhone(e.target.value);
    }

    const addbtn= () => {
        setUserData([...userData, {"id": idNo, 'name': name, 'email': email, 'phone':phone}]);
        console.log(userData);
    }


    return (
        <div>
            <EntryUserInfo
                idNo={idNo} 
                name={name}
                email={email}
                phone={phone}
                idChange={idChange}
                nameChange={nameChange}
                emailChange={emailChange}
                phoneChange={phoneChange}
                addbtn={addbtn}
            />
            <UserInfo
                userData={userData}
            />
        </div>
    )
}

export default SampleMenu;
