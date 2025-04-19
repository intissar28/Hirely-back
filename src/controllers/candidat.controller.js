import * as candidatService from "../services/candidat.service.js";  // Importer le service

// Créer un candidat
export const createCandidat = async (req, res) => {
  try {
    const candidat = await candidatService.createCandidat(req.body);  // Appeler le service pour créer un candidat
    res.status(201).json(candidat);  // Retourner le candidat créé
  } catch (error) {
    res.status(500).json({ error: error.message });  // En cas d'erreur serveur
  }
};

// Obtenir un candidat par ID
export const getCandidat = async (req, res) => {
  try {
    const candidat = await candidatService.getCandidatById(parseInt(req.params.id));  // Appeler le service pour obtenir un candidat
    if (!candidat) {
      return res.status(404).json({ message: "Candidat non trouvé" });  // Si aucun candidat trouvé
    }
    res.json(candidat);  // Retourner le candidat trouvé
  } catch (error) {
    res.status(500).json({ error: error.message });  // En cas d'erreur serveur
  }
};

// Obtenir tous les candidats
export const getAllCandidats = async (req, res) => {
  try {
    const candidats = await candidatService.getAllCandidats();  // Appeler le service pour obtenir tous les candidats
    res.json(candidats);  // Retourner la liste des candidats
  } catch (error) {
    res.status(500).json({ error: error.message });  // En cas d'erreur serveur
  }
};
