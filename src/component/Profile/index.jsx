

import { useState } from 'react'
import { Account } from './components/account'
import { Order } from './components/orders'
import './style.css'

export const Profile =() =>{

const[State,SetState] = useState({id:2})
return (
       <div className='ProfilePage'>
       <div className="RightBar">
           <div className='Profile'>
           <img className='UserIcon' src='assets/images/profile/user-icon.png' alt='UserImg'/>
<div className='ProfileName' >
<h2 className='UserName'>
    ساناز سلطانی گوهری
</h2>
<h4 className='UserNumber'>09133652565</h4>
</div>
</div>
<div className='Link'>
    <div  className='Sidebar'>
        <img  className='SidebarIcon' src = 'assets/images/profile/user-4.png' alt="user"/>
        <button className='btn btn-outline'  onClick={() =>SetState({id:2})}>اطلاعات حساب کاربری</button>
    </div>
<div className='Sidebar'>
   <img  className='SidebarIcon' src = 'assets/images/profile/my-orders.png' alt="order"/>
   
   <button className='btn btn-outline' onClick={() =>SetState({id:1})}>سفارشات</button>
</div>

<div  className='Sidebar'>
<img className='SidebarIcon' src = 'assets/images/profile/exit.png' alt="exit"/>
    <button className='btn btn-outline'>خروج</button>
</div>
</div>
</div>
<div className='MainPage'>
    
{(State.id===1) && <Order/>}
{(State.id===2) && <Account/>}
</div>
</div>
)
}