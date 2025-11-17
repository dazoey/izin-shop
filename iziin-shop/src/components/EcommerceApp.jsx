import { useState } from 'react';
import { Home, ShoppingCart, Package, User } from 'lucide-react';

import Header from './Header';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import ProfilePage from '../pages/ProfilePage';

export default function EcommerceApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cart.length },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const handleNavigation = (page) => {
    setCurrentPage(page);
    if (page === 'products') {
      setSelectedCategory('');
      setSearchQuery('');
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage('products');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage handleCategorySelect={handleCategorySelect} />;
      case 'products':
        return <ProductsPage cart={cart} setCart={setCart} searchQuery={searchQuery} selectedCategory={selectedCategory} />;
      case 'cart':
        return <CartPage cart={cart} setCart={setCart} setCurrentPage={setCurrentPage} />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage handleCategorySelect={handleCategorySelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={handleNavigation}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cart={cart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        navigation={navigation}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>

      {/* <Footer /> */}
    </div>
  );
}