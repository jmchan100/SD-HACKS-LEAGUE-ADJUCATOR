// Parse app key initializer
//Parse.initialize("O8DRdrCH1swFcLmKGBY6T7SWEuZpzdblkqvi9Ucj", "DTPRIUqThzJpuFBzfhO78acdOSy22q2t5vCax7WH");

// League DEV api key 89fd5947-db70-4995-bcfe-46600a67628f
// Randy's api key 1809d909-de42-4eda-ae26-645323c35f5b
var APIKEY = "1809d909-de42-4eda-ae26-645323c35f5b";
var matchID ="";
var champID = 0;
var i = 0;

function matchLookUp() {   
    matchID = 1955047813;
    //$("matchId").val();
    console.log("halp");
    //User input a starting matchID
    if (matchID !== null) {
        $.ajax({
            // Example matchID 1955047813
            url:'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID + '?includeTimeline=false&api_key=' + APIKEY,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                
                alert(json.participants[0].championId);
              /*  for(i = 0; i < 5; i++){
                    
                    champID = json.participants[i].championId;
                    console.log(champID);
                }*/
              /*  for(i = 5; i < 10; i++){
                    
                    champID = json[participants][i].championId;
                }*/



            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data 1!");
                matchID = null;
            }
        });
    } else {}
}

function letsGetMasteries(summonerID) {
    var season = "SEASON4";
    $.ajax({
        url: "https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/" + summonerID + "/summary?season=" + season + "&api_key=" + APIKEY,
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function (resp) {
                kills = resp.playerStatSummaries[0].aggregatedStats.totalChampionKills;
                towers = resp.playerStatSummaries[0].aggregatedStats.totalAssists;
                assists = resp.playerStatSummaries[0].aggregatedStats.totalTurretsKilled;
                wins = resp.playerStatSummaries[0].wins;
                
        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("error getting Summoner data 2!");
        }
    });
}