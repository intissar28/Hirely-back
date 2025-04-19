import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createJob = async (data) => {
  return await prisma.job.create({ data });
};

export const getJobById = async (id) => {
  return await prisma.job.findUnique({ where: { id } });
};

export const getAllJobs = async () => {
  return await prisma.job.findMany();
};

export const deleteJob = async (id) => {
  return await prisma.job.delete({ where: { id } });
};
