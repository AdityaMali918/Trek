import React, { useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter,Input,Button} from "@nextui-org/react";
import {Image} from "@nextui-org/react";

function AdminLogin() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleLogin =async ()=>{

    }
  return (
    <div className='h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(https://img.veenaworld.com/wp-content/uploads/2020/08/Trekking-Near-Mumbai-A-List-of-Popular-One-Day-Treks-Near-Mumbai-scaled.jpg)`}}>

      <div className="absolute inset-0 bg-green bg-opacity-5 backdrop-blur-sm"></div>

      <Card  className='shadow-2xl bg-opacity-20 w-[480px]'>
        <CardHeader className='flex flex-col gap-1 capitalize text-3xl items-center'>
            <div className='flex flex-col gap-1 capitalize text-3xl items-center'>
                <Image src="/Images/Logo.jpg" alt='Logo' height={80} width={80} className='rounded-full'/>
                <span className='text-xl uppercase font-medium italic text-white'>
                    <span>
                        Trekkers Admin Login
                    </span>
                </span>
            </div> 
        </CardHeader>
        <CardBody className='flex flex-col items-center w-full justify-center'>
            <div className='flex flex-col gap-2 w-full'>
                <Input
                label='Email'
                type='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                 <Input
                label='Password'
                type='password'
                value={password}
                onChange={e=>setPassword(e.target.password)}
                />
            </div>
        </CardBody>
        <CardFooter className='flex flex-col gap-2 items-center justify-center'>
            <Button className=' text-white  text-md w-full bg-green-600 capitalize' onClick={handleLogin} >Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
//https://www.holidify.com/images/cmsuploads/compressed/green-mountain-india-kalavantin-durg-1007457_20190924135801.jpg
export default AdminLogin