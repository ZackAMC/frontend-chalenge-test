'use client';
import logo from '@/app/ui/img/Logo.svg';
import Image from 'next/image';
import { FaRegCircleUser } from 'react-icons/fa6';
import '@/app/ui/navbar.css';
import { useState } from 'react';

export default function NavBar() {
  const [burguerActive, setBurguerActive] = useState(false);
  const [burguerState, setBurguerState] = useState('cabecera');

  const toggleMenu = () => {
    if (burguerActive) {
      setBurguerActive(false);
      setBurguerState('cabecera');
    } else {
      setBurguerActive(true);
      setBurguerState('cabecera activo');
    }
  };

  return (
    <header className={burguerState}>
      <a href="#" className="logo">
        <Image src={logo} alt="Logo Quickbet Movies" />
      </a>

      <nav className="menu">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li className="user">
            <FaRegCircleUser />
            <span>Login</span>
          </li>
        </ul>
      </nav>

      <div className="burguer" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
