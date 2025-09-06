import React from 'react'
import { useEffect, useState } from 'react';

const Viewer = ({ infoarray, setinfoarray }) => {

  const [popup, setpopup] = React.useState("");

  const getPasswords = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setinfoarray(passwords)
  }


  useEffect(() => {
    getPasswords()
  }, [])


  const showpopup = (msg) => {
    setpopup(msg);
    setTimeout(() => setpopup(""), 2000); 
  };


  const copytext = (text) => {
    navigator.clipboard.writeText(text)
    showpopup("Password copied!");
  }

  const deletedetail = async (id) => {
    let c = confirm("Permanently delete this password?")
    if (c) {
      setinfoarray(infoarray.filter(item => item.id !== id))

      await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
    }
    showpopup("Password deleted!");

  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-24 py-4">
      <div className="rounded-2xl p-4 sm:p-5 shadow-[0_0_20px_#3b82f6] bg-black max-w-4xl mx-auto md:mx-0">
        <h2 className="font-bold text-xl sm:text-2xl mb-4 text-center sm:text-left">My Passwords</h2>
        {infoarray.length === 0 && <div> No passwords to show</div>}
        {infoarray.length != 0 &&
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full table-auto border border-blue-900 font-semibold text-white text-sm sm:text-base">
              <thead>
                <tr className="bg-blue-900 text-blue-300">
                  <th className="px-4 sm:px-6 py-3 text-left">Website</th>
                  <th className="px-4 sm:px-6 py-3 text-left">Username</th>
                  <th className="px-4 sm:px-6 py-3 text-left">Password</th>
                  <th className="px-4 sm:px-6 py-3 text-left">Delete</th>
                </tr>
              </thead>

              <tbody className="bg-blue-950 divide-y divide-blue-800">
                {infoarray.map((item, idx) => {
                  return <tr key={idx} className="hover:bg-black transition duration-200">
                    <td className="px-4 sm:px-6 py-3 break-all">
                      <a href={item.site} target='_blank'>{item.site}</a>
                    </td>
                    <td className="px-4 sm:px-6 py-3 break-all">{item.username}</td>
                    <td className="px-4 sm:px-6 py-3 flex items-center gap-2">
                      <div className="whitespace-nowrap">{"•".repeat(item.password.length)}</div>
                      <button className="hover:cursor-pointer" onClick={() => { copytext(item.password) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/xuoapdes.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                        ></lord-icon>
                      </button>
                    </td>
                    <td className="px-4 sm:px-6 py-3">
                      <button className="hover:cursor-pointer" onClick={() => { deletedetail(item.id) }}>
                        <lord-icon
                          src="https://cdn.lordicon.com/xyfswyxf.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                        ></lord-icon>
                      </button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>}

      </div>
      {popup && (
        <div className="fixed bottom-5 right-5 bg-blue-800 text-white font-bold px-4 py-2 rounded-xl shadow-xl animate-fade-in-out z-50">
          {popup}
        </div>
      )}

    </div>

  )
}

export default Viewer
