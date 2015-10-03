import json
import requests
from collections import namedtuple

f = open('../res/apikey.txt', 'r')
apikey = f.readline()

url = 'https://kr.api.pvp.net/observer-mode/rest/featured?api_key='
url += apikey

r = requests.get(url)
data = r.content

def _json_object_hook(d): return namedtuple('X', d.keys())(*d.values())
def json2obj(data): return json.loads(data, object_hook=_json_object_hook)

#x = json.loads(data, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
#print x

x = json2obj(data)
print x.clientRefreshInterval