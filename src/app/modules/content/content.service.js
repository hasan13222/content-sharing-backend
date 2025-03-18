import Content from "../../../db/models/content.js"
import User from "../../../db/models/user.js";

const updateContentIntoDb = async (id, payload) => {
  const result = Content.update(payload, { where: { id } })
  return result;
};

const getUserContentFromDb = async (userId, lmt) => {
  const limit = lmt || 100000;
  const result = await Content.findAll({
    where: { userId }, limit,
    order: [["createdAt", "DESC"]]
  })
  return result;
};

const getAllContentFromDb = async (lmt) => {
  const limit = lmt || 100000;
  const result = await Content.findAll({
    include: [
      {
        model: User,
        as: "user",
        attributes: ["fullname"],
      },
    ],
    limit,
    order: [["createdAt", "DESC"]]
  });

  return result;
};

const createContentIntoDb = async (payload) => {
  const result = await Content.create(payload)
  return result;
};

export const contentServices = {
  updateContentIntoDb,
  getUserContentFromDb,
  getAllContentFromDb,
  createContentIntoDb
};
