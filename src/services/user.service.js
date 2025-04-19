import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

export const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};
