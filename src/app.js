const axios = require("axios");
const path = require("path");
const getAuthData = require("./getAuthData");
const { userPayload } = require("./userPayload");

const eventCollection = require("../events_collection.json");

process.env.NODE_EXTRA_CA_CERTS = path.resolve(
  __dirname,
  "dir",
  "with",
  "certs"
);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

async function ask() {
  const { access_token } = await getAuthData();

  console.log("access_token ;>> ", access_token);

  const payloadJson = [];

  for (let i = 0; i < 51; i++) {
    const e = eventCollection[i];

    payloadJson.push({
      id: e.objectId,
      descr: `${e.title}. ${e.description}`,
    });
  }

  let data = JSON.stringify({
    model: "GigaChat",
    messages: [
      {
        role: "system",
        content: `Ты туроператор.\nТвоя задача — подобрать наиболее интересные места для пользователя на основе его запроса.\nВ ответе нужно вернуть только массив id необходимых мест. Необходимые id ты можешь найти в этом JSON: ${JSON.stringify(
          payloadJson
        )}`,
      },
      {
        role: "user",
        content:
          "Верни id мест, которые соответствуют следующим тегам: Еда, Музеи, Грузинская кухня",
      },
    ],
    temperature: 1,
    top_p: 0.1,
    n: 1,
    stream: false,
    max_tokens: 512,
    repetition_penalty: 1,
    update_interval: 0,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    data: data,
  };

  // const response = await axios(config);

  // console.log(response.data.choices[0].message);
}

ask();
