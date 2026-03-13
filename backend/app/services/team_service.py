from app.database.db import team_members

def get_all_members():
    return team_members


def get_member(member_id: int):
    for member in team_members:
        if member["id"] == member_id:
            return member
    return None


def add_member(member):
    team_members.append(member)
    return member


def delete_member(member_id: int):
    global team_members
    team_members = [m for m in team_members if m["id"] != member_id]