import React from "react";
import EventonClick from './EventonClick.jsx'
import KeyboardEvent from './KeyboardEvent.jsx'
import Snake from "./Snake.jsx";
import MouseEvent from "./MouseEvent.jsx";
import ItemList from "./ItemList.jsx";

function MainEvent (){
    
    return (
        <div>
            {/* <EventonClick/>
            <KeyboardEvent/>
            <Snake/>
            <MouseEvent/> */}
            <ItemList/>
        </div>
    );
}

export default MainEvent;