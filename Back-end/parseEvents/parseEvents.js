const placesAndEvents = require("./placesAndEvents.json");
const fs = require("fs");

const eventCollection = placesAndEvents.objects;

(async () => {
  const eventResponses = [];

  for (const event of eventCollection) {
    if (event.objectType !== "EVENT") continue;

    console.log(event.objectId);

    const fullEventInfo = await fetchCardEvent(event);

    eventResponses.push(fullEventInfo);
  }

  const jsonParsedCollection = JSON.stringify(eventResponses);

  fs.writeFileSync("./jsonParsedCollection.json", jsonParsedCollection);
})();

async function fetchCardEvent(event) {
  const response = await fetch(
    `https://api.russpass.ru/cmsapi/v2_event?id=${event.objectId}&language=ru`
  );

  let json = await response.json();

  const cardUrl = `https://russpass.ru/event/${event.objectId}`;

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
    address: event.address,
    description: json.item?.description || "",
    cardUrl,
    working_time: json.places?.[0]?.working_time || null,
  };

  return parsedEvent;
}
