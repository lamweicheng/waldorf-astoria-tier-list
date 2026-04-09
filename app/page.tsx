import { WaldorfAstoriaTierListClient } from './WaldorfAstoriaTierListClient';
import { listDashboardPreferences } from '@/lib/dashboard-preferences';
import { isDatabaseConfigured, listHotels } from '@/lib/hotels';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const [initialHotels, initialDashboardPreferences] = await Promise.all([
    listHotels(),
    listDashboardPreferences()
  ]);

  return (
    <WaldorfAstoriaTierListClient
      initialHotels={initialHotels}
      initialDashboardPreferences={initialDashboardPreferences}
      persistenceMode={isDatabaseConfigured() ? 'database' : 'local'}
    />
  );
}