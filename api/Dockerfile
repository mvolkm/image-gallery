# Baseimage festlegen
FROM python:3.9
# Pfad zur APP
WORKDIR /app
# Port
EXPOSE 5050
# Kopieren der python Files
COPY Pipfile Pipfile.lock ./
# Install Pipenv für Python und alle Abhängigkeiten der APP
RUN pip install pipenv
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt
# kopieren aller APP Daten in den Container
COPY . ./
# Starten von Flask für die API
CMD ["python", "main.py"]