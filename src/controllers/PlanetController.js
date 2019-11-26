import Planet from '../models/Planet';
import fetch from 'node-fetch';

class PlanetController {
  async store(req, res) {
    try {
      const url = 'https://swapi.co/api/planets/?search=';

      const response = await fetch(`${url}${req.body.name}`);
      const json = await response.json();

      if (json.count === 0) {
        req.body.appearances = 0;
      } else {
        req.body.appearances = json.results[0].films.length;
      }

      const planet = await Planet.create(req.body);

      return res.json({ planet });
    } catch (err) {
      return res.status(400).send({ error: 'Planet not included!' });
    }
  }

  async index(req, res) {
    try {
      const planets = await Planet.find();

      return res.json({ planets });
    } catch (error) {
      return res.status(400).send({ error: 'Planets not finded!' });
    }
  }

  async showName(req, res) {
    try {
      console.log(req.body);

      const planet = await Planet.findOne({ name: req.body.name });

      return res.json({ planet });
    } catch (error) {
      return res.status(400).send({ error: 'Planets not finded!' });
    }
  }

  async showIndex(req, res) {
    try {
      console.log(req.params.planetId);

      const planet = await Planet.findById(req.params.planetId);

      return res.json({ planet });
    } catch (error) {
      return res.status(400).send({ error: 'Planets not finded!' });
    }
  }

  async delete(req, res) {
    try {
      console.log(req.params.planetId);

      await Planet.findByIdAndRemove(req.params.planetId);

      return res.send();
    } catch (error) {
      return res.status(400).send({ error: 'Planets not finded!' });
    }
  }
}

export default new PlanetController();
