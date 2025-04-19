import * as jobService from "../services/job.service.js";

export const createJob = async (req, res) => {
  try {
    const job = await jobService.createJob(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const job = await jobService.getJobById(parseInt(req.params.id));
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


