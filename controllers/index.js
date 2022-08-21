module.exports = {
  getIndex: async (req, res) => {
    try {
      res.render('index.ejs');
    } catch (error) {
      console.error(error);
    }
  },
};
