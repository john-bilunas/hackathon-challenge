document.addEventListener('DOMContentLoaded', (arg) => {

    const box = document.createElement('div');
    box.setAttribute('id', 'box');
    box.style.overflow = 'auto';
    document.querySelector('body').appendChild(box);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8004f8e042msh22553afac6caa3bp1e5a86jsn03b72eab8ba2',
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
    };
     
    console.log(options);
    fetch('https://odds.p.rapidapi.com/v4/sports/baseball_mlb/scores', options)
        .then(response => response.json())
        .then(
        //log the MLB Score data
        response => {
        //log data in console
        console.log(response)
        //create an array to hold score objects
        const scores = [];
        
        for(let i = 0; i < response.length ; i++){
            if(response[i].scores){
                const tempObj = {
                'home': response[i].home_team,
                'away': response[i].away_team,
                'home_score': response[i].scores[0].score,
                'away_score': response[i].scores[1].score
            };
            scores.push(tempObj);
            }
        }

        for (let i = 0; i < scores.length; i++){
            
            const li = document.createElement('li');
            const table = document.createElement('table');
            const row1 = document.createElement('tr');
            const row2 = document.createElement('tr');
            
            const home = document.createElement('td');
            const away = document.createElement('td');
            const homeTeam = document.createElement('td');
            const awayTeam = document.createElement('td');
            const homeScore = document.createElement('td');
            const awayScore = document.createElement('td');

            home.innerText = 'Home';
            away.innerText = 'Away';
            homeTeam.innerText = `${scores[i].home}`;
            awayTeam.innerText = `${scores[i].away}`;
            homeScore.innerText = `${scores[i].home_score}`;
            awayScore.innerText = `${scores[i].away_score}`;

            row1.appendChild(home);
            row1.appendChild(homeTeam);
            row1.appendChild(homeScore);
            row2.appendChild(away);
            row2.appendChild(awayTeam);
            row2.appendChild(awayScore);
            table.appendChild(row1);
            table.appendChild(row2);
            li.appendChild(table);
            box.appendChild(li);

        }
        console.log(scores);


    }
        
        //create a new array with the info needed for scores
        



        //DOM Manipulation
       

        
        )
        .catch(err => console.error(err));

});

