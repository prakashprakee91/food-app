import { useState } from 'react';
import './TabMenu.css'
export default function TabMenu () {
    const [activeTab, someFunc] = useState('tab1');
    function setActiveTab(tabName) {
        someFunc(tabName);
    }
    return (
        <div className='menu'>
            <div className="nav-tabs">
                <div className="tab" onClick={() => { setActiveTab('tab1') }}>
                    <span className={activeTab === "tab1" ? "active": ""}>Tab 1</span>
                </div>
                <div className="tab" onClick={() => { setActiveTab('tab2') }}>
                    <span className={activeTab === "tab2" ? "active": ""}>Tab 2</span>
                </div>
                <div className="tab" onClick={() => { setActiveTab('tab3') }}>
                    <span className={activeTab === "tab3" ? "active": ""}>Tab 3</span>
                </div>
                <div className="tab" onClick={() => { setActiveTab('tab4') }}>
                    <span className={activeTab === "tab4" ? "active": ""}>Tab 4</span>
                </div>
            </div>
            <div className='tabContent'>
                Load dynamic data of {activeTab}
            </div>
        </div>
        
        
    );
}