from fastapi import APIRouter
from app.schemas.team_schema import TeamMember
from app.services import team_service

router = APIRouter()


@router.get("/")
def get_team():
    return team_service.get_all_members()


@router.get("/{member_id}")
def get_member(member_id: int):
    return team_service.get_member(member_id)


@router.post("")
def create_member(member: TeamMember):
    return team_service.add_member(member.dict())


@router.delete("/{member_id}")
def delete_member(member_id: int):
    team_service.delete_member(member_id)
    return {"message": "Member deleted"}