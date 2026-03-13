from pydantic import BaseModel
from typing import Optional


class TeamMemberModel(BaseModel):
    id: int
    name: str
    role: str
    bio: str
    avatar_url: str
    linkedin: Optional[str] = None
    department: Optional[str] = None