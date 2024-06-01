import { useState } from 'react';
import './TabMenu.css'
import Restaurants from '../Restaurants/Restaurants';
import Grocery from '../Grocery/Grocery';
import { TabsConstants } from '../Constants/TabsConstants'

export default function TabMenu () {
    const [activeTab, someFunc] = useState('tab1');
    function setActiveTab(tabName) {
        someFunc(tabName);
    }
    return (
        <div className='menu'>
            <div className="nav-tabs">
                <div className="tab">
                    <menu >
                        <button className={`tablink ${activeTab === TabsConstants[0].value ? "active": ""}`} 
                        onClick={() => { setActiveTab(TabsConstants[0].value) }}>{TabsConstants[0].label}</button>
                    </menu>
                </div>
                <div className="tab">
                    <menu>
                        <button className={`tablink ${activeTab === TabsConstants[1].value ? "active": ""}`} 
                        onClick={() => { setActiveTab(TabsConstants[1].value) }}>{TabsConstants[1].label}</button>
                    </menu>
                </div>
                <div className="tab" >
                    <menu>
                        <button className={`tablink ${activeTab === TabsConstants[2].value ? "active": ""}`} 
                        onClick={() => { setActiveTab(TabsConstants[2].value) }} >{TabsConstants[2].label}</button>
                    </menu>
                </div>
                <div className="tab">
                    <menu>
                        <button className={`tablink ${activeTab === TabsConstants[3].value ? "active": ""}`} 
                        onClick={() => { setActiveTab(TabsConstants[3].value) }} >{TabsConstants[3].label}</button>
                    </menu>
                </div>
            </div>
            <div className='tabContent'>
                <div>
                    Load dynamic data of {activeTab}
                </div>
                { activeTab === 'restuarants' && <div><Restaurants></Restaurants></div>}
                { activeTab === 'grocery' && <div><Grocery></Grocery></div>}
                <div>

                </div>
            </div>
        </div>
        
        
    );
}