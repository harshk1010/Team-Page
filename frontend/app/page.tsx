"use client";

import { useEffect, useState } from "react";
import TeamCard from './../components/TeamCard';


export default function TeamPage() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/team/")
      .then(res => res.json())
      .then(data => setTeam(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <h1 className="text-4xl font-bold text-center mb-16">
            Meet the Team
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {team.map((member:any) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

    </div>
  );
}