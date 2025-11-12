import React from 'react'

export default function MillCard({name, address, rating, desc, verified}: any){
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-xl font-semibold">{name}</h4>
          <p className="text-sm text-primary/60 mt-1">{address}</p>
        </div>
        {verified && <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Verified</div>}
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold">{rating}</span>
          <span className="text-sm text-primary/60">(-3 reviews)</span>
        </div>
        <p className="text-primary/70 mt-3">{desc}</p>
      </div>
    </div>
  )
}
