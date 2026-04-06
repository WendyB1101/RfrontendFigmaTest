'use client'

import { Tariff } from '@/app/types'
import TariffCard from './TariffCard'

interface Props {
  tariffs: Tariff[]
  selectedPeriod: string | null
  timerExpired: boolean
  onSelect: (period: string) => void
  bestOnly?: boolean
  restOnly?: boolean
}

export default function TariffList({ tariffs, selectedPeriod, timerExpired, onSelect, bestOnly, restOnly }: Props) {
  const seen = new Set<string>()
  const unique = tariffs.filter((t) => {
    if (seen.has(t.period)) return false
    seen.add(t.period)
    return true
  })

  const best = unique.find((t) => t.is_best)
  const rest = unique.filter((t) => !t.is_best)

  if (bestOnly && best) {
    return (
      <TariffCard tariff={best} selected={selectedPeriod === best.period} timerExpired={timerExpired} large onSelect={() => onSelect(best.period)} />
    )
  }

  if (restOnly) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {rest.map((t) => (
          <TariffCard key={t.period} tariff={t} selected={selectedPeriod === t.period} timerExpired={timerExpired} onSelect={() => onSelect(t.period)} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {best && (
        <TariffCard tariff={best} selected={selectedPeriod === best.period} timerExpired={timerExpired} large onSelect={() => onSelect(best.period)} />
      )}
      {rest.map((t) => (
        <TariffCard key={t.period} tariff={t} selected={selectedPeriod === t.period} timerExpired={timerExpired} onSelect={() => onSelect(t.period)} />
      ))}
    </div>
  )
}