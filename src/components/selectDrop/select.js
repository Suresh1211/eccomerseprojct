import React, { useState } from "react";
import "../selectDrop/select.css";
const Select = () => {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const[selectedCategory,setSelectedCategory]=useState('');
  const openSelect = () => {
    setisOpenSelect(!isOpenSelect);
  };
  const chooseCategory = (value) => {
    setSelectedCategory(value);
    setisOpenSelect(false);
  };
  const dropList = [
    "Wines",
    "fruits",
    "vegetables",
    "clothes",
    "furniture",
  ];
  return (
    <div className="selectDrop cursor">
      <span className="openSelect" onClick={openSelect}>
        { selectedCategory !== ''? selectedCategory : 'All Categories'}
      </span>
      {isOpenSelect === true && (
        <div className="select-drop-down">
          <div className="searchField">
            <span class="error clearAll" onClick={()=> chooseCategory('')}> clear categories</span>
            <input type="text" />
          </div>
          <ul className="searchResults">


            {dropList.map((item, index) => (
              <li key={index} onClick={() => chooseCategory(item)}>
                {item}
              </li>
            ))}



          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
