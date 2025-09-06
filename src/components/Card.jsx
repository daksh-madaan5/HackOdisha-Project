import React from 'react'
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';



const Card = ({ form, setform, infoarray, setinfoarray }) => {



  const [visible, setvisible] = useState(false)

  const savedetail = async () => {
    setinfoarray([...infoarray, { ...form, id: uuidv4() }])
    await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
    setform({ site: "", username: "", password: "" })
    console.log(form)
  }

  const handlechange = (e) => {
    setform(form => ({ ...form, [e.target.name]: e.target.value }))
  }

  const visiblepaasword = () => {
    setvisible(!visible)
  }

  return (
    <div className="md:m-5 w-sm md:w-lg rounded-2xl p-5 shadow-[0_0_20px_#3b82f6] bg-black">
      <div className="flex flex-col gap-3 items-center my-4 mx-4">

        <input type="text"
          className="bg-blue-200 text-black p-2 w-full font-semibold rounded-xl"
          placeholder="Website URL"
          name='site'
          value={form.site}
          onChange={handlechange} />
        <input type="text"
          className="bg-blue-200 text-black p-2 w-full font-semibold rounded-xl"
          placeholder="Username"
          name='username'
          value={form.username}
          onChange={handlechange} />

        <div className="flex flex-col sm:flex-row gap-5 sm:justify-between items-center w-full">
          <div className='relative'>
            <input type={visible ? "text" : "password"}
              className="bg-blue-200 text-black p-2 font-semibold rounded-xl"
              placeholder="Password"
              name='password'
              value={form.password}
              onChange={handlechange} />
            <span className='absolute right-[8px] top-[10px] cursor-pointer'
              onClick={visiblepaasword}>
              <img width={20} src={visible ? "/eye.png" : "/eyecross.png"} alt="eye" />
            </span>
          </div>


          <div>
            <button className="relative group hover:cursor-pointer font-semibold"
              onClick={savedetail}>

              <span className="absolute inset-0 bg-blue-800 rounded-lg"></span>

              <div className="transition bg-black relative border-2 px-2 py-1 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 flex items-center justify-center gap-2">
                <lord-icon
                  src="https://cdn.lordicon.com/efxgwrkc.json"
                  trigger="hover"
                  colors="primary:#ffffff">
                </lord-icon>
                <span>Save Password</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
