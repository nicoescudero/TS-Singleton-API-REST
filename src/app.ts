import express from 'express';

const app: express.Application = express();

app.listen(3000,()=>console.log(`Server on port 3000`));

export  default app;