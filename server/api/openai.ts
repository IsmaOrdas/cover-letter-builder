import { Configuration, OpenAIApi } from "openai";
const runtimeConfig = useRuntimeConfig();
const configuration = new Configuration({
    organization: runtimeConfig.NUXT_API_ORG,
    apiKey: runtimeConfig.apiToken
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    const openai = new OpenAIApi(configuration);
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "user", "content": "Write a cover letter for a software engineer"}
        ]
    })
    return response.data;
})