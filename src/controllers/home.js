module.exports = {
  index: (req, res) => {
    res.render('pages/home', { title: process.env.APP_NAME, subtitle: 'Welcome!' });
  },
};
