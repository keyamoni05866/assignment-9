import React from 'react';
import './Category.css'

const Category = ({data}) => {
    return (
        <div >
             <div className='category2 '>
                 <img src={data.icon} alt=""  className='p-3'/>
                 <h1  className='pb-2 ps-3 text-lg font-semibold'>{data.name}</h1>
                 <p className='ps-3 text-lg pb-3'>{data.available_jobs}+ Jobs Available</p>
             </div>
             
        </div>
    );
};

export default Category;