import React,{useState} from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
  };
  return (
    <aside className="sidebar">
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleGenderDropdown}>
          Gender {isGenderDropdownOpen ? '▲' : '▼'}
        </button>
        {isGenderDropdownOpen && (
          <div className="dropdown-menu">
            <label><input type="checkbox" /> Kids | Youth</label>
            <label><input type="checkbox" /> Women</label>
          </div>
        )}
      </div>
      

      <h3>Core Range</h3>
      <label><input type="checkbox" /> Bucket Hats</label>
      <label><input type="checkbox" /> Caps</label>
      <label><input type="checkbox" /> Access</label>
      <label><input type="checkbox" /> Beanies</label>
      <label><input type="checkbox" /> Stock</label>
      <label><input type="checkbox" /> Finn</label>
      <label><input type="checkbox" /> Frame</label>
      <label><input type="checkbox" /> Icon</label>
      <label><input type="checkbox" /> Surf</label>
      
      <h3>Colour</h3>
      <label><input type="checkbox" /> Black (63)</label>
      <label><input type="checkbox" /> White (31)</label>
      <label><input type="checkbox" /> Blue (30)</label>
      <label><input type="checkbox" /> Brown (27)</label>
      <label><input type="checkbox" /> Green (20)</label>
    </aside>
  );
}

export default Sidebar;
