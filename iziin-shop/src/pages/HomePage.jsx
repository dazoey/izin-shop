import { Heart } from 'lucide-react';

export default function HomePage({ handleCategorySelect }) {
  const CONVERSION_RATE = 15000;
  const formatCurrency = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

  const categories = [
    { name: 'Electronics', icon: '💻', color: 'green' },
    { name: 'Fashion', icon: '👕', color: 'orange' },
    { name: 'Home & Living', icon: '🏠', color: 'green' },
    { name: 'Sports', icon: '⚽', color: 'orange' },
    { name: 'Books', icon: '📚', color: 'green' },
    { name: 'Toys', icon: '🧸', color: 'orange' }
  ];

  const featuredProducts = [
    { id: 1, name: 'Hedsest', price: 79.99, image: '🎧', discount: 20 },
    { id: 2, name: 'Smart Watch', price: 199.99, image: '⌚', discount: 15 },
    { id: 3, name: 'Sepatu Kalcer', price: 89.99, image: '👟', discount: 30 },
    { id: 4, name: 'Mesin Ngopag pagi', price: 149.99, image: '☕', discount: 10 }
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Banner */}
      <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Selamat Datang di IziinShop
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Bukan Toko Cina!
            </p>
            <button 
              onClick={() => handleCategorySelect('')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition w-fit"
            >
              Belanja sekarang
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
          <h3 className="text-2xl font-bold text-gray-800">Belanja Sesuai Kategori</h3>
          <button 
            onClick={() => handleCategorySelect('')}
            className="text-green-500 hover:text-green-600 font-semibold text-sm transition"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => handleCategorySelect(cat.name)}
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
          <h3 className="text-2xl font-bold text-gray-800">Barang Terkalcer</h3>
          <button 
            onClick={() => handleCategorySelect('')}
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
                  <span className="text-xl font-bold text-green-600">{formatCurrency(product.price * CONVERSION_RATE)}</span>
                  {product.discount && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatCurrency((product.price / (1 - product.discount / 100)) * CONVERSION_RATE)}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleCategorySelect('')}
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
          { title: 'Ongkir gratis', desc: 'Ongkir gratis kalo rajin ibadah', icon: '🚚' },
          { title: 'Pembayaran Aman', desc: '100% aman gamungkin boong', icon: '🔒' },
          { title: '24/7 Support', desc: 'On terus kalo ga ngantuk', icon: '💬' }
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
