import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from 'recharts';
import type { MatchResult } from '../../types';

interface SymptomRadarChartProps {
  data: MatchResult['radarVectorData'];
}

export const SymptomRadarChart: React.FC<SymptomRadarChartProps> = ({ data }) => {
  return (
    <div className="w-full h-64 md:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#94a3b8" strokeDasharray="3 3" opacity={0.3} />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            stroke="#94a3b8"
            opacity={0.3}
            tick={false}
          />
          <Radar
            name="Current Input Profile"
            dataKey="currentPatient"
            stroke="#2563EB"
            fill="#3B82F6"
            fillOpacity={0.5}
          />
          <Radar
            name="Category Archetype"
            dataKey="categoryAverage"
            stroke="#10B981"
            fill="#10B981"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface CategoryBarChartProps {
  scores: MatchResult['allCategoryScores'];
}

export const CategoryBarChart: React.FC<CategoryBarChartProps> = ({ scores }) => {
  const topScores = scores.slice(0, 5);

  const colors = ['#2563EB', '#0D9488', '#9333EA', '#F59E0B', '#64748B'];

  return (
    <div className="w-full h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={topScores}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} unit="%" />
          <YAxis
            type="category"
            dataKey="category"
            tick={{ fill: '#64748b', fontSize: 10, fontWeight: 500 }}
            width={110}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: '12px'
            }}
            formatter={(val: any) => [`${val ?? 0}% Probability`, 'Pattern Overlap']}
          />
          <Bar dataKey="percentage" radius={[0, 8, 8, 0]}>
            {topScores.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
