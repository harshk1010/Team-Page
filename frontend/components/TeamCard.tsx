import { TeamMember } from "../types/team"

type Props = {
  member: TeamMember
}

export default function TeamCard({ member }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center transition transform hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={member.avatar_url}
        alt={member.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />

      <h3 className="text-xl font-semibold text-gray-900">
        {member.name}
      </h3>

      <p className="text-gray-600 mt-1">
        {member.role}
      </p>

      <p className="text-gray-500 text-sm mt-2">
        {member.bio}
      </p>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 inline-block"
        >
          LinkedIn
        </a>
      )}

    </div>
  )
}