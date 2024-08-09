import React from 'react'

function Filterr(props) {
  return (
    <><div className='px-2 py-3  rounded-[10px] border border-gray-300 bg-white shadow flex items-center justify-center font-medium mb-3' > {props.name} {props.icon}</div>
   </>
  )
}

export default Filterr