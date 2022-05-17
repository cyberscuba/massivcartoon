const getRandomInt = () => {
  return new Promise( resolve => {
    const randomInt = Math.floor( (Math.random() * 100) + 1)
      resolve( randomInt)
  })
};

export default getRandomInt