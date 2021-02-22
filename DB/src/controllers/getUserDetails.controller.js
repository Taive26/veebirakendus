

module.exports = async (req, res) => {
    await res.json(req.userData);
  }; 