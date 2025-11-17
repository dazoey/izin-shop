import { ShoppingCart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart size={24} className="text-orange-500" />
              <h3 className="font-bold text-lg text-gray-800">IziinShop</h3>
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
          <p className="text-sm text-gray-500">© 2025 IziinShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
