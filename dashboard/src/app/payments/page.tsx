import React from 'react'
import { columns, Payment } from './columns'
import { DataTable } from './data-table';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const getData = async (): Promise<Payment[]> => {
  return [
    {
      "id": "728ed521",
      "amount": 134,
      "status": "processing",
      "fullName": "Ahmed Khan",
      "email": "ahmedkhan@gmail.com",
      "userId": "101"
    },
    {
      "id": "728ed522",
      "amount": 124,
      "status": "success",
      "fullName": "Fatima Ali",
      "email": "fatimaali@gmail.com",
      "userId": "202"
    },
    {
      "id": "728ed523",
      "amount": 167,
      "status": "success",
      "fullName": "Usman Siddiqui",
      "email": "usmansiddiqui@gmail.com",
      "userId": "303"
    },
    {
      "id": "728ed524",
      "amount": 156,
      "status": "failed",
      "fullName": "Samina Tariq",
      "email": "saminatariq@gmail.com",
      "userId": "404"
    },
    {
      "id": "728ed525",
      "amount": 145,
      "status": "success",
      "fullName": "Hina Raza",
      "email": "hinaraza@gmail.com",
      "userId": "505"
    },
    {
      "id": "728ed526",
      "amount": 189,
      "status": "pending",
      "fullName": "Zain Abbas",
      "email": "zainabbas@gmail.com",
      "userId": "606"
    },
    {
      "id": "728ed527",
      "amount": 178,
      "status": "processing",
      "fullName": "Nadia Rehman",
      "email": "nadiarehman@gmail.com",
      "userId": "707"
    },
    {
      "id": "728ed528",
      "amount": 190,
      "status": "success",
      "fullName": "Bushra Javed",
      "email": "bushrajaved@gmail.com",
      "userId": "808"
    },
    {
      "id": "728ed529",
      "amount": 134,
      "status": "failed",
      "fullName": "Tariq Mahmood",
      "email": "tariqmahmood@gmail.com",
      "userId": "909"
    },
    {
      "id": "728ed52a",
      "amount": 543,
      "status": "success",
      "fullName": "Imran Qureshi",
      "email": "imranqureshi@gmail.com",
      "userId": "110"
    },
    {
      "id": "728ed52b",
      "amount": 234,
      "status": "pending",
      "fullName": "Bilal Shah",
      "email": "bilalshah@gmail.com",
      "userId": "220"
    },
    {
      "id": "728ed52c",
      "amount": 345,
      "status": "success",
      "fullName": "Kashif Aziz",
      "email": "kashifaziz@gmail.com",
      "userId": "330"
    },
    {
      "id": "728ed52d",
      "amount": 335,
      "status": "failed",
      "fullName": "Shazia Akhtar",
      "email": "shaziaakhtar@gmail.com",
      "userId": "440"
    },
    {
      "id": "728ed52e",
      "amount": 664,
      "status": "pending",
      "fullName": "Junaid Iqbal",
      "email": "junaidiqbal@gmail.com",
      "userId": "550"
    },
    {
      "id": "728ed52f",
      "amount": 332,
      "status": "success",
      "fullName": "Rizwan Butt",
      "email": "rizwanbutt@gmail.com",
      "userId": "660"
    },
    {
      "id": "728ed52g",
      "amount": 413,
      "status": "failed",
      "fullName": "Saba Mir",
      "email": "sabamir@gmail.com",
      "userId": "770"
    },
    {
      "id": "728ed52h",
      "amount": 345,
      "status": "pending",
      "fullName": "Areeba Haider",
      "email": "areebahaider@gmail.com",
      "userId": "880"
    },
    {
      "id": "728ed52i",
      "amount": 754,
      "status": "success",
      "fullName": "Farhan Zafar",
      "email": "farhanzafar@gmail.com",
      "userId": "990"
    },
    {
      "id": "728ed52j",
      "amount": 643,
      "status": "failed",
      "fullName": "Asma Khalid",
      "email": "asmakhalid@gmail.com",
      "userId": "111"
    },
    {
      "id": "728ed52k",
      "amount": 543,
      "status": "pending",
      "fullName": "Shahbaz Niazi",
      "email": "shahbazniazi@gmail.com",
      "userId": "222"
    },
    {
      "id": "728ed52l",
      "amount": 324,
      "status": "success",
      "fullName": "Lubna Saeed",
      "email": "lubnasaeed@gmail.com",
      "userId": "333"
    },
    {
      "id": "728ed52m",
      "amount": 123,
      "status": "pending",
      "fullName": "Sana Jamil",
      "email": "sanajamil@gmail.com",
      "userId": "444"
    },
    {
      "id": "728ed52n",
      "amount": 422,
      "status": "failed",
      "fullName": "Kamal Nasir",
      "email": "kamalnasir@gmail.com",
      "userId": "555"
    },
    {
      "id": "728ed52o",
      "amount": 712,
      "status": "success",
      "fullName": "Yasir Mehmood",
      "email": "yasirmehmood@gmail.com",
      "userId": "666"
    },
    {
      "id": "728ed52p",
      "amount": 360,
      "status": "success",
      "fullName": "Fahad Hussain",
      "email": "fahadhussain@gmail.com",
      "userId": "777"
    },
    {
      "id": "728ed52q",
      "amount": 454,
      "status": "pending",
      "fullName": "Mahnoor Ilyas",
      "email": "mahnoorilyas@gmail.com",
      "userId": "888"
    },
    {
      "id": "728ed52r",
      "amount": 382,
      "status": "success",
      "fullName": "Owais Gill",
      "email": "owaisgill@gmail.com",
      "userId": "999"
    },
    {
      "id": "728ed52s",
      "amount": 328,
      "status": "failed",
      "fullName": "Ibrahim Chaudhry",
      "email": "ibrahimchaudhry@gmail.com",
      "userId": "112"
    },
    {
      "id": "728ed52t",
      "amount": 250,
      "status": "success",
      "fullName": "Adeel Mughal",
      "email": "adeelmughal@gmail.com",
      "userId": "223"
    },
    {
      "id": "728ed52u",
      "amount": 658,
      "status": "success",
      "fullName": "Noman Asif",
      "email": "nomanasif@gmail.com",
      "userId": "334"
    },
    {
      "id": "728ed52v",
      "amount": 691,
      "status": "success",
      "fullName": "Mehwish Aftab",
      "email": "mehwishaftab@gmail.com",
      "userId": "445"
    },
    {
      "id": "728ed52w",
      "amount": 969,
      "status": "success",
      "fullName": "Waleed Shahid",
      "email": "waleedshahid@gmail.com",
      "userId": "556"
    },
    {
      "id": "728ed52x",
      "amount": 617,
      "status": "failed",
      "fullName": "Nargis Sattar",
      "email": "nargissattar@gmail.com",
      "userId": "667"
    },
    {
      "id": "728ed52y",
      "amount": 173,
      "status": "success",
      "fullName": "Taha Anwar",
      "email": "tahaanwar@gmail.com",
      "userId": "778"
    },
    {
      "id": "728ed52z",
      "amount": 843,
      "status": "success",
      "fullName": "Laiba Zeeshan",
      "email": "laibazeeshan@gmail.com",
      "userId": "889"
    },
    {
      "id": "728ed521f",
      "amount": 914,
      "status": "pending",
      "fullName": "Sundas Amin",
      "email": "sundasamin@gmail.com",
      "userId": "990"
    }
  ]
};

const PaymentsPage = async () => {

  const data = await getData();

  return (
    <div className='space-y-5'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Payments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PaymentsPage