'use client'

import { useState } from 'react'
import { Tariff } from '@/app/types'
import TimerHeader from './TimerHeader'
import TariffList from './TariffList'
import Checkbox from './Checkbox'
import BuyButton from './BuyButton'

export default function AppShell({ tariffs }: { tariffs: Tariff[] }) {
  const [timerExpired, setTimerExpired] = useState(false)
  // Use period as unique key since API has duplicate IDs
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(
    tariffs.find((t) => t.is_best)?.period ?? tariffs[0]?.period ?? null
  )
  const [agreed, setAgreed] = useState(false)
  const [checkboxError, setCheckboxError] = useState(false)

  const handleBuy = () => {
    if (!agreed) { setCheckboxError(true); return }
    setCheckboxError(false)
  }

  return (
    <div className="min-h-screen bg-[#e8e8e8] flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-[600px] bg-[#162416] rounded-2xl overflow-hidden shadow-2xl">
        <TimerHeader onExpire={() => setTimerExpired(true)} />
        <div className="px-5 pt-5 pb-7">
          <h1 className="text-xl font-bold text-white mb-4">
            Выбери подходящий для себя{' '}
            <span className="text-yellow-400 italic">тариф</span>
          </h1>

          <div className="flex gap-3 mb-3">
            <img
              src="/model.png"
              alt="fitness model"
              style={{
                width: '125px',
                minWidth: '125px',
                height: '250px',
                objectFit: 'cover',
                objectPosition: 'center 10%',
                borderRadius: '12px',
                border: '2px solid #6366f1',
                display: 'block'
              }}
            />
            <div style={{ flex: 1 }}>
              <TariffList tariffs={tariffs} selectedPeriod={selectedPeriod} timerExpired={timerExpired} onSelect={setSelectedPeriod} bestOnly={true} />
            </div>
          </div>

          <TariffList tariffs={tariffs} selectedPeriod={selectedPeriod} timerExpired={timerExpired} onSelect={setSelectedPeriod} restOnly={true} />

          <p className="text-gray-500 text-xs leading-relaxed mt-4 mb-3">
            Отменив подписку за 3 дня до конца пробного периода, вы не получите никаких дополнительных
            списаний. Если вы не отмените подписку, она автоматически продлится по стандартной цене.
          </p>

          <Checkbox checked={agreed} error={checkboxError} onChange={(v) => { setAgreed(v); if (v) setCheckboxError(false) }} />

          <div className="mt-3">
            <BuyButton onClick={handleBuy} />
          </div>

          <p className="text-gray-600 text-xs mt-3 leading-relaxed text-center">
            Нажимая кнопку «Купить», вы соглашаетесь с условиями оферты и подтверждаете,
            что ознакомились с политикой конфиденциальности и условиями использования сервиса.
          </p>

          <div className="mt-5 flex justify-center">
            <div className="border border-green-600 rounded-full px-5 py-2 text-green-400 text-sm font-medium">
              гарантия возврата 30 дней
            </div>
          </div>

          <p className="text-gray-500 text-xs mt-4 leading-relaxed text-center">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через
            4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента
            покупки, если ты не получишь видимых результатов.
          </p>
        </div>
      </div>
    </div>
  )
}