import React from 'react'

const MobileDownload = () => {
  return (
    <div className='h-[55vh]  w-full flex items-center justify-around ' >
        <div className='text-2xl flex flex-col gap-y-4 ' >
            <h1 className='uppercase'>Apply to jobs on-the go</h1>
            <p className='font-light  text-blue-800' >Jobringer Mobile App</p>
            <div className='flex gap-x-2' >

            <img src="https://www.jobringer.com/images/anroid.png" />
            <img src=" https://www.jobringer.com/images/ios.png" />
            </div>
           
        </div>
        <div className="flex scale-150  items-end justify-end">
        <img
          src="/mobile_look.png"
          alt="Mobile Look"
          className="w-2/3 h-auto"
        />
      </div>

    </div>
  )
}

export default MobileDownload