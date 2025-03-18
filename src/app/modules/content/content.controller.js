import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { contentServices } from "./content.service.js";

const createContent = catchAsync(async (req, res) => {
    const result = await contentServices.createContentIntoDb(
        req.body
    );
    sendResponse(res, {
        status: StatusCodes.CREATED,
        message: "Content created successfully",
        data: result,
    });
});
const updateContent = catchAsync(async (req, res) => {
    const result = await contentServices.updateContentIntoDb(
        req.params.id, req.body
    );
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Content updated successfully",
        data: result,
    });
});

const getMyContent = catchAsync(async (req, res) => {
    const result = await contentServices.getUserContentFromDb(
        req.user.id, Number(req.query.limit)
    );
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Content retrieved successfully",
        data: result,
    });
})
const getUserContent = catchAsync(async (req, res) => {
    const result = await contentServices.getUserContentFromDb(
        req.params.userId, Number(req.query.limit)
    );
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Content retrieved successfully",
        data: result,
    });
});

const getAllContent = catchAsync(async (req, res) => {
    const result = await contentServices.getAllContentFromDb(Number(req.query.limit));
    sendResponse(res, {
        status: StatusCodes.OK,
        message: "Content retrieved successfully",
        data: result,
    });
})

export const contentController = {
    updateContent,
    getMyContent,
    createContent,
    getAllContent,
    getMyContent,
    getUserContent
};
