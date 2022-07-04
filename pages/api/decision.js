export default async function handler(req, res) {
  const { Configuration, OpenAIApi } = require('openai');

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: 'text-curie-001',
    prompt: `Write a supreme court decision about ${req.query.court_case}`,
    temperature: 0.94,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.send({ decision: response.data.choices[0].text });
}
