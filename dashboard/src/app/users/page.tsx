import React from 'react'
import { columns, User } from './columns'
import { DataTable } from './data-table';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const getData = async (): Promise<User[]> => {
  return [
    {
      "id": "728ed521",
      "status": "active",
      "fullName": "Ahmed Khan",
      "email": "ahmedkhan@gmail.com",
      "avatar": "/users/1.png"
    },
    {
      "id": "728ed522",
      "status": "inactive",
      "fullName": "Fatima Ali",
      "email": "fatimaali@gmail.com",
      "avatar": "/users/2.png"
    },
    {
      "id": "728ed523",
      "status": "active",
      "fullName": "Usman Siddiqui",
      "email": "usmansiddiqui@gmail.com",
      "avatar": "/users/3.png"
    },
    {
      "id": "728ed524",
      "status": "inactive",
      "fullName": "Samina Tariq",
      "email": "saminatariq@gmail.com",
      "avatar": "/users/4.png"
    },
    {
      "id": "728ed525",
      "status": "active",
      "fullName": "Hina Raza",
      "email": "hinaraza@gmail.com",
      "avatar": "/users/5.png"
    },
    {
      "id": "728ed526",
      "status": "inactive",
      "fullName": "Zain Abbas",
      "email": "zainabbas@gmail.com",
      "avatar": "/users/6.png"
    },
    {
      "id": "728ed527",
      "status": "active",
      "fullName": "Nadia Rehman",
      "email": "nadiarehman@gmail.com",
      "avatar": "/users/7.png"
    },
    {
      "id": "728ed528",
      "status": "inactive",
      "fullName": "Bushra Javed",
      "email": "bushrajaved@gmail.com",
      "avatar": "/users/8.png"
    },
    {
      "id": "728ed529",
      "status": "active",
      "fullName": "Tariq Mahmood",
      "email": "tariqmahmood@gmail.com",
      "avatar": "/users/9.png"
    },
    {
      "id": "728ed52a",
      "status": "inactive",
      "fullName": "Imran Qureshi",
      "email": "imranqureshi@gmail.com",
      "avatar": "/users/10.png"
    },
    {
      "id": "728ed52b",
      "status": "active",
      "fullName": "Bilal Shah",
      "email": "bilalshah@gmail.com",
      "avatar": "/users/11.png"
    },
    {
      "id": "728ed52c",
      "status": "inactive",
      "fullName": "Kashif Aziz",
      "email": "kashifaziz@gmail.com",
      "avatar": "/users/12.png"
    },
    {
      "id": "728ed52d",
      "status": "active",
      "fullName": "Shazia Akhtar",
      "email": "shaziaakhtar@gmail.com",
      "avatar": "/users/13.png"
    },
    {
      "id": "728ed52e",
      "status": "inactive",
      "fullName": "Junaid Iqbal",
      "email": "junaidiqbal@gmail.com",
      "avatar": "/users/14.png"
    },
    {
      "id": "728ed52f",
      "status": "active",
      "fullName": "Rizwan Butt",
      "email": "rizwanbutt@gmail.com",
      "avatar": "/users/15.png"
    },
    {
      "id": "728ed52g",
      "status": "inactive",
      "fullName": "Saba Mir",
      "email": "sabamir@gmail.com",
      "avatar": "/users/16.png"
    },
    {
      "id": "728ed52h",
      "status": "active",
      "fullName": "Areeba Haider",
      "email": "areebahaider@gmail.com",
      "avatar": "/users/17.png"
    },
    {
      "id": "728ed52i",
      "status": "inactive",
      "fullName": "Farhan Zafar",
      "email": "farhanzafar@gmail.com",
      "avatar": "/users/18.png"
    },
    {
      "id": "728ed52j",
      "status": "active",
      "fullName": "Asma Khalid",
      "email": "asmakhalid@gmail.com",
      "avatar": "/users/19.png"
    },
    {
      "id": "728ed52k",
      "status": "inactive",
      "fullName": "Shahbaz Niazi",
      "email": "shahbazniazi@gmail.com",
      "avatar": "/users/20.png"
    },
    {
      "id": "728ed52l",
      "status": "active",
      "fullName": "Lubna Saeed",
      "email": "lubnasaeed@gmail.com",
      "avatar": "/users/21.png"
    },
    {
      "id": "728ed52m",
      "status": "inactive",
      "fullName": "Sana Jamil",
      "email": "sanajamil@gmail.com",
      "avatar": "/users/22.png"
    },
    {
      "id": "728ed52n",
      "status": "active",
      "fullName": "Kamal Nasir",
      "email": "kamalnasir@gmail.com",
      "avatar": "/users/23.png"
    },
    {
      "id": "728ed52o",
      "status": "inactive",
      "fullName": "Yasir Mehmood",
      "email": "yasirmehmood@gmail.com",
      "avatar": "/users/24.png"
    },
    {
      "id": "728ed52p",
      "status": "active",
      "fullName": "Fahad Hussain",
      "email": "fahadhussain@gmail.com",
      "avatar": "/users/25.png"
    },
    {
      "id": "728ed52q",
      "status": "inactive",
      "fullName": "Mahnoor Ilyas",
      "email": "mahnoorilyas@gmail.com",
      "avatar": "/users/26.png"
    },
    {
      "id": "728ed52r",
      "status": "active",
      "fullName": "Owais Gill",
      "email": "owaisgill@gmail.com",
      "avatar": "/users/27.png"
    },
    {
      "id": "728ed52s",
      "status": "inactive",
      "fullName": "Ibrahim Chaudhry",
      "email": "ibrahimchaudhry@gmail.com",
      "avatar": "/users/28.png"
    },
    {
      "id": "728ed52t",
      "status": "active",
      "fullName": "Adeel Mughal",
      "email": "adeelmughal@gmail.com",
      "avatar": "/users/29.png"
    },
    {
      "id": "728ed52u",
      "status": "inactive",
      "fullName": "Noman Asif",
      "email": "nomanasif@gmail.com",
      "avatar": "/users/30.png"
    },
    {
      "id": "728ed52v",
      "status": "active",
      "fullName": "Mehwish Aftab",
      "email": "mehwishaftab@gmail.com",
      "avatar": "/users/31.png"
    },
    {
      "id": "728ed52w",
      "status": "inactive",
      "fullName": "Waleed Shahid",
      "email": "waleedshahid@gmail.com",
      "avatar": "/users/32.png"
    },
    {
      "id": "728ed52x",
      "status": "active",
      "fullName": "Nargis Sattar",
      "email": "nargissattar@gmail.com",
      "avatar": "/users/33.png"
    },
    {
      "id": "728ed52y",
      "status": "inactive",
      "fullName": "Taha Anwar",
      "email": "tahaanwar@gmail.com",
      "avatar": "/users/34.png"
    },
    {
      "id": "728ed52z",
      "status": "active",
      "fullName": "Laiba Zeeshan",
      "email": "laibazeeshan@gmail.com",
      "avatar": "/users/35.png"
    },
    {
      "id": "728ed521f",
      "status": "inactive",
      "fullName": "Sundas Amin",
      "email": "sundasamin@gmail.com",
      "avatar": "/users/36.png"
    }
  ]
};


const UsersPage = async () => {

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
            <BreadcrumbPage>Users</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default UsersPage