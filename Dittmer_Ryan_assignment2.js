/*Ryan Dittmer  
  01/12/2012    
  Deliverable 2 
  Playing a game  */
 
 var friendReady;
 var friendOnline;
 var playerName;
 var playerScore;
 
 
 friendReady  = true;
 friendOnline = true;
 playerName   = [ "ryan","jason","moe" ];
 playerScore  = [  0,    0,   0  ];
 
 
 //procedure
 console.log( "I want to play a First Person Shooter game online. \nI want to play with my friends, are they online? ")
 
 if ( friendOnline == true && friendReady == true )
 	console.log( "My friends are online and we are going to play." );
 else
 	console.log( "I am just going to play by myself." );
 	
 playerScore = playGame( playerScore, 0 );
 
 
 //number function
 function getKills( playerNum )
 {
 	var deathLimit;
 	var randomNum;
 	var numDeaths;
 	var numKills;
 	
 	deathLimit = 5;
 	randomNum  = 0;
 	numDeaths  = 0;
 	numKills   = 0;
 	
 	console.log( playerName[ playerNum ] + " has begun the match." );
 	while ( numDeaths < deathLimit )
 	{
 		randomNum = Math.random();
 		randomNum = Math.round( randomNum );
 		if ( randomNum == 0 )
 		{
 			console.log( playerName[ playerNum ] + " has died. " );
 			numDeaths = numDeaths + 1;
 		}
 		else
 		{
 			console.log( playerName[ playerNum ] + " has killed an enemy." );
 			numKills = numKills + 1;
 		}
 	}
 	return numKills;
 }
 
 
 //boolean function
 function getBestScore( playerScore, bestScore, playerNum )
 {
 	if ( playerScore > bestScore || playerScore == bestScore )
 	{	
 		console.log( playerName[ playerNum ] + " now has the best score." );
 		return true;
 	}
 	else
 		return false;
 }
 
 
  //array function
 function playGame( scores, zero )
 {
 	var numKills;
 	var totalScore;
 	var bestScore;
 	var hasBestScore;
 	
 	numKills      = 0;
 	totalScore    = 0;
 	bestScore     = 0;
 	hasBestScore  = false;
 	
 	for ( var i = 0; i < scores.length; ++i )
 	{
 		numKills = getKills( i );
 		totalScore   = ( numKills * 100 );
 		scores[ i ]  = totalScore;
 		
 		console.log( playerName[ i ] + "'s total score is " + scores[ i ] );
 		
 		hasBestScore = getBestScore( scores[ i ], bestScore, i );
 		if ( hasBestScore == true )
 			bestScore = scores[ i ];
 	}	
 	return scores;
 }
  
 
 
 
 
 
 
 
 
 
 
 