import React, { useRef } from 'react'
import { Input } from "@nextui-org/react";
import { Link, useParams, Navigate } from "react-router-dom";
import { MdAddLocationAlt } from "react-icons/md";
import { RadioGroup, Radio } from "@nextui-org/react";
import { FaBus } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { PiBowlFoodFill } from "react-icons/pi";
import { GiForestCamp } from "react-icons/gi";
import { RiFirstAidKitFill } from "react-icons/ri";
import { FaToolbox } from "react-icons/fa";

function AddTrek() {
  const { name } = useParams();
  console.log(name)

  function inputHeader(text) {
    return (<h2 className="text-2xl mt-4 ml-2" >{text}</h2>);
  }

  function inputDescription(text) {
    return (<p className="text-gray-500 text-sm ml-2">{text}</p>);
  }

  function preInput(header, descrip) {
    return (<>
      {inputHeader(header)}
      {inputDescription(descrip)}
    </>);
  }
  return (
    <>
      <div className='w-full h-[120px] bg-black text-white'>
        <h1 className='text-5xl pt-8 pl-5 flex'><span className='mr-4'>Trek</span> <MdAddLocationAlt /></h1>
      </div>
      {preInput("Place Name", "Title name of house")}
      <Input
        isReadOnly
        type="text"
        label="Place"
        variant="bordered"
        //   defaultValue="junior@nextui.org"
        className="w-[95%] m-2"
      />

      {preInput("Address", "Address to this place")}
      <Input
        isReadOnly
        type="text"
        label="Address"
        variant="bordered"
        //   defaultValue="junior@nextui.org"
        className="w-[95%] m-2"
      />

{preInput("Trip", "")}
      <RadioGroup
        className='m-2'
        defaultValue={name === "trek" ? "trek" : name === "camp" ? "camp" : "fort"}
      >
        <Radio value="trek">
          Trek
        </Radio>
        <Radio value="fort" >
          Fort
        </Radio>
        <Radio value="camp" >
          Camp
        </Radio>
      </RadioGroup>

      {preInput("Photos", "more=better")}
      <Input
        isReadOnly
        type="text"
        label="Image link..."
        variant="bordered"
        //   defaultValue="junior@nextui.org"
        className="w-[95%] m-2"
      />
      <div className='flex w-[30%]'>
       

        <label className="h-32 m-2 grow cursor-pointer flex items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 w-[20%]">
                <input type="file" multiple className="hidden  w-[30%]" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Upload
            </label>

            <button className="bg-gray-200  rounded-2xl px-6 py-1 m-2 my-2 hover:bg-gray-300 hover:text-white transition-all flex items-center " ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
</svg>
 Add&nbsp;photo </button>
            </div>
      {preInput("Description", "Description of place")}
      <textarea
        className="w-[95%] m-2 h-200px border my-2 py-2 px-3 rounded-2xl hover:border-gray-400" cols="30" rows="8" />

{preInput("Facility", "Facility provided during trips")}

<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 m-2 gap-2 my-4 '>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer' >
  <input type="checkbox" name="" id="" />
  <FaBus/>
  <span>Travels</span>
  </label>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer'>
  <input type="checkbox" name="" id="" />
  <FaBottleWater/>
  <span>Water bottel</span>
  </label>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer' >
  <input type="checkbox" name="" id="" />
  <MdFreeBreakfast/>
  <span>Breakfast</span>
  </label>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer'>
  <input type="checkbox" name="" id="" />
  <MdFastfood/>
  <span>Lunch</span>
  </label>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer'>
  <input type="checkbox" name="" id="" />
  <PiBowlFoodFill/>
  <span>Dinner</span>
  </label>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer'>
  <input type="checkbox" name="" id="" />
  <GiForestCamp/>
  <span>Camp setup</span>
  </label>
  
  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer'>
  <input type="checkbox" name="" id="" />
  <RiFirstAidKitFill/>
  <span>First Aid</span>
  </label>

  <label className='border p-4 rounded-2xl flex gap-2 items-center cursor-pointer' >
  <input type="checkbox" name="" id="" />
  <FaToolbox/> 
  <span>Trek Equipment</span>
  </label>
  
</div>

{preInput("Rules", "Trek rules.")}
<textarea
        className="w-[95%] m-2 h-200px border my-2 py-2 px-3 rounded-2xl hover:border-gray-400" cols="30" rows="8" />

{preInput('Time and Date', 'Add trek starting datetime and ending datetime ')}
                    <div className="grid gap-2 grid-cols-2 md:grid-cols-4 m-2">
                        <div className="mt-2 -mb-1">
                            <h3>Check in time</h3>
                            <input type="datetime-local" placeholder="14:00"
                                className="w-full border my-2 py-2 px-3 rounded-2xl hover:border-gray-400"
                               />
                               
                        </div>
                        <div className="mt-2 -mb-1">
                            <h3>Check out time</h3>
                            <input type="datetime-local" placeholder="12:00"
                                className="w-full border my-2 py-2 px-3 rounded-2xl hover:border-gray-400"
                                 />
                        </div>
                        <div className="mt-2 -mb-1">
                            <h3>Max number of guests</h3>
                            <input type="number" placeholder="4"
                                className="w-full border my-2 py-2 px-3 rounded-2xl hover:border-gray-400"
                                o />
                        </div>
                        <div className="mt-2 -mb-1">
                            <h3>Per person cost</h3>
                            <input type="number" placeholder="4"
                                className="w-full border my-2 py-2 px-3 rounded-2xl hover:border-gray-400"
                           />
                        </div>
                    </div>



    </>

  )
}

export default AddTrek