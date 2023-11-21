const axios = require("axios")
const cheerio = require("cheerio")

async function generate(text) {
  try {
    const { data } = await axios.get(`https://chatgptt.me/`)
    let $ = cheerio.load(data)
    const nonce = $("div.elementor-widget-wrap > div:nth-child(7) > div > div > div").attr("data-nonce")
    const params = new URLSearchParams({ _wpnonce: nonce, post_id: 22, url: "https://chatgptt.me", action: "wpaicg_chat_shortcode_message", message: text, bot_id: 0 })
    const dataa = await axios.post(`https://chatgptt.me/wp-admin/admin-ajax.php`, params)
    return dataa.data
  } catch (err) {
    console.log(err.response.data)
    return err.response.data.message
  }
}

module.exports = { generate }
