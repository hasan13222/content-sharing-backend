import Profile from "../../../db/models/profile.js"

const updateProfileIntoDb = async (payload) => {
  const isProfileExist = await Profile.findOne({where: { userId: payload.userId }});
  let result;
  if (isProfileExist) {
    await Profile.update(payload, {where: {id: isProfileExist.id}})
    result = await Profile.findByPk(isProfileExist.id)
  } else {
    result = await Profile.create(payload);
  }

  return result;
};

const getMyProfileFromDb = async (userId) => {
  const result = await Profile.findOne({where: {userId}})
  return result;
};


export const profileServices = {
  updateProfileIntoDb,
  getMyProfileFromDb
};
