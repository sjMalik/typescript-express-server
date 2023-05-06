import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b:number) : number => {
    return a + b;
}

app.get('/', (req: Request, res: Response, next: NextFunction)=> {
    console.log(add(2,3));
    res.send('Hello from Typescript Server')
});

app.listen(3000, ()=> console.log('Server listening on port 3000'))