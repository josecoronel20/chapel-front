import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
    import React from 'react'

const ClubsHistory = ({clubsHistory}: {clubsHistory: string[]}) => {
  return (
    
    <Card>
    <CardHeader>
      <CardTitle>Historial de clubes</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {clubsHistory && clubsHistory.length > 0 ? clubsHistory.map((club, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-secondary-light rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm text-slate-700">{club}</span>
          </li>
        )) : <span className="text-sm text-slate-700">No hay historial de clubes por el momento</span>}
      </ul>
      </CardContent>
    </Card>
  );
};

export default ClubsHistory;