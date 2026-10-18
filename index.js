const createApp = require('./app');

const port = Number(process.env.PORT) || 3000;
const app = createApp();

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Death-as-a-Service running on port ${port}`);
    console.log(`Try: http://localhost:${port}/death`);
  });
}

module.exports = app;
