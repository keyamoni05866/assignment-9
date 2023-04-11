import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div  className='grid col-span-1 justify-center place-items-center  mt-36'>
                    
                <div>
                <h1 className=' text-9xl text-cyan-700'>404</h1>
                </div>
             <div>
             <p className='text-4xl font-semibold mt-4 text-center'>Ooooppsss !!</p>
                 <h1 className='text-4xl font-semibold mt-4 '>You are in the wrong page</h1>
                 <button className=" ms-36 mt-7 py-4 px-8 apply text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">
        <Link to="/">    Go Home</Link>
          </button>
             </div>
        </div>
    );
};

export default ErrorPage;