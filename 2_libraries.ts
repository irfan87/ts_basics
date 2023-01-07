// a simple custom Express server with TypeScript
import express, { Express, Request, Response } from "express";

// crypto is a Node built-in library -> https://nodejs.org/api/crypto.html#crypto
import crypto from "crypto";

const app: Express = express();

const PORT = 3001 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
	res.send("Express and TypeScript is running!!!");
});

app.listen(PORT, () => {
	console.log(`Express is listening on port ${PORT}`);
});
