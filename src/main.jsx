import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Jobs from './Components/AppliedJobs/Jobs';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([

  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  },
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data2.json')
      },
      {
         path: 'job/:jobId',
         element: <JobDetails></JobDetails>,
        loader: () => fetch('/data2.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobs',
        element: <Jobs></Jobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
    
    ]
     
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
