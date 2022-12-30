module.exports = {
  index: async (req, res) => {
    try {
      await res.render("index", {
        title: "Express JS",
      });
    } catch (err) {
      console.log("error");
    }
  },
};
