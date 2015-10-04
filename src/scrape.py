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

		count = 0

		for line in f:
			region = filename[0:3]
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

			count += 1
			print count

			for match in x.matches:
				try:
					matchDict[str(match.matchId)]
				except KeyError:
					matchFile.write(str(match.matchId) + '\n')
					matchDict[str(match.matchId)] = 1

			time.sleep(1)

		f.close()
		matchFile.close()

	def scrapeMatchData(self, filename, start, end):
		f = open('../res/' + filename, 'r')
		matchList = f.readlines()
		f.close()

		matches = open('../res/matches.txt', 'a')

		for matchId in matchList[start:end]:
			region = filename[8:10]		# FIRST TWO CHAR FOR REGION AFTER OMITTING MATCHES_
			url = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v2.2/match/'+matchId[:-1]+'?api_key='
			url += self.apikey

			print url

			r = requests.get(url)
			if(r.status_code != 200):
				print r.status_code
				print r.content
				break

			data = r.content

			x = json2obj(data)

			match = []
			res = []
			part = []
			for p in x.participants:
				partVals = []
				partVals.append(p.teamId)
				partVals.append(p.championId)
				# for m in p.masteries:
				# 	partVals.append(m.rank)
				# 	partVals.append(m.masteryId)
				# for r in p.runes:
				# 	partVals.append(r.rank)
				# 	partVals.append(r.runeId)
				partVals.append(p.spell1Id^p.spell2Id)
				part.append(partVals)

			if x.participants[0].teamId == 100 and x.participants[0].stats.winner == True:
				res.append(1)
			else:
				res.append(0)

			team1 = [player for player in part if player[0] == 100]
			team2 = [player for player in part if player[0] == 200]

			team1.sort(key=lambda champ: champ[1])
			team2.sort(key=lambda champ: champ[1])

			match = [item for sublist in team1 for item in sublist]
			tmpMatch = [item for sublist in team2 for item in sublist]
			match.extend(tmpMatch)

			matches.write(str(match) + ';' + str(res) + '\n')

			time.sleep(1)

		matches.close()

	# def scrapeCurrentMatch(self, region, summoner):
	# 	url = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v1.4/summoner/by-name/'+summoner+'?api_key='
	# 	url += self.apikey

	# 	r = requests.get(url)
	# 	if(r.status_code != 200):
	# 		print r.status_code
	# 		print r.content
	# 		break

	# 	sid = r.content.id

	def scrapeByMatchId(self,region,matchId):
		url = 'https://'+region+'.api.pvp.net/api/lol/'+region+'/v2.2/match/'+matchId+'?api_key='
		url += self.apikey

		r = requests.get(url)
		if(r.status_code != 200):
			print r.status_code
			print r.content
			return

		data = r.content

		x = json2obj(data)

		match = []
		res = []
		part = []
		for p in x.participants:
			partVals = []
			partVals.append(p.teamId)
			partVals.append(p.championId)
			# for m in p.masteries:
			# 	partVals.append(m.rank)
			# 	partVals.append(m.masteryId)
			# for r in p.runes:
			# 	partVals.append(r.rank)
			# 	partVals.append(r.runeId)
			partVals.append(p.spell1Id^p.spell2Id)
			part.append(partVals)

		if x.participants[0].teamId == 100 and x.participants[0].stats.winner == True:
			res.append(1)
		else:
			res.append(0)

		team1 = [player for player in part if player[0] == 100]
		team2 = [player for player in part if player[0] == 200]

		team1.sort(key=lambda champ: champ[1])
		team2.sort(key=lambda champ: champ[1])

		match = [item for sublist in team1 for item in sublist]
		tmpMatch = [item for sublist in team2 for item in sublist]
		match.extend(tmpMatch)

		finalRes = (match,res)
		return finalRes

	def parseMatchByFile(self,filename):
		f = open(filename, 'r')
		data = f.read()
		f.close()
		
		x = json2obj(data)

		match = []
		res = []
		part = []
		for p in x.participants:
			partVals = []
			partVals.append(p.teamId)
			partVals.append(p.championId)
			# for m in p.masteries:
			# 	partVals.append(m.rank)
			# 	partVals.append(m.masteryId)
			# for r in p.runes:
			# 	partVals.append(r.rank)
			# 	partVals.append(r.runeId)
			partVals.append(p.spell1Id^p.spell2Id)
			part.append(partVals)

		if x.participants[0].teamId == 100 and x.participants[0].stats.winner == True:
			res.append(1)
		else:
			res.append(0)

		team1 = [player for player in part if player[0] == 100]
		team2 = [player for player in part if player[0] == 200]

		team1.sort(key=lambda champ: champ[1])
		team2.sort(key=lambda champ: champ[1])

		match = [item for sublist in team1 for item in sublist]
		tmpMatch = [item for sublist in team2 for item in sublist]
		match.extend(tmpMatch)

		finalRes = (match,res)
		return finalRes


class Jsonifier:
	def __init__(self):
		return

	def to_JSON(self, obj):
	        return json.dumps(obj, default=lambda o: o.__dict__, 
	            sort_keys=True, indent=4)



def _json_object_hook(d): return namedtuple('X', d.keys())(*d.values())
def json2obj(data): return json.loads(data, object_hook=_json_object_hook)


rito = RitoPls()
jsonifier = Jsonifier()



#rito.scrapeChallenger('euw')							# need to modify code depending on region
#rito.scrapeMatchIdsFromSummoners('euwchallenger.txt')
rito.scrapeMatchData('matches_nachallenger.txt', 500, 1000)

#x = json.loads(data, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
#print x

