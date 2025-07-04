import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
    import React from 'react'

const Achievements = ({achievements}: {achievements: string[]}) => {
  return (
    
    <Card>
    <CardHeader>
      <CardTitle>Logros Destacados</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {achievements.length > 0 && achievements[0] !== "" ? achievements.map((achievement, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm text-slate-700">{achievement}</span>
          </li>
        )) : <span className="text-sm text-slate-700">No hay logros destacados por el momento</span>}
      </ul>
      </CardContent>
    </Card>
  );
};

export default Achievements;