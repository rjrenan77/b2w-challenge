import Planet from "../models/Planet";

class PlanetController {
  async store(req,res ){
    try{
      const planet = await Planet.create(req.body);
      return res.json({planet})
    }catch(err){
      return res.status(400).send({error: "Planet not included!"})
    }
  }
}

export default new PlanetController();