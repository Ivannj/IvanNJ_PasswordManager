import React from 'react'

export default function layoutRoutes({ children }: Readonly<{ children: React.ReactNode}>) {
  return ( 
  <main className="h-full">
    <div className="flex justify-between lg:hidden px-6 py-3 items-center bg-blue-800">
      <div className="py-1 text-white">

        <h1>Logo</h1>
      </div>
    </div>
  </main> 
  )


  
    
  
}
