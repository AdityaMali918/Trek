import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Card, CardBody,Button } from "@nextui-org/react";
import { FaFortAwesome } from "react-icons/fa";
import { Link, useParams, Navigate } from "react-router-dom";

function Fort() {
  const rows = [
    {
      key: "1",
      name: "Ajay",
      fort: "Kalsubai trek",
      people: 2,
      status: `10$`,
    },
    {
      key: "2",
      name: "Raj",
      fort: "Kalsubai trek",
      people: 3,
      status: `15$`,
    },
    {
      key: "3",
      name: "Vivek",
      fort: "Vasota trek",
      people: 5,
      status: `25$`,
    },

  ];

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "fort",
      label: "Fort trek",
    },
    {
      key: "people",
      label: "No. of People",
    },
    {
      key: "status",
      label: "TOTAL MONEY",
    },

  ];



  return (
    <>
      <div className='w-full h-[120px] bg-black text-white '>
        <h1 className='text-5xl pt-8 pl-5 flex'><span className='mr-4'>Fort treks</span>  <FaFortAwesome/></h1>
      </div>
      <div className='flex flex-col bg-slate-100 h-fit justify-between'>
        <div>
          <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div >
          <h1 className='text-4xl flex items-center text-green-400 mx-3 mt-3 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
            <span> On Going Camps </span></h1>
          <div className='flex flex-col h-fit' >
            <div className='flex flex-row bg-white rounded-lg h-[50%] m-6'>
              <div className='h-[15%] rounded-lg m-3 '>
                <img src="/Images/fort.jpg" className="rounded-lg" width={200} height={300} alt="" />
              </div>

              <div className='flex flex-col '>
              <div className='m-1 font-bold'>
                  Shivneri Fort trek
                </div>
                <div className='m-1 font-semibold flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                  <span>Date: 26/5/2024</span>
                </div>
                <div className='m-1 font-semibold flex items-center' >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>

                  <span>Per Person: 5$</span></div>
                <div className='m-1 font-semibold flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span> Days: 1  </span>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center m-3'>
          <div>
          <Link to={"/admin/dashboard/addtrek/fort"}>
          <Button variant='shadow' color='success' radius='full' className='text-white'>
            Add Fort Trek
          </Button>
          </Link>
          </div>

          <div>
          <Button variant='shadow' color='danger' radius='full' className='ml-2'>
            Delete trek
          </Button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Fort