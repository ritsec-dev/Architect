FROM python:3.7-alpine

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

COPY . /api

WORKDIR /

CMD ["gunicorn", "-b", "0.0.0.0:80", "api.app:app"]
EXPOSE 80