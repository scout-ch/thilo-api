import requests
import json
import os

backendURL = "https://api.thilo.scouts.ch/"

mainAPIs = [
    "links",
    "start-page",
    "sections"
]

locale = [
    "de",
    "fr",
    "it"
]

def checkIfDirExists(dir):
    if not os.path.exists(dir):
        os.makedirs(dir)

for api in mainAPIs:
    for lang in locale:
        url = backendURL + api + "?_locale=" + lang
        print("Requesting " + url)
        response = requests.get(url)
        data = response.json()

        # export to subfolder
        workingDir = "exports/"
        checkIfDirExists(workingDir)

        with open(workingDir + api + "-" + lang + ".json", 'w') as outfile:
            json.dump(data, outfile, indent=4)

        print("Done with " + api + "-" + lang + ".json")
    print("Done with " + api)

print("Done with all APIs")
