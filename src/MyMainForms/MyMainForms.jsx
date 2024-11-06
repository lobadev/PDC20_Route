import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

import BasicForms from "./BasicForms";
import ControlledInput from "./ControlledInput";
import UnControlledInput from "./UncontrolledInput";
import TabbedForm from "./TabForm/TabbedForm";



const MyMainForms = () => {
    return (
        <div>
            <h1>React Forms App</h1>
            <nav>
                <ul>
                    <li><Link to="basic-form">Basic Form</Link></li>
                    <li><Link to="controlled-input">Controlled Input</Link></li>
                    <li><Link to="uncontrolled-input">Uncontrolled Input</Link></li>
                    <li><Link to="tabbed-form">Tabbed Form</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={<BasicForms/>}/>
                <Route path="controlled-input" element={<ControlledInput/>}/>
                <Route path="uncontrolled-input" element={<UnControlledInput/>}/>
                <Route path="tabbed-form" element={<TabbedForm/>}/>
            </Routes>

        </div>

    );
}

export default MyMainForms;