import React, { useState, useCallback } from 'react'

const Generator = ({ setform }) => {
    const [length, setlength] = useState(8)
    const [isnumber, setisnumber] = useState(false)
    const [ischar, setischar] = useState(false)


    const generatepassword = useCallback(() => {
        let pass = ""
        let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
        if (isnumber) {
            str += "1234567890"
        }
        if (ischar) {
            str += "!@#$%^&*"
        }
        for (let i = 1; i <= length; i++) {
            let index = Math.floor(Math.random() * str.length)
            pass += str.charAt(index)
        }

        setform((form) => ({ ...form, password: pass }))
    }, [length, ischar, isnumber])

    const handlegenerate = () => {
        generatepassword()
    }

    const handlereset = () => {
        setform((form) => ({ ...form, password: "" }))
    }

    return (
        <div className="m-5 w-xs rounded-2xl p-5 shadow-[0_0_20px_#3b82f6] bg-black">
            <div className="flex flex-col gap-5 items-center my-4 mx-4">
                <div className='flex gap-5'>
                    <div>
                        <button className="relative group hover:cursor-pointer font-semibold"
                            onClick={handlegenerate}>

                            <span className="absolute inset-0 bg-blue-800 rounded-lg"></span>

                            <div className="transition bg-black relative border-2 px-2 py-1 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 flex items-center justify-center gap-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/umuwriak.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                />
                                <span>Generate</span>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className="relative group hover:cursor-pointer font-semibold"
                            onClick={handlereset}>

                            <span className="absolute inset-0 bg-blue-800 rounded-lg"></span>

                            <div className="transition bg-black relative border-2 px-2 py-1 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2 flex items-center justify-center gap-2">
                                <lord-icon
                                    src="https://cdn.lordicon.com/vgpkjbvw.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                />
                                <span>Reset</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="length">Length : {length}</label>
                    <input type="range"
                        value={length}
                        min={8}
                        max={20}
                        onChange={(e) => { setlength(e.target.value), handlereset() }}
                    />
                </div>
                <div className="flex gap-5">
                    <span>
                        <input type="checkbox"
                            className='cursor-pointer'
                            defaultChecked={isnumber}
                            onChange={() => {
                                setisnumber(!isnumber),
                                    handlereset()
                            }}
                            name="" id="" />
                        <label htmlFor="number">Numbers</label>
                    </span>
                    <span>
                        <input type="checkbox"
                            className='cursor-pointer'
                            defaultChecked={ischar}
                            onChange={() => {
                                setischar(!ischar),
                                    handlereset()
                            }}
                            name="" id="" />
                        <label htmlFor="symbol">Symbols</label>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Generator
