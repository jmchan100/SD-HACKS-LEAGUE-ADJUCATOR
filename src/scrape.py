import json
import requests		# might have to pip install requests
import time
from collections import namedtuple

class RitoPls:
	def __init__(self):
		f = open('../res/apikey.txt', 'r')
		self.apikey = f.readline()

	def scrapeFeaturedGames(self):
		url = 'https://kr.api.pvp.net/observer-mode/rest/featured?api_key=' # THIS IS KR
		url += self.apikey

		r = requests.get(url)

		if(r.status_code != 200):
			print 'status code was: ' + r.status_code
			return

		data = r.content

		x = json2obj(data)

		for game in x.gameList:
			for participant in game.participants:
				print participant.championId

	def scrapeChallenger(self, region):
		url = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key='
		url += self.apikey

		r = requests.get(url)

		if(r.status_code != 200):
			print 'status code was: ' + r.status_code
			return

		data = r.content

		x = json2obj(data)

		f = open('../res/' + region + 'challenger.txt', 'w')

		for entry in x.entries:
			f.write(str(entry.playerOrTeamId) + '\n')
			print entry.playerOrTeamId
		f.close()

	def scrapeMaster(self, region):
		url = 'https://' + region + '.api.pvp.net/api/lol/' + region + '/v2.5/league/master?type=RANKED_SOLO_5x5&api_key='
		url += self.apikey

		r = requests.get(url)
		if(r.status_code != 200):
			print 'status code was: ' + r.status_code
			return

		data = r.content

		x = json2obj(data)

		f = open('../res/' + region + 'master.txt', 'w')

		for entry in x.entries:
			f.write(str(entry.playerOrTeamId) + '\n')
			print entry.playerOrTeamId
		f.close()


	def scrapeMatchIdsFromSummoners(self, filename):
		f = open('../res/' + filename, 'r')
		matchFile = open('../res/matches_' + filename, 'a')
		matchFile2 = open('../res/matches_' + filename, 'r')
		matchFileList = matchFile2.readlines()
		matchDict = dict()
		matchFile2.close()

		for line in f:
			region = filename[0:2]
			url = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v2.2/matchlist/by-summoner/'+line[:-1]+'?rankedQueues=RANKED_SOLO_5x5&api_key='
			url += self.apikey

			print url

			r = requests.get(url)
			if(r.status_code != 200):
				print r.status_code
				break

			data = r.content

			x = json2obj(data)

			matchDict = {str(matchLine[:-1]):1 for matchLine in matchFileList}

			print x
			print matchDict

			for match in x.matches:
				try:
					matchDict[str(match.matchId)]
				except KeyError:
					matchFile.write(str(match.matchId) + '\n')
					matchDict[str(match.matchId)] = 1

			time.sleep(1)

		f.close()
		matchFile.close()


def _json_object_hook(d): return namedtuple('X', d.keys())(*d.values())
def json2obj(data): return json.loads(data, object_hook=_json_object_hook)


rito = RitoPls()
#rito.scrapeChallenger('na')
rito.scrapeMatchIdsFromSummoners('nachallenger.txt')

#x = json.loads(data, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
#print x

