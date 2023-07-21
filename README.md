Scraping Chat Gpt from [chat.ramxn.dev](https://chat.ramxn.dev/chat/)

# Install

`npm i @nechlophomeriaa/chatgptv2`

# Usage

```
const { model, modelV2, generate, generateV2 } = require("@nechlophomeriaa/chatgptv2")
```

# Apikey

You can get the apikey for free by join [this discord server](https://discord.gg/chimeragpt)

# Models

```
const model = model()
console.log(model)

const model2 = modelV2()
console.log(model2)
```

# Example

```
(async () => {
const ai = generate(text, model, apikey) // Default model is claude-instant-100k
console.log(ai)
})
```

Or you can use free version

```
(async () => {
const ai = generateV2(text, model) // Default model is gpt-3.5-turbo-16k-0613
console.log(ai)
})
```
