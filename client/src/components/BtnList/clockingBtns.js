import React, {useState} from 'react';


const [btnValues, setBtnValues] = useState(['Clock In']);

const clockingBtns = () => {


    
    const btnSetter = state => {
        switch (state) {
            case 'Clock In':
                setBtnValues(['Lunch In', 'Break In', 'Clock Out']);
                break;
            case 'Lunch In':
                setBtnValues(['Lunch Out']);
                break;
            case 'Lunch Out':
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Break In':
                setBtnValues(['Break Out']);
                break;
            case 'Break Out':
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Clock Out':
                setBtnValues(['Clock In']);
                break;
        }
    }
    
    return btnValues.map( v =>  
        <li key = {v}> <input type = 'button' value = {v} onClick = { () =>   btnSetter(v) }/>  </li>
    );
}


export default clockingBtns;