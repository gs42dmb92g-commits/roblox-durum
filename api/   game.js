module.exports = async (req, res) => {
  const { placeId } = req.query;

  return res.status(200).json({
    step: "reached api",
    placeId: placeId || null
  });
};