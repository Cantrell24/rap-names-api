const express = require ('express')
const app = express()
const PORT = 8000

const rappers = { //21 savage, chance and unknown is a property of RAPPERS
    '21 savage':{
        'age':29, //objects
        'birthName': '21 savage',
        'birthLocation':'London, England'
    },

    'chance the rapper' :{
        'age': 32,
        'birthName': 'Chance the Rapper',
        'birthLocation': 'Chicago, IL'
    },

    'unknown': {
        'age': 0,
        'birthName': 'Unknown',
        'birthLocation': 'Unknown'
    },

    'legend': {
        'age': 52,
        'birthName': 'Cantrell Andrews',
        'birthLocation': 'St. Louis, Mo'
    }


}


// Like an event lister. Instead of click its a network req.
app.get('/', (request, response)=>{
        response.sendFile(__dirname + '/index.html') //Have to tell it where to get the html file. Server knows where to start looking, dirname. 
})

app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){ //grabbing objects based of the properties name
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it`)
})