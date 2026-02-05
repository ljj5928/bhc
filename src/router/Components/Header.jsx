import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

  const [headerBtn,setHeaderBtn] = useState(true)

  return (
    <header>
      <div className='header_i'>
        <div className='logo'>
          <Link to='/'>
            <img src="./bhc/bhc_logo.png" alt="로고" />
          </Link>
        </div>
        <ul className='gnb'>
            <li><Link to='/'>메뉴</Link></li>   
            <li>매장</li>   
            <li><Link to='/startup'>창업</Link></li>   
            <li>브랜드</li>   
            <li>고객센터</li>   
            <li>로그인</li>   
        </ul>
        <div className='header_btn'>
           <span className={`slide ${headerBtn ? 'left' : 'right'}`}></span>
            <button className={headerBtn ? 'active' : ''} onClick={()=>setHeaderBtn(true)}>BHC</button>
            <button className={headerBtn ? '' : 'active'} onClick={()=>setHeaderBtn(false)}>BHC몰</button>
        </div>
        <div className='ham_btn'>
            ≡
        </div>
      </div>
    </header>
  )
}

export default Header
