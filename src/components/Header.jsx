import { ShoppingCart, Menu, X, Search } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, menuOpen, setMenuOpen, cart, searchQuery, setSearchQuery, navigation }) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart size={28} className="text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-800">IziinShop</h1>
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
  );
}
