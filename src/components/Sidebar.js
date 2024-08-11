import React,{useState} from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import {fetchByFilter} from './action';
import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const[isBarClicked,setIsBarClicked]=useState(true);
  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
  };
  const dispatch=useDispatch();
  const handleFilterClick = (filter) => {
    console.log("hello")
    dispatch(fetchByFilter(filter));
  };
  return (
    
    <aside className="sidebar">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav id="sidebar-nav" >
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
      <div  >
      <label onClick={() => handleFilterClick('Bucket Hats')}><input type="checkbox" /> Bucket Hats</label>
      <label><input type="checkbox" /> Caps</label>
      <label><input type="checkbox" /> Access</label>
      <label><input type="checkbox" /> Beanies</label>
      <label><input type="checkbox" /> Stock</label>
      <label><input type="checkbox" /> Finn</label>
      <label><input type="checkbox" /> Frame</label>
      <label><input type="checkbox" /> Icon</label>
      <label><input type="checkbox" /> Surf</label>
      </div>
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
