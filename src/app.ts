import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Cargar variables de entorno
dotenv.config();

class App {
    public app: express.Application;
  
    constructor() {
      this.app = express();
    }

}

const app = new App();
app.listen();
