
  import { FaUserAlt } from 'react-icons/fa';
  import { RiShutDownLine } from 'react-icons/ri';
  import { AiOutlineCalendar , AiOutlineGlobal } from 'react-icons/ai';
  import {  FiUser } from 'react-icons/fi';
 
  
const NavbarComponent=()=>{
    return(
<nav className="navbar navbar-expand-lg  navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#" style={{color:"#180889",fontWeight:"bold"}}>Nadeer</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item d-flex flex-row">
        <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-6--v2.png"/>
        <p style={{padding:10, color:"skyblue"}}>  مرحبا بك !</p>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"#180889"}}>
            نورالدين ناصر القطان
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><a class="dropdown-item" href="#" style={{color:"#180889",paddingLeft:"35px"}}> <FiUser style={{marginLeft:"10px"}}/>الحساب الشخصى</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#" style={{color:"#180889",paddingLeft:"100px"}}> <AiOutlineCalendar style={{marginLeft:"10px"}}/>التقويم</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#" style={{color:"red",paddingLeft:"60px"}}> <RiShutDownLine style={{marginLeft:"5px"}}/>تسجيل الخروج</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true" style={{color:"skyblue"}} ><AiOutlineGlobal/> اللغه العربيه</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
    )
}

export default NavbarComponent;