import app from './app.js';

const main = () => {
  const port = app.get('port');
  app.listen(port, () => {
    console.log(`Server on port ${port}`);
  }).on('error', (err) => {
    console.error(`Failed to start server: ${err.message}`);
  });
};

main();