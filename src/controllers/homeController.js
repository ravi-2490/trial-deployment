const homeController = (req, res) => {
  res.status(200).json({ message: "This is home route" });
};

module.exports = homeController;
