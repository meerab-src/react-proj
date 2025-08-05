import React from "react";

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Solana.</div>

      {/* Navigation */}
      <nav className="nav">
        <a href="#" className="nav-link active">Home</a>
        <a href="#" className="nav-link">Shop</a>
        <a href="#" className="nav-link">Blog</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>

      {/* Hamburger  */}
      <div className="hamburger">
        <button>
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
