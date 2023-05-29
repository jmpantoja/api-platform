from dataclasses import dataclass
from enum import Enum
from hashlib import md5
from os.path import isfile as is_file

import whisper
import json
from slugify import slugify
from yt_dlp import YoutubeDL

from .model import Video


def get_options(path: str):
    return {
        'outtmpl': {
            'default': path
        },
        'format': 'm4a/bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'm4a',
        }]
    }


class Status(str, Enum):
    ERROR = 'ERROR'
    HIT = 'HIT'
    MISS = 'MISS'


@dataclass
class Success:
    status: Status
    name: str
    url: str
    audio: str
    subtitles: str


@dataclass
class Error:
    name: str
    url: str
    status: Status = Status.ERROR


class VideoManager:
    __url: str
    __name: str
    __audio: str
    __subtitles: str

    def __init__(self, video: Video):
        hash = md5(video.url.encode('utf-8')).hexdigest()
        name = slugify(video.name)
        path = f"{hash}/{name}"

        self.__name = video.name
        self.__url = video.url
        self.__audio = f"{path}.m4a"
        self.__subtitles = f"{path}.json"

    def run(self) -> Success | Error:
        status = self.__download()
        if status == Status.ERROR:
            return Error(
                name=self.__name,
                url=self.__url,
            )

        status = self.__transcribe()

        return Success(
            status=status,
            name=self.__name,
            url=self.__url,
            audio=self.__audio,
            subtitles=self.__subtitles
        )

    def __download(self) -> Status:
        path_to_audio = f'./downloads/{self.__audio}'

        if is_file(path_to_audio):
            return Status.HIT

        opts = get_options(path_to_audio)

        with YoutubeDL(opts) as ydl:
            error_code = ydl.download(self.__url)

            if 0 != error_code:
                return Status.ERROR

            return Status.MISS

    def __transcribe(self) -> Status:
        path_to_audio = f'./downloads/{self.__audio}'
        path_to_subtitles = f'./downloads/{self.__subtitles}'
        if is_file(path_to_subtitles):
            return Status.HIT

        model = whisper.load_model('base')
        result = model.transcribe(path_to_audio, fp16=False)

        with open(path_to_subtitles, "w") as file:
            json.dump(result, file)
            return Status.MISS


