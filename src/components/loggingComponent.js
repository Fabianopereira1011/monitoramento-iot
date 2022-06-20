import React from 'react'
import Link from 'next/link'

const LoggingComponent = () => {

const  isAnimated = false;
  return (
    <div className={`text-7xl italic flex flex-col items-center justify-center h-screen w-full bg-cyan-400`}>
        <Link href="/api/auth/login">Login</Link>
    </div>
  )
}

export default LoggingComponent

//animate-ping text-7xl italic flex flex-col items-center justify-center h-screen w-full bg-cyan-400