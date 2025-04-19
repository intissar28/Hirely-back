import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Créer un candidat
export const createCandidat = async (data) => {
  try {
    const candidat = await prisma.candidat.create({
      data,
    });
    return candidat;  // Retourne le candidat créé
  } catch (error) {
    throw new Error("Erreur lors de la création du candidat");
  }
};

// Obtenir un candidat par ID
export const getCandidatById = async (id) => {
  try {
    const candidat = await prisma.candidat.findUnique({
      where: { id },
    });
    return candidat; 
  } catch (error) {
    throw new Error("Erreur lors de la récupération du candidat");
  }
};
export const getAllCandidats = async () => {
  try {
    const candidats = await prisma.candidat.findMany();
    return candidats;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des candidats");
  }
};
