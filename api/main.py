import os
import requests
from flask import Flask, request
from dotenv import load_dotenv
#import der lokalen Variablen, die nicht ins Git sollen
load_dotenv(dotenv_path="./.env.local")
#Definition der UNSPLASH API URL
UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")
#Setzen des DEBUG Modus
DEBUG=bool(os.environ.get("DEBUG", True))

#Wenn kein KEY gefunden wurde, wird das Programm abgebrochen
if not UNSPLASH_KEY:
    raise EnvironmentError("Please create .env.local file and insert there UNSPLASH_KEY")
#Definition des AppNamens
app = Flask(__name__)
#Status des DEBUG Modus
app.config["DEBUG"] = DEBUG
#Anlegen des Pfades für den Flask Server
@app.route("/new-image")
#Funktion des
def new_image():
    word = request.args.get("query")

    headers={
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {
        "query": word
    }

    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
