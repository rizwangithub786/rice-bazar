import React from 'react'
import { Link } from 'react-router-dom'
import MillCard from '../components/MillCard'

export default function Home(){
  return (
    <div className="py-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-primary">Connect directly with rice mills</h1>
        <p className="mt-4 text-lg text-primary/70">Fresh quality rice at competitive prices. No middlemen.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/browse" className="px-6 py-3 bg-primary text-white rounded-md">Browse Old Rice →</Link>
          <Link to="/browse" className="px-6 py-3 border rounded-md">Browse New Rice →</Link>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold text-primary mb-4">Featured Mills <span className="text-sm text-primary/70">View All →</span></h2>
        <div className="grid gap-4">
          <MillCard name="Golden Grain Mill" address="14 Oak St, Anytown, CA 90210" rating="5.0" desc="new 6 months old high quality basmathi rice" verified/>
        </div>
      </section>

      <section className="my-8">
        <h3 className="text-3xl font-bold text-primary mb-4">Browse by Category</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">Basmati Rice</div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">Jasmine Rice</div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">Brown Rice</div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">White Rice</div>
        </div>
      </section>
    </div>
  )
}
