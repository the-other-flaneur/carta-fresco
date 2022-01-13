import React from "react";


const MainContent = ({children}) => {

    return (
        <div className="w-full mt-14 pt-4 flex flex-col items-center bg-gradient-to-b from-black">
            {children}
        </div>
    )
}

export default MainContent;