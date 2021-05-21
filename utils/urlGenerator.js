function urlTitleGen(string) {
  let url = string.trim().split(" ").join("_");
  return `/wiki/${url}`;
}

module.exports = urlTitleGen;
