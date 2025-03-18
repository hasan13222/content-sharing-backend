import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { profileServices } from "./profile.service.js";

const updateProfile = catchAsync(async (req, res) => {
    const result = await profileServices.updateProfileIntoDb(
        req.body
    );
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Profile updated successfully",
        data: result,
    });
});

const getMyProfile = catchAsync(async (req, res) => {
    const result = await profileServices.getMyProfileFromDb(
        req.user.id
    );
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Profile retrieved successfully",
        data: result,
    });
})

const getUserProfile = catchAsync(async (req, res) => {
    const result = await profileServices.getMyProfileFromDb(
        req.params.userId
    );
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Profile retrieved successfully",
        data: result,
    });
})

export const profileController = {
    updateProfile,
    getMyProfile,
    getUserProfile
};
