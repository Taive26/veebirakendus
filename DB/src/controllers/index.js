module.exports = {
  registerUser: require("./registerUser.controller"),
  loginUser: require("./loginUser.controller"),
  getUserDetails: require("./getUserDetails.controller"),

  addProduct: require("./addProduct.controller"),

  getAllUsers: require("./getAllUsers.controller"),
  getAllProducts: require("./getAllProducts.controller"),

  updateUser: require("./updateUser.controller"),
  updateProduct: require("./updateProduct.controller"),

  getOneProductByID: require("./getOneProductByID.controller"),
  deleteOneProductByID: require("./deleteOneProductByID.controller"),
};
