const fs = require('fs');
const data = fs.readFileSync('./data/pokedex.json','utf-8')
const json = JSON.parse(data)

function links(router) {

   router.get('/pokemons/:id', function(req, res) {
    const idSelected = req.params.id
    const pokemon = json.find(element => {return idSelected == element.ndex} )
    res.send(pokemon)
    })

   router.get('/', function (req,res) {

    let tab = []
    for (let item of json)
     {
      tab.push({
       id: item.ndex,
       name: item.nom
      })
     }

     console.log(tab);
     res.send(tab)
   })

}

module.exports = links;
