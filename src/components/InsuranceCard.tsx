import { LucideIcon } from 'lucide-react';

interface InsurancePlan {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  price: number;
  isRecommended: boolean;
}

interface InsuranceCardProps {
  plan: InsurancePlan;
}

export function InsuranceCard({ plan }: InsuranceCardProps) {
  const Icon = plan.icon;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className={`bg-white rounded-xl p-4 shadow-sm relative ${
        plan.isRecommended ? 'border-2 border-[#002A45]' : 'border border-gray-100'
      }`}
    >
      {/* Recommended Badge */}
      {plan.isRecommended && (
        <div className="absolute -top-2 right-4 bg-[#002A45] text-white px-3 py-1 rounded-full text-xs">
          Recommended
        </div>
      )}

      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 mt-1 p-2 rounded-lg ${
          plan.isRecommended ? 'bg-[#002A45]' : 'bg-gray-100'
        }`}>
          <Icon 
            className={`w-6 h-6 ${
              plan.isRecommended ? 'text-[#FFB915]' : 'text-[#002A45]'
            }`} 
            strokeWidth={2} 
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-[#002A45]">{plan.title}</h3>
            <p className="text-[#002A45] flex-shrink-0">{formatPrice(plan.price)}</p>
          </div>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            {plan.description}
          </p>
          
          {/* Action Button */}
          <button className="bg-[#FFB915] text-[#002A45] px-6 py-2 rounded-lg hover:bg-[#FFB915]/90 transition-colors">
            Pilih
          </button>
        </div>
      </div>
    </div>
  );
}