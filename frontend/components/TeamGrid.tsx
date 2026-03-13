"use client"

import { motion } from "framer-motion"
import TeamCard from "./TeamCard"
import { TeamMember } from "../types/team"

type Props = {
  members: TeamMember[]
}

export default function TeamGrid({ members }: Props) {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
    >
      {members.map((member) => (
        <motion.div key={member.id} variants={item}>
          <TeamCard member={member} />
        </motion.div>
      ))}
    </motion.div>
  )
}