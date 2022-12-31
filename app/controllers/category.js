module.exports = {
  index: async (req, res) => {
    try {
      await res.render("pages/category/index");
    } catch (err) {
      console.log("error");
    }
  },
};
