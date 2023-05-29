FROM python:3.10-slim as app_whisper
WORKDIR /code

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DEBIAN_FRONTEND=noninteractive


RUN set -x && \
	apt-get update &&  \
    apt-get install -y \
    git \
    ffmpeg

RUN pip3 install "git+https://github.com/openai/whisper.git"

COPY ./requirements.txt /code/requirements.txt
RUN pip3 install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app
#CMD ["uvicorn", "app.main:app", "--reload",  "--proxy-headers", "--host", "0.0.0.0", "--port", "8080"]
