import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Chart from 'react-apexcharts'
import { FaHome } from "react-icons/fa";

function Home() {
    return (
        <>

            <div className='w-auto h-[120px] bg-black text-white'>
                <h1 className='text-5xl pt-8 pl-5 flex'><span className='mr-4'>Dashboard</span> <FaHome/></h1>
            </div>
            <div className='flex flex-col bg-slate-50  h-full justify-between'>
                <div className='flex w-auto'>

                    <Card className="py-4 m-8 w-[15%]">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Users</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h1 className='text-2xl'>15</h1>
                        </CardBody>
                    </Card>

                    <Card className="py-4 m-8 w-[15%]">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Trek</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h1 className='text-2xl'>Trip : 4</h1>
                        </CardBody>
                    </Card>

                    <Card className="py-4 m-8 w-[15%]">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Fort</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h1 className='text-2xl'>Trip : 7</h1>
                        </CardBody>
                    </Card>

                    <Card className="py-4 m-8 w-[15%]">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Camp</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h1 className='text-2xl'>Trip : 2</h1>
                        </CardBody>
                    </Card>

                    <Card className="py-4 m-8 w-[15%]">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Bookings</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <h1 className='text-2xl'>4</h1>
                        </CardBody>
                    </Card>
                </div>
                <div className='w-auto'>
                    <Chart 
                    className="m-auto "
                        type='bar'
                        width={1200}
                        height={500}

                        series={[
                            {
                                name: "Trek",
                                data: [5, 6, 2,8]
                            },
                            {
                                name: "Fort",
                                data: [6, 2, 0,4]
                            },
                            {
                                name: "Camp",
                                data: [1, 1, 2, 3]
                            },
                        ]}

                        options={
                            {
                                chart:{
                                    id:"chartid",
                                },

                                title: {
                                    text: "Bookings",
                                    style: {
                                        fontSize: 20,
                                    }
                                },

                                xaxis:{
                            categories:["26/4/2024","2/5/2024","6/5/2024","8/5/2024"]
                                }
                            }
                        }

                        

                    ></Chart>
                </div>
            </div>
        </>
    )
}

export default Home


