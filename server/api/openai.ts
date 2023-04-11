import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-dKYBuzjJr4mntcytzXc3fCUY",
    apiKey: "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",
});

export default defineEventHandler(async () => {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "user", "content": "Hello!"}
        ]
    })
    console.log(response)
    return response.data;
})