import React from 'react';
import SocialItem from './SocialItem';

function Social(){
    return(
        <ul className='list-group'>

            <SocialItem media = "Facebook" img = "https://picsum.photos/60" />
            <SocialItem media = "YouTube" img = "https://picsum.photos/61"  />
            <SocialItem media = "Instagram" img = "https://picsum.photos/64"/>
            <SocialItem media = "LinkedIn" img = "https://picsum.photos/65"/>
        </ul>
    );
}

export default Social;  