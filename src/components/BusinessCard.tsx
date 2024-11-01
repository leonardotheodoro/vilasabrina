import { Phone, Mail, MessageCircle } from 'lucide-react';
import type { Business } from '../types/Business';

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  const whatsappLink = `https://wa.me/${business.phone.replace(/\D/g, '')}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={business.image}
        alt={business.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{business.name}</h3>
        <p className="text-gray-600 mb-4">{business.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-gray-700">
            <Phone className="w-5 h-5 mr-2" />
            <span>{business.phone}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Mail className="w-5 h-5 mr-2" />
            <span>{business.email}</span>
          </div>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Contact via WhatsApp
        </a>
      </div>
    </div>
  );
}