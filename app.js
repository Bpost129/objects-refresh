const game = {
  title: 'The Last of Us',
  release: 2013,
  genre: 'action-adventure',
  price: 59.99,
}

game.rating = 'M'


console.log(Object.keys(game))


const voteArr = ['yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'yes', 'no', 'no']

function voteTallyDot(arr) {
  let results = {}

  arr.forEach(x => {
    results[x] ? results[x]++ : results[x] = 1
  })

  return results
}

// console.log(voteTallyDot(voteArr))