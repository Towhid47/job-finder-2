import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Home from './components/Home/Home'
import JobDetailsPage from './components/JobDetailsPage/JobDetailsPage'
import Main from './components/Layouts/Main'

import errorImage from '../src/image/error.jpg';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
         {
           path : '/',
           element:<Home></Home>
         },
         {
           path :'home',
           element:<Home></Home>
         },
         {
           path:'applied-jobs',
           element:<AppliedJobs></AppliedJobs>
         },
         {
           path: 'about-us',
           element:<AboutUs></AboutUs>
         },
         {
           path:'job-details/:id',
           element:<JobDetailsPage></JobDetailsPage>
         }
      ]
    },
    {
      path:'*',
      element:<div className='w-1/2 mx-auto flex flex-col justify-center items-center h-screen'>
             <img src={errorImage} alt="" />
            <Link to='/'> <button className='mt-8 btn'>Back to Home Page</button></Link>
      </div>
    }
  ])
  

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
