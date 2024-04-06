const excursion_unparsed = require("./tracksAndExcursions.json");
const fs = require("fs");

const eventCollection = excursion_unparsed.objects;

(async () => {
  const eventResponses = [];

  for (const event of eventCollection) {
    if (event.objectType !== "EXCURSION") continue;

    console.log(event.objectId);

    const fullEventInfo = await fetchCardEvent(event);

    eventResponses.push(fullEventInfo);
  }

  const jsonParsedCollection = JSON.stringify(eventResponses);

  fs.writeFileSync("./excursion_collection.json", jsonParsedCollection);
})();

async function fetchCardEvent(event) {
  const response = await fetch(
    `https://api.russpass.ru/campaign/excursion?id=${event.objectId}&language=ru`
  );

  let json = await response.json();

  const cardUrl = `https://russpass.ru/excursion/${event.objectId}`;

  const parsedEvent = {
    objectId: event.objectId,
    objectType: event.objectType,
    imageUrl: event.images[0]?.url || "",
    popularity: event.popularity,
    russpassRecommendation: event.russpassRecommendation,
    title: event.title,
    type: event.type,
    isCanBuy: event.isCanBuy,
    price: event.price,
    hasAudioGuide: event.hasAudioGuide,
    themes: event.themes,
    destination: event.destination,
    durationHours: event.durationHours,
    isCampaign: event.isCampaign,
    description: json.item?.description || "",
    cardUrl,
  };

  return parsedEvent;
}
