// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

function generateUserData() {
  const userData = {
    image: `https://avatars.dicebear.com/api/bottts/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
  }
  return userData
}

module.exports = {
  generateUserData,
}
