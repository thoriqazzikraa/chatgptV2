Scraping Chat Gpt from [chat.ramxn.dev](https://chat.ramxn.dev/chat/)

# Install 
`npm i @nechlophomeriaa/chatgptv2`

# Usage
```
(async () => {
const chatgpt = require("@nechlophomeriaa/chatgptv2")
xonst ai = await chatgpt.generate(text, model) // Default model is set to gpt-4-poe
console.log(ai)
})
```

# Models
```
const chatgpt = require("@nechlophomeriaa/chatgptv2")
const model = chatgpt.model()
console.log(model)
```
