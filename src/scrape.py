import json
import requests
from collections import namedtuple

class RitoPls:
	def __init__(self):
		f = open('../res/apikey.txt', 'r')
		self.apikey = f.readline()

	def scrapeFeaturedGames(self):
		url = 'https://kr.api.pvp.net/observer-mode/rest/featured?api_key=' # THIS IS KR
		url += self.apikey

		r = requests.get(url)
		data = r.content

		x = json2obj(data)

		for game in x.gameList:
			for participant in game.participants:
				print participant.championId

	def scrapeChallenger(self, region):
		url = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key='
		url += self.apikey

		r = requests.get(url)
		data = r.content

		x = json2obj(data)

		f = open('../res/' + region + 'challenger.txt', 'w')

		for entry in x.entries:
			f.write(str(entry.playerOrTeamId) + '\n')
			print entry.playerOrTeamId

	def scrapeMaster(self, region):
		url = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.5/league/master?type=RANKED_SOLO_5x5&api_key='
		url += self.apikey

		r = requests.get(url)
		data = r.content

		x = json2obj(data)

		f = open('../res/' + region + 'master.txt', 'w')

		for entry in x.entries:
			f.write(str(entry.playerOrTeamId) + '\n')
			print entry.playerOrTeamId


def _json_object_hook(d): return namedtuple('X', d.keys())(*d.values())
def json2obj(data): return json.loads(data, object_hook=_json_object_hook)


rito = RitoPls()
rito.scrapeMaster('kr')

#x = json.loads(data, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
#print x

