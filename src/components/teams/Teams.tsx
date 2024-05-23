
"use client";

// src/components/Team.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

const Team: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=4');
        setUsers(response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="pt-20 px-12">
      <div className="text-center mb-12">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {users.map((user, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden p-4 text-center">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{user.name.first} {user.name.last}</h3>
            <p className="text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;


// import Image, { StaticImageData } from 'next/image'
// import React from 'react'


// interface teamProps{
//     photo: StaticImageData,
//     name: string,
//     jobtitle: string,
// }

// const Teams = ({photo, name, jobtitle}: teamProps) => {
//   return (

//     <div className='w-full px-[50px]'>
//       <div className='grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-4'>
//          <div className='w-[300px] md:w-full'>
//         <Image src={photo} alt='' className='mb-4 md:w-full'/>
//         <div className='flex flex-row justify-between item-center'>
//             <div className=''>
//             <h3 className='text-[18px] mb-1'>{name}</h3>
//         </div>
//         <div>
//             <p className='text-xs mt-1'>{jobtitle}</p>
//         </div>
//         </div>
        
//       </div>

//       <div className='w-[300px] md:w-full'>
//         <Image src={photo} alt='' className='mb-4 md:w-full'/>
//         <div className='flex flex-row justify-between item-center'>
//             <div className=''>
//             <h3 className='text-[18px] mb-1'>{name}</h3>
//         </div>
//         <div>
//             <p className='text-xs mt-1'>{jobtitle}</p>
//         </div>
//         </div>
        
//       </div>
       
        
      
//     </div>

//     </div>
    
//   )
// }

// export default Teams
