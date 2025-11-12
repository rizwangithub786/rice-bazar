import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Dashboard from './pages/Dashboard'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-screen font-sans text-primary">
      <header className="bg-offwhite sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">R</div>
            <div className="text-xl font-semibold">Rice Bazar</div>
          </div>
          <button onClick={()=>setOpen(true)} aria-label="menu" className="p-2">
            <svg width="24" height="24" fill="currentColor"><path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" /></svg>
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {open && (
        <aside className="fixed inset-0 z-30 flex">
          <div className="w-72 bg-offwhite p-6 shadow-xl">
            <button onClick={()=>setOpen(false)} className="ml-auto mb-4">✕</button>
            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={()=>setOpen(false)} className="py-2 px-3 rounded-md hover:bg-white">Home</Link>
              <Link to="/browse" onClick={()=>setOpen(false)} className="py-2 px-3 rounded-md hover:bg-white">Browse</Link>
              <Link to="/dashboard" onClick={()=>setOpen(false)} className="py-2 px-3 rounded-md hover:bg-white">Dashboard</Link>
              <Link to="/orders" onClick={()=>setOpen(false)} className="py-2 px-3 rounded-md hover:bg-white">Orders</Link>
              <Link to="/profile" onClick={()=>setOpen(false)} className="py-2 px-3 rounded-md hover:bg-white">Profile</Link>
              <button className="text-red-500 mt-4 text-left">Sign Out</button>
            </nav>
          </div>
          <div className="flex-1" onClick={()=>setOpen(false)} style={{background:'rgba(0,0,0,0.4)'}}></div>
        </aside>
      )}

      <footer className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="bg-white rounded-full shadow-md px-6 py-3 flex gap-6">
          <Link to="/" className="font-medium">Home</Link>
          <Link to="/browse" className="font-medium">Browse</Link>
          <Link to="/orders" className="font-medium">Cart</Link>
          <Link to="/profile" className="font-medium">Profile</Link>
        </div>
      </footer>
    </div>
  )
}

export default App
