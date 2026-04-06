'use client'

export default function BuyButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full py-3.5 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base rounded-xl
        cursor-pointer animate-pulse-buy
        focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-[#0f1f0f]"
    >
      Купить
    </button>
  )
}
