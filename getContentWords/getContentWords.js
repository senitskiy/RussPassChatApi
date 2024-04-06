const stopWords = require("./stopwords.json");

const stopWordsSet = new Set(stopWords);

function getContentWords(textContent = "") {
  const plaintText = textContent
    .toLowerCase()
    .replaceAll(/[-:,!<>.?/\\()«»"]/g, "");

  const descriptionWords = plaintText
    .split(" ")
    .filter((w) => !stopWordsSet.has(w));

  return descriptionWords;
}

module.exports = getContentWords;
