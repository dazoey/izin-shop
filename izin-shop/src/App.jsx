import { useState } from 'react';
import { Home, ShoppingCart, Package, Menu, X, Plus, Minus, Trash2, Search, Heart } from 'lucide-react';

export default function EcommerceApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'cart', label: 'Cart', icon: ShoppingCart, badge: cart.length }
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsPage cart={cart} setCart={setCart} searchQuery={searchQuery} />;
      case 'cart':
        return <CartPage cart={cart} setCart={setCart} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart size={28} className="text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-800">GreenShop</h1>
            </div>
            
            {/* Search Bar - Desktop */}
            {currentPage === 'products' && (
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-md mx-4 border border-gray-200">
                <Search size={20} className="mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 w-full"
                />
              </div>
            )}

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {menuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              {navigation.map(nav => {
                const Icon = nav.icon;
                return (
                  <button
                    key={nav.id}
                    onClick={() => setCurrentPage(nav.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                      currentPage === nav.id 
                        ? 'bg-green-500 text-white font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {nav.label}
                    {nav.badge > 0 && (
                      <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {nav.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden mt-4 pb-2 flex flex-col gap-2 border-t border-gray-200 pt-4">
              {navigation.map(nav => {
                const Icon = nav.icon;
                return (
                  <button
                    key={nav.id}
                    onClick={() => {
                      setCurrentPage(nav.id);
                      setMenuOpen(false);
                    }}
                    className={`relative flex items-center gap-2 px-4 py-3 rounded-lg transition ${
                      currentPage === nav.id 
                        ? 'bg-green-500 text-white font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {nav.label}
                    {nav.badge > 0 && (
                      <span className="ml-auto bg-orange-500 text-white text-xs rounded-full px-2 py-1 font-bold">
                        {nav.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          )}

          {/* Search Bar - Mobile */}
          {currentPage === 'products' && (
            <div className="md:hidden mt-4 flex items-center bg-gray-100 rounded-lg px-4 py-2 border border-gray-200">
              <Search size={20} className="mr-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 w-full"
              />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart size={24} className="text-orange-500" />
                <h3 className="font-bold text-lg text-gray-800">GreenShop</h3>
              </div>
              <p className="text-sm text-gray-600">Your trusted online marketplace for quality products</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button className="hover:text-green-500 transition">Help Center</button></li>
                <li><button className="hover:text-green-500 transition">How to Buy</button></li>
                <li><button className="hover:text-green-500 transition">Shipping</button></li>
                <li><button className="hover:text-green-500 transition">Returns</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button className="hover:text-green-500 transition">About Us</button></li>
                <li><button className="hover:text-green-500 transition">Careers</button></li>
                <li><button className="hover:text-green-500 transition">Blog</button></li>
                <li><button className="hover:text-green-500 transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
              <p className="text-sm text-gray-600 mb-3">Stay connected with us</p>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg flex items-center justify-center transition">
                  <span className="font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg flex items-center justify-center transition">
                  <span className="font-bold">ig</span>
                </button>
                <button className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg flex items-center justify-center transition">
                  <span className="font-bold">tw</span>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">© 2024 GreenShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage({ setCurrentPage }) {
  const categories = [
    { name: 'Electronics', icon: '💻', color: 'green' },
    { name: 'Fashion', icon: '👕', color: 'orange' },
    { name: 'Home & Living', icon: '🏠', color: 'green' },
    { name: 'Sports', icon: '⚽', color: 'orange' },
    { name: 'Books', icon: '📚', color: 'green' },
    { name: 'Toys', icon: '🧸', color: 'orange' }
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', discount: 20 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', discount: 15 },
    { id: 3, name: 'Running Shoes', price: 89.99, image: '👟', discount: 30 },
    { id: 4, name: 'Coffee Maker', price: 149.99, image: '☕', discount: 10 }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Banner */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to GreenShop
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover amazing products at unbeatable prices. Shop now and get up to 50% off on selected items!
            </p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition w-fit"
            >
              Shop Now
            </button>
          </div>
          <div className="flex items-center justify-center text-9xl">
            🛍️
          </div>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Shop by Category</h3>
          <button 
            onClick={() => setCurrentPage('products')}
            className="text-green-500 hover:text-green-600 font-semibold text-sm transition"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage('products')}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 group"
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h4 className="font-semibold text-gray-700 group-hover:text-green-500 transition">
                {cat.name}
              </h4>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Featured Products</h3>
          <button 
            onClick={() => setCurrentPage('products')}
            className="text-green-500 hover:text-green-600 font-semibold text-sm transition"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden group">
              <div className="relative bg-gray-50 p-8 flex items-center justify-center">
                <div className="text-6xl">{product.image}</div>
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
                <button className="absolute top-2 left-2 bg-white text-gray-400 hover:text-red-500 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-green-600">${product.price}</span>
                  {product.discount && (
                    <span className="text-sm text-gray-400 line-through">
                      ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setCurrentPage('products')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Free Shipping', desc: 'On orders over $50', icon: '🚚' },
          { title: 'Secure Payment', desc: '100% secure transactions', icon: '🔒' },
          { title: '24/7 Support', desc: 'Always here to help', icon: '💬' }
        ].map((feature, i) => (
          <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

function ProductsPage({ cart, setCart, searchQuery }) {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.8 },
    { id: 3, name: 'Casual T-Shirt', price: 29.99, image: '👕', category: 'Fashion', rating: 4.2 },
    { id: 4, name: 'Running Shoes', price: 89.99, image: '👟', category: 'Fashion', rating: 4.7 },
    { id: 5, name: 'Coffee Maker', price: 149.99, image: '☕', category: 'Home', rating: 4.6 },
    { id: 6, name: 'Desk Lamp', price: 39.99, image: '💡', category: 'Home', rating: 4.3 },
    { id: 7, name: 'Yoga Mat', price: 24.99, image: '🧘', category: 'Sports', rating: 4.4 },
    { id: 8, name: 'Dumbbell Set', price: 59.99, image: '🏋️', category: 'Sports', rating: 4.5 },
    { id: 9, name: 'Bluetooth Speaker', price: 49.99, image: '🔊', category: 'Electronics', rating: 4.6 },
    { id: 10, name: 'Backpack', price: 44.99, image: '🎒', category: 'Fashion', rating: 4.3 },
    { id: 11, name: 'Table Clock', price: 19.99, image: '⏰', category: 'Home', rating: 4.1 },
    { id: 12, name: 'Tennis Racket', price: 69.99, image: '🎾', category: 'Sports', rating: 4.7 }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">All Products</h2>
        <p className="text-gray-600">Showing {filteredProducts.length} products</p>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-xl text-gray-600 mb-2">No products found</p>
          <p className="text-gray-500">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 overflow-hidden group">
              <div className="relative bg-gray-50 p-8 flex items-center justify-center">
                <div className="text-6xl">{product.image}</div>
                <button className="absolute top-2 right-2 bg-white text-gray-400 hover:text-red-500 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CartPage({ cart, setCart }) {
  const updateQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-600 mb-2">Your cart is empty</p>
          <p className="text-gray-500 mb-6">Start shopping to add items</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-4xl">{item.image}</div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-green-600 font-bold">${item.price}</p>
                </div>

                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1 border border-gray-200">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="hover:bg-gray-200 p-2 rounded transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="hover:bg-gray-200 p-2 rounded transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-fit lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cart.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span className="text-green-600">${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition mb-3">
              Proceed to Checkout
            </button>
            
            <p className="text-center text-xs text-gray-500">
              🔒 Secure checkout · SSL encrypted
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);