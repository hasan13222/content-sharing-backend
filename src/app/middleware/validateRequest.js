
export const validateRequest = (joischema) => {
  return async (req, res, next) => {
    try {
      await joischema.validateAsync(req.body, {abortEarly: false});
      next();
    } catch (err) {
      next(err);
    }
  };
};
