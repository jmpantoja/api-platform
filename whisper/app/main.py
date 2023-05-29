from fastapi import FastAPI

from app.model import Playlist
from app.playlist import Manager

api = FastAPI()

@api.post("/transcribe")
def transcribe(playlist: Playlist):
    manager = Manager(playlist)
    return manager.run()
