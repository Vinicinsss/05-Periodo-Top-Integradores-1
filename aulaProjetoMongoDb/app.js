import express from 'express';
import { connectDB } from '.src/cofig/mongoose.js';
import produtoRoutes from './src/routes/produtoRoutes.js';

export async function createApp() {
    await connectDB();
    const app = express();
    app.use(express.json());
    app.use('/api/produtos', produtoRoutes);


    // middleware para tratamento de erros
    app.use((err, req, res, next) => {
        console.error(err);
        res.status(400).json({ error: err.massage });
    });

    return app;
}