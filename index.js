const axios = require("axios")

async function generate(text) {
  try {
    const { data } = await axios(`https://chatg.io/wp-json/mwai-ui/v1/chats/submit`, {
      method: "post",
      data: {
        id: null,
        botId: "default",
        messages: [],
        newMessage: text,
        stream: false
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
    return data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data.message
  }
}

module.exports = { generate }
