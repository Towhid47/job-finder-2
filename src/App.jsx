import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Home from './components/Home/Home'
import JobDetailsPage from './components/JobDetailsPage/JobDetailsPage'
import Main from './components/Layouts/Main'

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
    }
  ])
  

  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
