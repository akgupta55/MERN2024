const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to day 1st of coding 15 days challenges");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("Welcome to coding challenges");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
