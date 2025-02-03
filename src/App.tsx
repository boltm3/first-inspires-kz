import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// 导入您的页面组件
import Home from './pages/home/Home';
import PostView from './pages/community/Forum/pages/post/[id]';
import CreatePost from './pages/community/Forum/pages/CreatePost';
import Help from './pages/help/Help.tsx';
import About from './pages/about/About';
import Mission from './pages/about/mission/Mission.tsx';
import Competitions from './pages/about/competitions/Competitions';
import FLL from './pages/about/competitions/fll/FLL';
import FRC from './pages/about/competitions/frc/FRC';
import FTC from './pages/about/competitions/ftc/FTC';
import History from './pages/about/history/History';
import Community from './pages/community/Community';
import Events from './pages/community/events/Events.tsx';
import Teams from './pages/community/teams/Teams.tsx';
import Contact from './pages/contact/Contact.tsx';
import Learn from './pages/learn/Learn';
import Header from './components/Header.tsx';
import Footer7 from './components/Footer7.tsx';
import NotFound from './pages/NotFound'; // Import the NotFound component
import ForumHome from './pages/community/Forum/pages/[id]';
import DocumentLearn from './pages/learn/ftc/document/learn.tsx';
import UserInfo from './pages/community/Forum/pages/test/testUserInfo.tsx';
import MyTeam from './pages/community/Forum/pages/Team.tsx';
import VideosPage from './pages/learn/video/Video.tsx';
import Archive from './pages/community/archive/Archive.tsx';
import Resources from './pages/community/resources/Resources.tsx';
import TeamDetails from './pages/community/archive/[teamNumber].tsx';
import ManualBookCard from './pages/community/resources/manual-book/ManualBook.tsx';
import ManualBookDetail from './pages/community/resources/manual-book/[season].tsx';
import PartsSuppliers from './pages/community/resources/parts-suppliers/parts-suppliers.tsx';
import SponsorsList from './pages/community/resources/sponsor-list/Sponsor.tsx';

const App = (): JSX.Element => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();

  // Define pages where you don't want the navbar or footer
  const hideNavbarFooterPages = [
    '/community/forum',
    '/learn/document', // Example of a page where you might not want the navbar or footer
  
  ];
  //! MUST start with '/'
  //console.log(location.pathname)

  // Check if the current route is in the list of pages to hide navbar and footer
  const showNavbarAndFooter = !hideNavbarFooterPages.some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* Conditionally render the Navbar */}
      {showNavbarAndFooter && <Header />}

      <Routes>
        {/* 首页路由 */}
        <Route path="/" element={<Home />} />
        
        {/* 其他页面 */}
        <Route path="/about" element={<About />} />
        <Route path="/about/competitions" element={<Competitions />} />
        <Route path="/about/competitions/fll" element={<FLL />} />
        <Route path="/about/competitions/frc" element={<FRC />} />
        <Route path="/about/competitions/ftc" element={<FTC />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/mission" element={<Mission />} />
        
        {/* 社区相关路由 */}
        <Route path="/community" element={<Community />} />
        <Route path="/community/events" element={<Events />} />
        <Route path="/community/teams" element={<Teams />} />
        <Route path="/community/archive" element={<Archive />} />
        <Route path="/community/archive/:teamNumber" element={<TeamDetails />} />
        <Route path="/community/resources" element={<Resources />} />
        <Route path="/community/resources/manuals" element={<ManualBookCard />} />
        <Route path="/community/resources/manuals/:season" element={<ManualBookDetail />} />
        <Route path="/community/resources/suppliers" element={<PartsSuppliers />} />
        <Route path="/community/resources/sponsors" element={<SponsorsList />} />

        <Route path="/community/forum/:id" element={<ForumHome />} />
        <Route path="/community/forum/post/:id" element={<PostView />} />
        <Route path="/community/forum/create-post" element={<CreatePost />} />
        <Route path="/community/forum/my-team" element={<MyTeam />} />
        <Route path="/community/forum/test" element={<UserInfo />} />

        {/* 联系页面 */}
        <Route path="/contact" element={<Contact />} />

        {/* 帮助页面 */}
        <Route path="/help" element={<Help />} />

        {/* 学习页面 */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/document" element={<DocumentLearn />} />
        <Route path="/learn/video" element={<VideosPage />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} /> {/* This handles undefined routes */}
      </Routes>

      {/* Conditionally render the Footer */}
      {showNavbarAndFooter && <Footer7 />}
    </>
  );
};

export default App;
