import React, { useState } from 'react';
// import './btnlist.css';


const BtnList = () => {
    //test array
    let arr = [];
    //setting test array
    const setArr = () => {
        for(let i = 0;i<10;i++){
            arr.push(i);
        }
    }

    //calling set array function to fill array
    setArr();


    return (
        <div className="container">
            <ul>
                {
                    arr.map((e,i) => {
                        return <li key = {i}> <button> {e} </button> </li>
                    })
                }
            </ul>
        </div>
    );
}

export default BtnList;
