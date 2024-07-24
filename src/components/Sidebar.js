import React,{useState} from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const[isBarClicked,setIsBarClicked]=useState(true);
  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
  };
  const barClicked = () => {
    setIsBarClicked(!isBarClicked);
  };
  return (
    
    <aside className="sidebar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="navbar"><i onClick={barClicked} className={isBarClicked?"fa fa-bars":""}></i></div>
      <nav id="sidebar-nav"  className={isBarClicked?"sidebar-nav":"sidebar-nav active"}>
        <i onClick={barClicked} className={isBarClicked?"":"fa fa-close"}></i>
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
      </nav>
    </aside>
  );
}

export default Sidebar;
