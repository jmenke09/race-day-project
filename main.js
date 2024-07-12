var raceNumber = Math.floor(Math.random() * 1000)
var early = true
var age = 18

if (age >= 18 && early === true) 
    {raceNumber += 1000}

if(age >= 18 && early === true) 
    {console.log(`Your race number is ${raceNumber} and you will race at 9:30 am.`)}
else if(age >= 18 && early === false)
    {console.log(`Your race number is ${raceNumber} and you will race at 11:00 am.`)}
else if(age < 18)
    {console.log(`Your race number is ${raceNumber} and you will race at 12:30 pm.`)}
