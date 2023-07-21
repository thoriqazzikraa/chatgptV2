const axios = require("axios");

const listModel = [
  "claude-instant",
  "claude-2-100k",
  "claude-instant-100k", //Default
  "sage",
  "gpt-4-0314",
  "gpt-4-poe",
  "gpt-3.5-turbo-poe",
  "gpt-3.5-turbo-16k-poe",
];

const listModelV2 = [
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-0613",
  "gpt-3.5-turbo-16k",
  "gpt-3.5-turbo-16k-0613", // Default
  "gpt-4",
];

async function model() {
  return listModel;
}

async function modelV2() {
  return listModelV2;
}

async function generateV2(text, model) {
  const getModel = model ? model : "gpt-3.5-turbo-16k-0613";
  const { data } = await axios(
    `https://freegpt-webui.ramonvc.repl.co/backend-api/v2/conversation`,
    {
      method: "post",
      data: {
        conversation_id: "a400053c-86ae-4001-8c10-1897752ca26",
        action: "_ask",
        model: getModel,
        jailbreak: "default",
        meta: {
          id: "7258168646932333518",
          content: {
            conversation: [],
            internet_access: false,
            content_type: "text",
            parts: [{ content: text, role: "user" }],
          },
        },
      },
      headers: {
        accept: "text/event-stream",
        "content-type": "application/json",
      },
    }
  );
  const result = {
    model: getModel,
    data: data,
  };
  return result;
}

async function generate(text, model, apikey) {
  const getModel = model ? model : "claude-instant-100k";
  const apiKey = apikey ? apikey : "";
  const { data } = await axios(
    `https://chat.ramxn.dev/backend-api/v2/conversation`,
    {
      method: "post",
      data: {
        api_key: apiKey,
        conversation_id: "ee83e63c-4f64-4cc1-a30e-18974a563d8",
        action: "_ask",
        model: getModel,
        jailbreak: "default",
        meta: {
          id: "7257975704691867202",
          content: {
            conversation: [],
            internet_access: false,
            content_type: "text",
            parts: [{ content: text, role: "user" }],
          },
        },
      },
      headers: {
        accept: "text-event-stream",
        "content-type": "application/json",
      },
    }
  );
  const result = {
    model: getModel,
    data: data,
  };
  return result;
}

module.exports = { model, modelV2, generateV2, generate };
