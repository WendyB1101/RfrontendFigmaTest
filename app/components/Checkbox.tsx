'use client'

interface Props {
  checked: boolean
  error: boolean
  onChange: (v: boolean) => void
}

export default function Checkbox({ checked, error, onChange }: Props) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <div className="relative mt-0.5 flex-shrink-0">
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only" />
        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200
          ${error && !checked ? 'border-red-500 bg-red-500/10' : checked ? 'border-yellow-400 bg-yellow-400' : 'border-gray-500'}`}>
          {checked && (
            <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 10 10">
              <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
      <span className={`text-xs leading-relaxed ${error && !checked ? 'text-red-400' : 'text-gray-400'}`}>
        Я согласен с{' '}
        <span className="text-yellow-400 underline">условиями обработки персональных данных</span> и{' '}
        <span className="text-yellow-400 underline">Политикой конфиденциальности</span>
      </span>
    </label>
  )
}
