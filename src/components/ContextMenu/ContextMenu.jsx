// import React from 'react';
import './ContextMenu.css';

const ContextMenu = ({ items, xPos, yPos, onClose }) => {
  return (
    <div 
      className="context-menu"
      style={{ top: yPos, left: xPos }}
    >
      {items.map((item, index) => (
        <div 
          key={index} 
          className="context-menu-item" 
          onClick={() => item.action()}>
          <span className="context-menu-item-icon">
            {item.icon}
          </span>
          {item.label}
        </div>
      ))}
    </div>
  );
};
ContextMenu.propTypes = {
  items: Array, 
  xPos: Float64Array, 
  yPos: Float64Array,
  onClose: Event
}

export default ContextMenu;
