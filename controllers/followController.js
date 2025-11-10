import asyncHandler from "express-async-handler";
import prisma from "../prisma/client.js";

/**
 * GET ALL follower and following
 * @method GET /api/v1/follow
 */
export const getFollowController = asyncHandler(async (req, res) => {
  const data = await prisma.follow.findMany({
    include: {
      follower: true,
      following: true,
    },
  });

  res.status(200).json(data);
});

/**
 * CREATE Follow
 * @method POST /api/v1/follow
 */
export const createFollowController = asyncHandler(async (req, res) => {
  const { follower, following } = req.body;

  if (follower == following) {
    return res.status(400).json({ message: "You can't follow yourself" });
  }

  const data = await prisma.follow.create({
    data: {
      followerId: follower,
      followingId: following,
    },
  });

  res.status(201).json(data);
});
