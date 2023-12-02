import React from 'react';

function SocialItem (props){
    return(
        <li className='list-group-item'>
            <img src = {props.img} alt = {props.media} />
            <input type ='checkbox' id={props.media}/>
            <label htmlfor = {props.media}>{props.media}</label>
    </li>

    )
}
export default SocialItem;