function cake(ingredient, amount){
  var recipe = {'caster sugar': 160, 'butter': 170, 'eggs': 3, 'self-raising flour': 115, 'cocoa powder': 55};
  let newRatio = amount / recipe[ingredient];
  Object.keys(recipe).map(key => {
    recipe[key] = parseFloat((recipe[key] * newRatio).toFixed(1));
    if (key !== 'eggs') { recipe[key] += 'g'; };
  })
  return recipe;
}

console.log(cake('caster sugar', 80));