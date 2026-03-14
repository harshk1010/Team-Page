export async function getTeamMembers() {
  const res = await fetch("https://team-page-tlit.onrender.com/api/team");
  return res.json();
}
