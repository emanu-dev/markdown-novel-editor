const { OpenAIAPI } = require('openai');

const openai = new OpenAIAPI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.getFeedback = async (text) => {
  const response = await openai.createCompletion({
    engine: 'davinci',
    prompt: `Provide feedback for the following text:\n\n${text}\n\nFeedback:`,
    maxTokens: 150,
    n: 1,
    stop: ["\n"],
    temperature: 0.5
  });
  return response.choices[0].text.trim();
};