import React from 'react';

export default function InfoCard({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl">{value}</p>
    </div>
  );
}
