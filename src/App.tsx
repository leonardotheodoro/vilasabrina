import { useState } from 'react';
import { Store } from 'lucide-react';
import type { Business } from './types/Business';
import { BusinessCard } from './components/BusinessCard';
import { BusinessForm } from './components/BusinessForm';

const SAMPLE_BUSINESSES: Business[] = [
  {
    id: '1',
    name: "Sarah's Homemade Pastries",
    description: "Delicious homemade pastries and cakes for all occasions. Specializing in custom birthday cakes and wedding desserts.",
    category: "food",
    phone: "+1234567890",
    email: "sarah@pastries.local",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    owner: "Sarah Johnson"
  },
  {
    id: '2',
    name: "Green Thumb Gardens",
    description: "Professional landscaping and garden maintenance services. Making your outdoor space beautiful all year round.",
    category: "services",
    phone: "+1234567891",
    email: "contact@greenthumb.local",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    owner: "Mike Peterson"
  }
];

function App() {
  const [businesses, setBusinesses] = useState<Business[]>(SAMPLE_BUSINESSES);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (newBusiness: Omit<Business, 'id'>) => {
    const business: Business = {
      ...newBusiness,
      id: Date.now().toString()
    };
    setBusinesses(prev => [...prev, business]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Store className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Neighborhood Directory</h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {showForm ? 'View Directory' : 'Register Business'}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showForm ? (
          <BusinessForm onSubmit={handleSubmit} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Neighborhood Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;