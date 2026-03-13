from pydantic import BaseModel
from typing import Optional

class TeamMember(BaseModel):
    id: int
    name: str
    role: str
    bio: str
    avatar_url: str
    linkedin: Optional[str]
    department: Optional[str]