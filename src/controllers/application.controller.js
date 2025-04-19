import * as applicationService from "../services/application.service.js";

export const createApplication = async (req, res) => {
  try {
    const application = await applicationService.createApplication(req.body);
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getApplication = async (req, res) => {
  try {
    const application = await applicationService.getApplicationById(parseInt(req.params.id));
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
