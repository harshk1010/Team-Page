export async function getTeamMembers() {
  const res = await fetch("http://localhost:8000/api/team");
  return res.json();
}