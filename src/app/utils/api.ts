const BASE = 'http://localhost:3001/api';

export async function generatePlan(data: {
  subject: string;
  days: string;
  hours: string;
  level: string;
  syllabus: string;
}) {
  const res = await fetch(`${BASE}/generate-plan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to generate plan');
  return res.json();
}

export async function getPlans() {
  const res = await fetch(`${BASE}/plans`);
  const plans = await res.json();
  return plans.map((p: any) => ({ ...p, id: p._id }));
}

export async function getPlan(id: string) {
  const res = await fetch(`${BASE}/plans/${id}`);
  return res.json();
}

export async function deletePlan(id: string) {
  await fetch(`${BASE}/plans/${id}`, { method: 'DELETE' });
}