import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// 加载组件
const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen text-xl">
    <p>Loading...</p>
  </div>
);

// Core pages
const Header = lazy(() => import('./components/Header'));
const Footer7 = lazy(() => import('./components/Footer7'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/home/Home'));

// Help
const Help = lazy(() => import('./pages/help/Help'));

// About
const About = lazy(() => import('./pages/about/About'));
const Mission = lazy(() => import('./pages/about/mission/Mission'));
const Competitions = lazy(() => import('./pages/about/competitions/Competitions'));
const FLL = lazy(() => import('./pages/about/competitions/fll/FLL'));
const FTC = lazy(() => import('./pages/about/competitions/ftc/FTC'));
const FRC = lazy(() => import('./pages/about/competitions/frc/FRC'));
const History = lazy(() => import('./pages/about/history/History'));

// Learn
const Learn = lazy(() => import('./pages/learn/Learn'));
const VideosPage = lazy(() => import('./pages/learn/video/Video'));

// Contact
const Contact = lazy(() => import('./pages/contact/Contact'));

// Community
const Community = lazy(() => import('./pages/community/Community'));
const Events = lazy(() => import('./pages/community/events/Events'));
const Forum = lazy(() => import('./pages/community/forum/Forum'));
const Teams = lazy(() => import('./pages/community/teams/Teams'));
const Archive = lazy(() => import('./pages/community/archive/Archive'));
const ArchiveTeamDetails = lazy(() => import('./pages/community/archive/[teamNumber]'));
const Resources = lazy(() => import('./pages/community/resources/Resources'));
const ManualBookCard = lazy(() => import('./pages/community/resources/manual-book/ManualBook'));
const ManualBookDetail = lazy(() => import('./pages/community/resources/manual-book/[season]'));
const PartsSuppliers = lazy(() => import('./pages/community/resources/parts-suppliers/parts-suppliers'));
const SponsorsList = lazy(() => import('./pages/community/resources/sponsor-list/Sponsor'));
const GuideBooks = lazy(() => import('/src/pages/community/resources/guide-book/GuideBooks'));
const Preview = lazy(() => import('./pages/community/resources/guide-book/Preview'));


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <MainContent />
      </Suspense>
    </Router>
  );
};

const MainContent = () => {

    /*
  const location = useLocation();
  //Define pages where navbar and footer should be hidden
  const hideNavbarFooterPages = [
    '/learn/document',
  ];
 const showNavbarAndFooter = !hideNavbarFooterPages.some(path => location.pathname.startsWith(path));
*/
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {/* Help */}
        <Route path="/help" element={<Help />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/competitions" element={<Competitions />} />
        <Route path="/about/competitions/fll" element={<FLL />} />
        <Route path="/about/competitions/frc" element={<FRC />} />
        <Route path="/about/competitions/ftc" element={<FTC />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/mission" element={<Mission />} />
        
        {/* Learn */}
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/video" element={<VideosPage />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Community */}
        <Route path="/community" element={<Community />} />
        <Route path="/community/forum" element={<Forum />} />
        <Route path="/community/events" element={<Events />} />
        <Route path="/community/teams" element={<Teams />} />
        <Route path="/community/archive" element={<Archive />} />
        <Route path="/community/archive/:teamNumber" element={<ArchiveTeamDetails />} />
        <Route path="/community/resources" element={<Resources />} />
        <Route path="/community/resources/manuals" element={<ManualBookCard />} />
        <Route path="/community/resources/manuals/:season" element={<ManualBookDetail />} />
        <Route path="/community/resources/suppliers" element={<PartsSuppliers />} />
        <Route path="/community/resources/sponsors" element={<SponsorsList />} />
        <Route path="/community/resources/guide" element={<GuideBooks />} />
        <Route path="/community/resources/guide/preview" element={<Preview />} />
      </Routes>
      <Footer7 />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default App;
