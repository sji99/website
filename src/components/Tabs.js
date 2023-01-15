import React, { useState } from 'react';
import "./CSS/tabs.css";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='tab-style'>
      <ul>
        {children.map((child, index) => (
           <li key={index} onClick={() => setActiveTab(index)} className={activeTab === index ? "active" : ""}>
           {child.props.label}
         </li>
        ))}
      </ul>
      <div>
        {children[activeTab]}
      </div>
    </div>
  );
}


function Tab({ label, children }) {
  return (
    <>
      {children}
    </>
  );
}

export {Tabs, Tab};