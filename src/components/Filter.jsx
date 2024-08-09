import React from 'react'

function Filter(props) {
  return (
   <><div className='px-5 py-2  rounded-full border border-gray-400 bg-white shadow flex items-center justify-center font-medium gap-1' > {props.name} {props.icon}</div>
   </>
  )
}

export default Filter