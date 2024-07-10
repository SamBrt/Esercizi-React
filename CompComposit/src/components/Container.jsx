import React, { useState } from 'react';

export function Container ({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((t)=>!t);
  };

  return (
    <div className='container' >
      <div className='title' onClick={toggleCollapse} >
        {title}
      </div>
      {<div className={collapsed ? "app-content" : "app-content-hidden"}>{children}</div>}
    </div>
  );
};


