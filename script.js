const games = [
    
    {title: 'yokotaro', author: 'drakengard'},
   
    {title: 'hideokojima', author: 'mgs2'},
   
    {title: 'suda51', author: 'FSR'},
     
    {title: 'miyazaki', author: 'ds1'}
 ]
 


function getTheTitles(games) {
   const titleGames = games.map(game => game.title);
   console.log(titleGames);
}

getTheTitles(games);