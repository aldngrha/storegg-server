module.exports = {
  index: async (req, res) => {
    try {
      await res.render("pages/index");
    } catch (err) {
      console.log("error");
    }
  },
};
