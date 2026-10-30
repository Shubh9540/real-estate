import TeamDetailPage from '@/app/team/[id]/page';
import { TeamDetailRouteProps } from '@/types/templates.types';

export const dynamic = 'force-dynamic';

export default function Page({ params }: TeamDetailRouteProps) {
  return <TeamDetailPage params={params} />;
}
