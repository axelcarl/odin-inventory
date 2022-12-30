const Burger = require('../models/burger');
const { index } = require('./placeController');

exports.index = async (req, res) => {
  let burgers;
  try {
    burgers = await Burger.find();
  } catch (err) {
    console.log(err);
  }
  res.render('burger', {
    title: 'Burger',
    burgers: burgers,
  });
}

exports.create = async (req, res) => {
  let ing = [];
  ing.push(req.body.breadType);
  ing.push('sallad');
  try {
    const burger = new Burger({
      name: req.body.name, 
      ingredients: ing,
    });
    await burger.save();
    res.send('Burger successfully Saved');
  } catch (err) {
    console.log(err);
  }
}

exports.getById = async (req, res) => {
  let burger;
  try {
    burger = await Burger.findById(req.params.id);
  } catch (err) {
    console.log(err);
  }
  res.render('burger_id', {
    title: 'Burger',
    burger: burger
  })
}

exports.update = async (req, res) => {
  let burger;
  let ing = [];
  ing.push(req.body.breadType);
  try {
    burger = await Burger.findById(req.params.id);
    burger.name = req.body.name;
    burger.ingredients = ing;
    await burger.save();
  } catch (error) {
    console.log(err);
  }
  res.send(`${burger.name} successfully updated`)
}

exports.delete = async (req, res) => {
  let burger;
  try {
    burger = await Burger.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
  }
  res.send(`${burger.name} deleted`);
}
