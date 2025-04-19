import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createApplication = async (data) => {
  return await prisma.application.create({ data });
};

export const getApplicationById = async (id) => {
  return await prisma.application.findUnique({ where: { id } });
};

export const getAllApplications = async () => {
  return await prisma.application.findMany();
};

export const deleteApplication = async (id) => {
  return await prisma.application.delete({ where: { id } });
};

