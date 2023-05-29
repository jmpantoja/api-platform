from pydantic import BaseModel


class Video(BaseModel):
    name: str
    url: str

class Playlist(BaseModel):
    name: str
    videos: list[Video]
