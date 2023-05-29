from dataclasses import dataclass

from .model import Playlist, Video
from .video_manager import VideoManager


@dataclass
class Response:
    playlist: str
    videos: list[str]


class Manager:
    def __init__(self, playlist: Playlist):
        self.__name = playlist.name
        self.__videos = playlist.videos
        pass

    def run(self) -> Response:
        return Response(
            playlist=self.__name,
            videos=list((self.__process(video) for video in self.__videos))
        )

    def __process(self, video: Video):
        manager = VideoManager(video)
        return manager.run()
