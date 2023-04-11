import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold mt-2 underline'>Questions Answers</h1>

            <h1 className='text-2xl font-semibold ms-2 mt-2'>1.When we use Context API?</h1>
            <p className='text-xl mt-1'><span className=' font-semibold underline'>Answer:</span>The Context API in React is used when we need to share data between components in React Applications, without passing data through props manually at every level. Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>

            <h1 className='text-2xl font-semibold ms-2 mt-2'>2.What is Custom Hook?</h1>
            <p className='text-xl mt-1'><span className=' font-semibold underline'>Answer:</span>A Custom hook in React is a reusable function that encapsulates stateful logic and allows us to abstract away complex logic or behavior in our components. Custom hooks are simply JavaScript functions that start with the prefix "use" and use built-in hook like useState, useEffect, useContext and others.</p>


            <h1 className='text-2xl font-semibold ms-2 mt-2'>3.What is useRef?</h1>
            <p className='text-xl mt-2'><span className=' font-semibold underline'>Answer:</span>useRef is hook provided by React that allows us to create a mutable reference that persists across re-renders of our component the useRef hook returns a ref of object that has current property.The value of the current property can be set and accessed directly. </p>

            <h1 className='text-2xl font-semibold ms-2 mt-2 '>4.What is useMemo?</h1>
            <p className='text-xl mt-2 '><span className=' font-semibold underline'>Answer:</span>useMemo is a React hook that is used for optimizing the performance of functional components by memoizing the result of a function call. useMemo allows us to memoize the result of a function call and return the cached result when the same inputs are provided to the function. This can help to avoid unnecessary re-renders of the component. </p>
        </div>
    );
};

export default Blog;