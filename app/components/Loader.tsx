import React from 'react'

export default function Loader() {
  return (
    <div className='flex justify-center py-3'>
      <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-red-500'/>
    </div>
  )
}
