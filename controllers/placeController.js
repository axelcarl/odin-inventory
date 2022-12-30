const Place = require('../models/place');
const Burger = require('../models/burger')

exports.index = async (req, res) => {
  let places;
  let burgers;
  try {
    places = await Place.find();
    burgers = await Burger.find();
  } catch (err) {
    console.log(err);
  }
  res.render('places', {
    title: 'Places',
    places: places,
    burgers: burgers,
  })
}

exports.create = async (req, res) => {
  let chainVal = false;
  try {
    if (req.body.chain === 'on') {
      chainVal = true;
    }
    const place = new Place({
      name: req.body.name,
      chain: chainVal,
      burgers: req.body.burgers
    })
    await place.save();
    res.send('Place successfully saved!')
  } catch (err) {
    console.log(err);
  }
}

exports.getById = async (req, res) => {
  let place;
  let burgers;
  try {
    place = await Place.findById(req.params.id);
    burgers = await Burger.find();
  } catch (err) {
    console.log(err);
  }
  res.render('place_id', {
    title: 'Burger Spot:',
    place: place,
    burgers: burgers
  })
}

exports.update = async (req, res) => {
  let place;
  let chainVal = false;
  try {
    if (req.body.chain === 'on') {
      chainVal = true;
    }
    place = await Place.findById(req.params.id);
    place.name = req.body.name;
    place.location = req.body.location;
    place.chain = chainVal;
    place.burgers = req.body.burgers;
    await place.save();
  } catch (err) {
    console.log(err);
  }
  res.send(`${place.name} successfully updated`);
}

exports.delete = async (req, res) => {
  try {
    await Place.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
  }
  res.send('Place deleted');
}