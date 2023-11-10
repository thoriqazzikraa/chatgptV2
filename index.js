const axios = require("axios")

async function generate(text) {
  try {
    const params = new URLSearchParams({ _wpnonce: "7d6d48a588", post_id: 22, url: "https://chatgptt.me", action: "wpaicg_chat_shortcode_message", message: text, bot_id: 0 })
    const { data } = await axios.post(`https://chatgptt.me/wp-admin/admin-ajax.php`, params)
    return data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data.message
  }
}

module.exports = { generate }
