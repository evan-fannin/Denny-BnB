FROM python:3.7-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN apk add --virtual build_deps gcc python3-dev musl-dev \
    && apk add jpeg-dev zlib-dev \
    && pip3 install -r requirements.txt \
    && apk del build_deps
COPY . .