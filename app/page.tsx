import { WaldorfAstoriaTierListClient } from './WaldorfAstoriaTierListClient';
import { DEFAULT_DASHBOARD_PREFERENCES, listDashboardPreferences } from '@/lib/dashboard-preferences';
import { isDatabaseReady, listHotels } from '@/lib/hotels';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const databaseReady = await isDatabaseReady();

  const [initialHotels, initialDashboardPreferences] = databaseReady
    ? await Promise.all([listHotels(), listDashboardPreferences()])
    : [[], DEFAULT_DASHBOARD_PREFERENCES];

  return (
    <WaldorfAstoriaTierListClient
      initialHotels={initialHotels}
      initialDashboardPreferences={initialDashboardPreferences}
      persistenceMode={databaseReady ? 'database' : 'local'}
    />
  );
}