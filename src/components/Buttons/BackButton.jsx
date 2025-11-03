import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';


export const BackButton = () => {
return (
<>
<div className='flex items-start'>
    <NavLink to='/'>
    <div className="tooltip-container">
     <span className="tooltip-text">Atras</span>
      <IoIosArrowBack size={45} 
        color='teal'
        className='
        absolute
        mt-3  
        cursor-pointer
        '/>
    </div>
    </NavLink>
</div>
</>
)}
