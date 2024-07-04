"use client"
 
import Link from 'next/link'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <main className="bg-slate-200 text-black mx-auto max-w-lg py-1 min-h-screen">
      <h2 className='text-center text-xl'>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link className='text-center text-xl hover:text-blue-800' href={'/'}> Go back home</Link>
        
    </main>
  )
}