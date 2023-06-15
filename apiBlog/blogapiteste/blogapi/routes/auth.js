const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,

      /*  isAdmin: req.body.isAdmin */
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const validated = await bcrypt.compare(req.body.password, user.password);

    if (!user && !validated) {
    
      console.log("something wrong")
    } else {
      const { password, ...others } = user._doc;

      res.status(200).json(others);
    }
    /*  !user  && res.status(400).json();
    !validated && res.status(400).json(); */
  } catch (err) {
    res.status(500).json(err);
/*     console.log(err)
 */  }  
});

module.exports = router;
// estamos realizando mais uma etapa de qualificação de programação de qualidade de pessoal