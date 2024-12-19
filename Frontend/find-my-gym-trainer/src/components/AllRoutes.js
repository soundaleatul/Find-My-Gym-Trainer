import React from 'react'
import{Routes,Route} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import AdminLogin from '../pages/login/AdminLogin';
import CustomerLogin from '../pages/login/CustomerLogin'
import  TrainerLogin from '../pages/login/TrainerLogin'
import CustomerRegister from '../pages/AdminPrevelaiges/CustomerRegister';
import TrainerRegister from '../pages/AdminPrevelaiges/TrainerRegister';
import AdminProfile from '../pages/profile/AdminProfile';
import CustomerProfile from '../pages/profile/CustomerProfile';
import TrainerProfile from '../pages/profile/TrainerProfile';
import AllCustomers from './AllCustomers';
import AllTrainers from './AllTrainers';
import EditCustomer from '../pages/EditPages/EditCustomer';
import EditTrainer from '../pages/EditPages/EditTrainer';
import TrainerList from './TrainerList';
import AllPackages from './AllPackages';
import AddPackage from '../pages/AdminPrevelaiges/AddPackage';
import EditPackage from '../pages/EditPages/EditPackage';
import NavPackages from './NavPackages';
import BmiCalculator from '../bmi/BmiCalculator'
import SignUp from './SignUp';
import PageNotFound from './PageNotFound';



const AllRoutes = () => {
  return (
    <Routes>

              {/* these route are for navbar */}
              <Route path='/' element={<Home/>}/>
              <Route path='AboutUs' element={<AboutUs/>}/>
              <Route path='/navtrainer' element={<TrainerList/>}/>
              <Route path='/navpackages' element={<NavPackages/>}></Route>
              <Route path='/bmicalculator' element={<BmiCalculator/>}/>

              {/* this route is for page not found */}
              <Route path='*' element={<PageNotFound/>}/>

              {/* this route is for outsider customer registration */}
              <Route path='/getmembership' element={<SignUp/>}/>

              {/* these routes are for login dropdown of navbar which gives 3 types of login options */}
              <Route path='admin' element={<AdminLogin/>} />
              <Route path='customer' element={<CustomerLogin/>}/>
              <Route path='/trainer' element={<TrainerLogin/>} />

              {/*below route is of admin profile after succesfull login of admin */}
              <Route path='admin/profile' element={<AdminProfile/>}/>
              {/* <Route path='admin/profile/:id' element={<AdminProfile/>}/> */}
                 
            
              {/*  these route enables admin prevailages like customer/trainer registration  */}
              <Route path='admin/profile/customer/signup' element={<CustomerRegister/>}/>
              <Route path='admin/profile/trainer/signup' element={<TrainerRegister/>}/>
             
              {/* <Route path='admin/profile/:id/customer/signup' element={<CustomerRegister/>}/> */}
              {/* <Route path='admin/profile/:id/trainer/signup' element={<TrainerRegister/>}/> */}

              {/* admin can view list of all customers and edit the details of customers */}
              <Route path='/allcustomers' element={<AllCustomers/>}/>
              <Route path='/editCustomer/:id' element={<EditCustomer/>}></Route>

              {/* this route provide admin the view of All packages present in gym, gives power of editing and adding new packages */}
              <Route path='/allpackages' element={<AllPackages/>}></Route>
              <Route path='/allpackages/addpackage' element={<AddPackage/>}></Route>
              <Route path='/editPackage/:id' element={<EditPackage/>}></Route>


              {/* admin can view all trainers list and edit trainer details */}
              <Route path='/alltrainers' element={<AllTrainers/>}/>
              <Route path='/editTrainer/:id' element={<EditTrainer/>}></Route>

              {/* after succesfull login of customer & trainer they will be able to see their profile using these route */}
            
              <Route path='customer/profile' element={<CustomerProfile/>}/>
              {/* <Route path='customer/profile/:id' element={<CustomerProfile/>}/> */}
             
              <Route path='trainer/profile' element={<TrainerProfile/>}/>
              {/* <Route path='trainer/profile/:id' element={<TrainerProfile/>}/> */}


              
      </Routes>

  )
}

export default AllRoutes
