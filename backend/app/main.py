from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import team_routes

app = FastAPI(title="Team API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://team-page-dusky-phi.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(team_routes.router, prefix="/api/team")
