/*Ryan Dittmer  
  01/12/2012    
  Deliverable 2 
  Playing a game  */
 
 var friendReady;
 var friendOnline;
 var playerName;
 var playerScore;
 var winningMsg;
 var deathLimit;
 
 
 friendReady  = true;
 friendOnline = true;
 playerName   = [ "ryan","jason","moe" ];
 playerScore  = [  0,    0,   0  ];
 winningMsg   = " has won the game!";
 deathLimit   = 5;
 
 
 //procedure
 console.log( "I want to play a First Person Shooter game online. \nI want to play with my friends, are they online? ")
 
 if ( friendOnline == true && friendReady == true )
 	console.log( "My friends are online and we are going to play." );
 else
 	console.log( "I am just going to play by myself." );
 	
 console.log( "The game will start and each player gets to play until they reach " + deathLimit + " deaths. \nThe score is then counted and whoever has the highest wins! \nThe players are entering the match: " );
 	
 playerScore = playGame( playerScore, deathLimit );
 
 
 //number function
 function getKills( playerNum, deathLimit )
 {
 	var randomNum;
 	var numDeaths;
 	var numKills;
 
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
 function playGame( scores, deathLimit )
 {
 	var numKills;
 	var totalScore;
 	var bestScore;
 	var hasBestScore;
 	var bestName;
 	
 	numKills      = 0;
 	totalScore    = 0;
 	bestScore     = 0;
 	hasBestScore  = false;
 	
 	for ( var i = 0; i < scores.length; ++i )
 	{
 		numKills = getKills( i, deathLimit );
 		totalScore   = ( numKills * 100 );
 		scores[ i ]  = totalScore;
 		
 		console.log( playerName[ i ] + "'s total score is " + scores[ i ] );
 		
 		hasBestScore = getBestScore( scores[ i ], bestScore, i );
 		if ( hasBestScore == true )
 		{
 			bestScore = scores[ i ];
 			bestName  = getBestName( playerName[ i ], winningMsg );
 		}
 	}	
 	console.log( bestName );
 	return scores;
 }
 
 
 //string function
 function getBestName ( playerName, winningMsg )
 {
 	var winner;
 	
 	winner = "";
 	
 	winner = playerName.concat( winningMsg );
 	winner = winner.toUpperCase();
 	
 	return winner;
 }
 
 
 
 
 
 
 
 
 
 
 