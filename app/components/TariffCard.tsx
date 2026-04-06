'use client'

import { Tariff } from '@/app/types'

interface Props {
  tariff: Tariff
  selected: boolean
  timerExpired: boolean
  large?: boolean
  onSelect: () => void
}

export default function TariffCard({ tariff, selected, timerExpired, large = false, onSelect }: Props) {
  const discountPercent = Math.round(((tariff.full_price - tariff.price) / tariff.full_price) * 100)
  const rub = '\u20BD'

  if (large) {
    return (
      <div
        onClick={onSelect}
        className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 select-none h-full flex flex-col justify-between
          ${selected ? 'border-pink-500 bg-[#1e2a1e]' : 'border-[#2d4a2d] bg-[#1a2a1a] hover:border-pink-500/50'}`}
      >
        <div>
          <div className="flex items-start justify-between mb-2">
            <div>
              {discountPercent > 0 && (
                <span className="inline-block bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded mb-1">-{discountPercent}%</span>
              )}
              <p className="text-white text-sm font-bold">{tariff.period}</p>
              <p className="text-gray-400 text-xs leading-tight mt-0.5">{tariff.text}</p>
            </div>
            <span className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest ml-2 flex-shrink-0">BEST</span>
          </div>

          <div className="relative h-10 mt-2">
            <div className={`absolute inset-0 flex items-baseline gap-2 transition-all duration-500 ${timerExpired ? 'opacity-0 -translate-y-1 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <span className="text-yellow-400 text-2xl font-extrabold leading-none whitespace-nowrap">{tariff.price} {rub}</span>
              {tariff.full_price !== tariff.price && (
                <span className="text-gray-500 line-through text-xs">{tariff.full_price} {rub}</span>
              )}
            </div>
            <div className={`absolute inset-0 flex items-baseline transition-all duration-500 ${timerExpired ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
              <span className="text-yellow-400 text-2xl font-extrabold leading-none whitespace-nowrap">{tariff.full_price} {rub}</span>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-3 right-3 w-4 h-4 rounded-full border-2 flex items-center justify-center ${selected ? 'border-yellow-400' : 'border-gray-600'}`}>
          {selected && <div className="w-2 h-2 rounded-full bg-yellow-400" />}
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer rounded-xl p-3 border-2 transition-all duration-300 select-none
        ${selected ? 'border-yellow-400 bg-[#1e2a1e]' : 'border-[#2d4a2d] bg-[#1a2a1a] hover:border-yellow-400/50'}`}
    >
      {discountPercent > 0 && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap">-{discountPercent}%</span>
      )}

      <p className="text-gray-300 text-xs font-semibold mb-1">{tariff.period}</p>

      <div className="relative h-8">
        <div className={`absolute inset-0 flex items-baseline gap-1 transition-all duration-500 ${timerExpired ? 'opacity-0 -translate-y-1 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
          <span className="text-white text-xl font-extrabold leading-none">{tariff.price} {rub}</span>
        </div>
        <div className={`absolute inset-0 flex items-baseline transition-all duration-500 ${timerExpired ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
          <span className="text-white text-xl font-extrabold leading-none">{tariff.full_price} {rub}</span>
        </div>
      </div>

      {tariff.full_price !== tariff.price && !timerExpired && (
        <p className="text-gray-600 line-through text-[10px] mt-0.5">{tariff.full_price} {rub}</p>
      )}

      <p className="text-gray-500 text-[10px] mt-1 leading-tight line-clamp-2">{tariff.text}</p>

      <div className={`absolute top-2 right-2 w-3 h-3 rounded-full border-2 flex items-center justify-center ${selected ? 'border-yellow-400' : 'border-gray-600'}`}>
        {selected && <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
      </div>
    </div>
  )
}