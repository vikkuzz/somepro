import React from 'react';

function Item({text}){
    return(
        <li>{text}</li>
    )
}

const List=()=>{
    let count = 1;
    return(
        <ul>
            {[1,2,3].map((item)=>{
                return<Item key={count+=1} text={item}></Item>
            })}
        </ul>
    )
}

export default List;
