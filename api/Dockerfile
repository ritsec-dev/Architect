FROM python:3.7-alpine

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

COPY . /app

WORKDIR /app

CMD ["gunicorn", "-b", "0.0.0.0:80", "app:app"]
EXPOSE 80