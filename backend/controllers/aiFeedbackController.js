const openAiApi = require('../utils/openAiApi');

exports.getAiFeedback = (req, res) => {
  const { text } = req.body;
  openAiApi.getFeedback(text)
    .then(feedback => res.json({ feedback }))
    .catch(err => res.status(500).json({ error: err.message }));
};