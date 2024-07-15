import React from 'react'
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className="shadow-md">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                <div>
                    <img src={logo} alt="Logo" className="h-10 mr-2" />
                </div>
                <button className="bg-primary hover:bg-indigo-500 text-white py-2 px-4 rounded">
                    Sign In
                </button>
            </div>
        </header>
  )
}

export default Header