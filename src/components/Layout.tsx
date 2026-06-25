import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import BottomNav from './BottomNav';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="bottom-center" />
      <CartDrawer />
      <Header />
      {/* Added pb-20 on mobile to clear the bottom nav */}
      <main className={`flex-grow md:pb-0 pb-20 ${!isHome ? 'pt-24 md:pt-32' : ''}`}>
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Layout;
