import { Heart, Star, Plus, Search } from 'lucide-react';

export default function ProductsPage({ cart, setCart, searchQuery, selectedCategory }) {
  const CONVERSION_RATE = 15000;
  const formatCurrency = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

  const products = [
    { id: 1, name: 'Hedset', price: 79.99, image: '🎧', category: 'Electronics', rating: 4.5 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', category: 'Electronics', rating: 4.8 },
    { id: 3, name: 'Kaos kalcer', price: 29.99, image: '👕', category: 'Fashion', rating: 4.2 },
    { id: 4, name: 'Sepatu Kalcer', price: 89.99, image: '👟', category: 'Fashion', rating: 4.7 },
    { id: 5, name: 'Mesin Ngopag pagi', price: 149.99, image: '☕', category: 'Home & Living', rating: 4.6 },
    { id: 6, name: 'Lampu Kalcer', price: 39.99, image: '💡', category: 'Home & Living', rating: 4.3 },
    { id: 7, name: 'Kasur kucenk', price: 24.99, image: '🧘', category: 'Sports', rating: 4.4 },
    { id: 8, name: 'Dumbbell Kalcer', price: 59.99, image: '🏋️', category: 'Sports', rating: 4.5 },
    { id: 9, name: 'Bluetooth Speaker', price: 49.99, image: '🔊', category: 'Electronics', rating: 4.6 },
    { id: 10, name: 'Tas Kalcer', price: 44.99, image: '🎒', category: 'Fashion', rating: 4.3 },
    { id: 11, name: 'Jam Kalcer', price: 19.99, image: '⏰', category: 'Home & Living', rating: 4.1 },
    { id: 12, name: 'Raket Padel', price: 69.99, image: '🏓', category: 'Sports', rating: 4.7 }
  ];

  const categoryFilteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const filteredProducts = categoryFilteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {selectedCategory || 'All Products'}
        </h2>
        <p className="text-gray-600">Showing {filteredProducts.length} products</p>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <p className="text-xl text-gray-600 mb-2">No products found</p>
          <p className="text-gray-500">Try searching with different keywords or selecting another category.</p>
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
                  <span className="text-xl font-bold text-green-600">{formatCurrency(product.price * CONVERSION_RATE)}</span>
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
