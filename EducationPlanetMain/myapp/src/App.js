import React from 'react';
import "./app.css"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Navbar2 from './components/admin/Navbar2' ;
// import Header2 from './components/admin/Header2';
// Import  components/pages
// import Dashboard from './pages/admin/Dashboard';
// import NavigationBar from './pages/admin/NavigationBar';
// import Announcements from './pages/admin/Announcements';
// import PersonalisedGroupFacilitation from './pages/admin/PersonalisedGroupFacilitation';
// import InternationalCompetitionHub from './pages/admin/International_Competition_Hub';
// import BridgeTheGapProgram from './pages/admin/Bridge_The_Gap_Program';
// import SuccessStories from './pages/admin/SuccessStories';
// import Registration from './pages/admin/Registration';
// import AboutUs from './pages/admin/AboutUs';
// import Contact from './pages/admin/Contact';
// import WhyUs from './pages/admin/WhyUs';
// import Settings from './pages/admin/Settings';
// import Footer from './pages/admin/Footer';
// import Content from './pages/admin/Content';
import StudNavbar from './components/student/StudNavbar'
import Homepage from './pages/student/Homepage'
import Courses from './pages/student/Courses'
import SuccessStories from './pages/student/SuccessStories'
import Registration from './pages/student/Registration'
import AboutUs from './pages/student/AboutUs'
import Contact from './pages/student/Contact'

   
    function App() {
      return (
        <>
        {/* <Router>
          <div className="App">
          
            <Header2/>
          
            <Navbar2/>
            <Content>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/navigationBar" element={<NavigationBar/>} />
              <Route path="/announcements" element={<Announcements/>} />
              <Route path="/personalised" element={<PersonalisedGroupFacilitation/>} />
              <Route path="/international" element={<InternationalCompetitionHub/>} />
              <Route path="/bridge" elementt={<BridgeTheGapProgram/>} />
              <Route path="/successstories" element={<SuccessStories/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/whyus" element={<WhyUs/>} />
              <Route path="/setting" element={<Settings/>} />
              <Route path="/footer" element={<Footer/>} />
            </Routes>
            </Content>
            </div>
        </Router>
      */}

     <Router>
          <div className="App">
          
            <StudNavbar/>
            <Routes>
              <Route path="/home" element={<Homepage/>} />
              <Route path="/courses" element={<Courses/>} />
              <Route path="/success_story" element={<SuccessStories/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/about_us" element={<AboutUs/>} />
              <Route path="/contact" element={<Contact/>} />
              
         </Routes>
       
         </div>
     </Router>
        </>
      );
    }
    
    


export default App;
