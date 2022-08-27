import React from "react";


function Button({title, action}) {


    return (

        <button className="rounded-r-lg rounded-bl-lg w-full py-3 text-center bg-btn bg-blue-400 text-white">{title}            
        </button>       

    );
}

export default Button;