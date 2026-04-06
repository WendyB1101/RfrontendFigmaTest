import { Tariff } from '@/app/types'
import AppShell from '@/app/components/AppShell'

async function getTariffs(): Promise<Tariff[]> {
  try {
    const res = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs', {
      cache: 'no-store',
    })
    if (!res.ok) throw new Error('Failed to fetch tariffs')
    return res.json()
  } catch {
    return []
  }
}

export default async function Page() {
  const tariffs = await getTariffs()

  if (tariffs.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <p className="text-gray-400 text-lg">
          Unable to load pricing plans. Please try again later.
        </p>
      </div>
    )
  }

  return <AppShell tariffs={tariffs} />
}
