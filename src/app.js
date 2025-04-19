
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import candidatRoutes from './routes/candidat.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';
import userRoutes from './routes/user.route.js'; 
dotenv.config();


const app = express();
const prisma = new PrismaClient();


app.use(express.json()); 
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('🚀 API de Recrutement avec Prisma fonctionne !');
});


app.use('/api/candidats', candidatRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/userRoutes', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`));
