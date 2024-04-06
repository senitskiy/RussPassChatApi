const restaurants_unparsed = require("./restaurants_unparsed.json");
const fs = require("fs");

const eventCollection = restaurants_unparsed.objects;

(async () => {
  const eventResponses = [];

  for (const event of eventCollection) {
    console.log(event.objectId);

    const fullEventInfo = await fetchCardEvent(event);

    eventResponses.push(fullEventInfo);
  }

  const jsonParsedCollection = JSON.stringify(eventResponses);

  fs.writeFileSync("./restaurants_collection.json", jsonParsedCollection);
})();

async function fetchCardEvent(event) {
  const response = await fetch(
    `https://api.russpass.ru/cmsapi/restaurant?id=${event.objectId}&language=ru`
  );

  let json = await response.json();

  const cardUrl = `https://russpass.ru/restaurant/${event.objectId}`;

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
    cuisines: event.cuisines,
    address: event.address,
    hasCompliment: event.hasCompliment,
    description: json.item?.description || "",
    cardUrl,
    working_time: json.item?.working_time || null,
  };

  return parsedEvent;
}
