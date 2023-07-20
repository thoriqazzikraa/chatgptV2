const axios = require("axios");

const listModel = [
  "claude-instant",
  "claude-2-100k",
  "claude-instant-100k",
  "sage",
  "gpt-4-0613",
  "gpt-4-poe", //Default Model
  "gpt-3.5-turbo-poe",
  "gpt-3.5-turbo-16k-poe",
];

async function model() {
  return listModel;
}

async function generate(text, model) {
  if (model === undefined || model === 0 || model === null) {
    var getModel = "gpt-4-poe";
  } else {
    var getModel = model;
  }
  const { data } = await axios(
    `https://chat.ramxn.dev/backend-api/v2/conversation`,
    {
      method: "post",
      data: {
        api_key: "",
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
