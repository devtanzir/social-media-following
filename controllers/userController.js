import asyncHandler from "express-async-handler";
import prisma from "../prisma/client.js";

/**
 * GET ALL USER
 * @method GET /api/v1/user
 */
export const getUserController = asyncHandler(async (req, res) => {
  const data = await prisma.user.findMany();

  res.status(200).json(data);
});

/**
 * GET ONE USER
 * @method GET /api/v1/user/:id
 */
export const getSingleUserController = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await prisma.user.findUnique({
    where: { id },
    include: {
      follower: { include: { follower: true } },
      following: { include: { following: true } },
    },
  });

  res.status(200).json(data);
});

/**
 * CREATE USER
 * @method POST /api/v1/user
 */
export const createUserController = asyncHandler(async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });

  res.status(201).json(user);
});
