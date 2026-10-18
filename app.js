const express = require('express');
const rateLimit = require('express-rate-limit');
const reasons = require('./reasons.json');

function createApp(options = {}) {
  const app = express();
  const limiter = rateLimit({
    windowMs: options.rateLimitWindowMs || 60 * 1000,
    max: options.rateLimitMax || 120,
    message: 'Too many requests from this IP, please try again later.'
  });

  app.use(limiter);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.get('/health', (req, res) => res.json({ status: 'alive' }));
  const randomReason = (req, res) => {
    const randomIndex = Math.floor(Math.random() * reasons.length);

    res.json({ reason: reasons[randomIndex] });

    /**
     * Optionally, prepend a custom phrase to the death message.
     *
     * Example:
     * res.json({ reason: `Died because they ${reasons[randomIndex]}` });
     *
     * Note: Make sure each entry in the reasons array is grammatically
     * compatible with the prefix.
     */
  };

  app.get(['/death', '/deaths'], randomReason);

  app.use((req, res) => {
    res.status(404).json({
      error: 'Endpoint not found. Available endpoints: /death, /deaths, /health'
    });
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error', message: err.message });
  });

  return app;
}

module.exports = createApp;
module.exports.createApp = createApp;
module.exports.reasons = reasons;
