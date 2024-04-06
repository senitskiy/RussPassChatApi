const axios = require("axios");
const qs = require("qs");
const { v4: uuidv4 } = require("uuid");

async function getAuthData() {
  let data = qs.stringify({
    scope: "GIGACHAT_API_PERS",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://ngw.devices.sberbank.ru:9443/api/v2/oauth",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      RqUID: uuidv4(),
      Authorization:
        "Basic Njg2MjY3ZTgtZDMxZC00NzU2LTg0MzctMDkzMDFhYjI0NGVkOjFhNGZkYWNkLTVhNDMtNGI3MS1iNWVmLWMyOGQ4N2RjZTE1Mw==",
    },
    data: data,
  };

  const response = await axios(config);

  return response.data;
}

module.exports = getAuthData;
