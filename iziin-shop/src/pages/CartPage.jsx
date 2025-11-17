import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartPage({ cart, setCart, setCurrentPage }) {
  const CONVERSION_RATE = 15000;
  const formatCurrency = (amount) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-xl text-gray-600 mb-2">Your cart is empty</p>
          <p className="text-gray-500 mb-6">Start shopping to add items</p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
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
                  <p className="text-green-600 font-bold">{formatCurrency(item.price * CONVERSION_RATE)}</p>
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
                <span>Subtotal ({cart.length} barang)</span>
                <span>{formatCurrency(total * CONVERSION_RATE)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Pengiriman</span>
                <span className="text-green-600 font-semibold">Gratis (asal rajin ibadah)</span>
              </div>
            </div>
            
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span className="text-green-600">{formatCurrency(total * CONVERSION_RATE)}</span>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition mb-3">
              Gass cekoot
            </button>
            
            <p className="text-center text-xs text-gray-500">
              🔒 Checkout aman · SSL terenkripsi
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
