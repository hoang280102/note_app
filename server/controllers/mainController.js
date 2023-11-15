const home = async (req, res) => {
  const locals = {
    title: "Home Notes App",
    description: "Home Notes App",
  };
  res.render("index", { locals, layout: "../views/layouts/font-page.ejs" });
};
const about = async (req, res) => {
  const locals = {
    title: "About Notes App",
    description: "About Notes App",
  };
  res.render("about", locals);
};

module.exports = { home, about };
