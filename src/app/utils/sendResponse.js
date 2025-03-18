import { StatusCodes } from 'http-status-codes';

export const sendResponse = (
  res,
  data,
) => {
  data.status = data.status || StatusCodes.OK;
  data.success = data.success || true;
  data.message = data.message || 'Your operation is successful';
  if (data.data === null) {
    data.message = 'Data not Found';
  }
  if (Array.isArray(data.data) && data.data.length === 0) {
    data.message = 'Data not Found';
  }
  return res.status(data.status).json({
    success: data.success,
    status: data.status,
    message: data.message,
    data: data.data,
    meta: data.meta || null
  });
};