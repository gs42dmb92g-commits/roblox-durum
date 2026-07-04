module.exports = async (req, res) => {
  const { placeId } = req.query;

  if (!placeId) {
    return res.status(400).json({ error: "missing placeId" });
  }

  try {
    const r = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${placeId}`
    );

    const data = await r.json();
    const game = data?.data?.[0];

    if (!game) {
      return res.status(404).json({ error: "game not found" });
    }

    return res.status(200).json({
      name: game.name,
      players: game.playing,
      visits: game.visits
    });

  } catch (e) {
    return res.status(500).json({
      error: "fetch error",
      detail: String(e)
    });
  }
};