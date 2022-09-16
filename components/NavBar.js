import React from 'react'
import Image from 'next/image'
import avatar from '../assets/avatar.png'
import BsPerson from 'react-icons/bs'

const style = {
    wrapper: 'h-16 w-full bg-gray-800 flex justify-between items-center px-60',
    leftMenu: 'flex justify-between items-center',
    rightMenu: 'flex justify-between items-center',
    logo: 'text-white text-2xl cursor-pointer',
    menuItem: 'text-white text-xl mx-4 cursor-pointer flex items-center',
    userImageContainer: 'w-10 h-10 rounded-full overflow-hidden border-2 border-white',
    userImage: 'h-10 w-10 object-cover object-center cursor-pointer rounded-full',
    loginButton: 'flex items-center justify-center bg-white text-black text-xl px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200',
    loginButtonText: 'text-black text-xl',
}

const currentAcount = '0x000000000000000'
const NavBar = () => {
  return (
    <div className={style.wrapper}>
    <div className={style.leftMenu}>
    <div className={style.logo}>Hala Rider</div>
    <div className={style.menuItem}>Ride</div>
    <div className={style.menuItem}>Drive</div>
    <div className={style.menuItem}>More</div>
    </div>
    <div className={style.rightMenu}>
    <div className={style.menuItem}>Sign In</div>
    <div className={style.menuItem}>Sign Up</div>
    <div className={style.menuItem}>Help</div>
    <div className={style.userImageContainer}> 
        <Image className={userImage} src={avatar} width={40} height={40}></Image>
    </div>
    {currentAccount ? (
        <div>
        {currentAcount.slice(0,6)}...{currentAcount.slice(-4)}
        </div>
    ):(
        <div>
        <div className={style.loginButton}>
        <BsPerson />
        <span className={style.loginButtonText}>Please Log in...
        </span></div>
        </div>
    )}
    <div>
        {currentAcount.slice(0,6)}...{currentAcount.slice(-4)}
    </div>
    </div>
    </div>

  )
}

export default NavBar