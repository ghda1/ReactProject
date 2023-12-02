import React from 'react';

function Header(){

    const clint = "Programmer";
    const title={
        designer: "Design",
        prog: "Programming"
    }

    const info = {
        name: "Ghadah",
        mid: "Aljuhani"
    }


    return(
        
        <div className='navbar bg-dark rounded text-white'>
            
        <h2 >
            {clint == "Programming" ? title.prog : title.designer} is my life.
            </h2>
        </div>
    );
}

export default Header;