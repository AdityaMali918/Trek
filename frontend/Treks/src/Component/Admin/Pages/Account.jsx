import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue,Card, CardBody } from "@nextui-org/react";
import { FaBook } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";

function Account() {

  const rows = [
    {
      key: "1",
      name: "Trek",
      book: 8,
      status: `210$`,
    },
    {
      key: "2",
      name: "Fort",
      book: 3,
      status: `150$`,
    },
    {
      key: "4",
      name: "Camp",
      book: 2,
      status: `250$`,
    },
  ];

  const columns = [
    {
      key: "name",
      label: "ACTIVITY",
    },
    {
      key: "book",
      label: "BOOKING",
    },
    {
      key: "status",
      label: "TOTAL MONEY",
    },
  ];

  return (
    <>
      <div className='w-full h-[120px] bg-black text-white'>
        <h1 className='text-5xl pt-8 pl-5 flex items-center'><span className='mr-4'>Account</span> <MdAccountBalanceWallet/></h1>
      </div>
      <div className='flex flex-col bg-slate-50  justify-between'>
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

        <Card className='m-2'>
      <CardBody>
        <p><MdAccountBalanceWallet size={25}/>Total Money : 610$</p>
      </CardBody>
    </Card>

    <Card className='m-2'>
      <CardBody>
        <p><FaBook size={21}/> Total Bookings : 13</p>
      </CardBody>
    </Card>
        </div>
      </div>
    </>
  )
}

export default Account