johnsTeam = [89, 120, 103];
mikesTeam = [116, 94, 113];

function calcAverage(teamArray){
    var teamTotal = 0;
    var teamCount = teamArray.length;
    teamArray.forEach(x => teamTotal += x);
    return teamTotal / teamCount;
}

var jTeamAverage = calcAverage(johnsTeam);
var mTeamAverage = calcAverage(mikesTeam);

if(jTeamAverage > mTeamAverage){
    console.log('John\'s team wins with an average of', jTeamAverage);
}else if(mTeamAverage > jTeamAverage){
    console.log('Mike\'s team wins with an average of', mTeamAverage);
}else{
    console.log('Both teams are at a tie of',jTeamAverage);
}