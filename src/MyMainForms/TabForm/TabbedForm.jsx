import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState("basic");

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        username: "",
        password: ""
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Data: ${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <div>
            <h2>Tabbed form with shared state</h2>
            <div style={{ display: "flex", borderBottom: "1px solid #ccc" }}>
                <Tab
                    name="Basic Info"
                    isActive={activeTab === "basic"}
                    onClick={() => handleTabChange("basic")}
                />
                <Tab
                    name="Contact Info"
                    isActive={activeTab === "contact"}
                    onClick={() => handleTabChange("contact")}
                />
                <Tab
                    name="Account Info"
                    isActive={activeTab === "account"}
                    onClick={() => handleTabChange("account")}
                />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <TabContent
                        activeTab={activeTab}
                        formData={formData}
                        onChange={handleChange}
                    />
                </form>
            </div>
        </div>
    );
};

export default TabbedForm;
