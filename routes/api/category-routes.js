const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get all categories
router.get('/', async (req, res) => {
 try{
   const catData = await Category.findAll({
     include:[
       Product
     ],
   });
   console.log(catData);
   res.status(200).json(catData);
 } catch(err){
   res.status(500).json(err);
 }
});

//get specific category by ID
router.get('/:id', async (req, res) => {
  try{
    const catData = await Category.findByPk(req.params.id,{
      include:[
        Product
      ],
    });
    if(!catData){
      res.status(404).json({message:"No category matching your selection, try again"});
    }
    console.log(catData);
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const catData = await Category.update(req.body,{where:{id:req.params.id}});
    res.status(200).json(catData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const catData = await Category.destroy({
      where:{id:req.params.id}
    });
    if(!catData){
      res.status(404).json({message:"No category found matching your selection, try again"});
    }
    res.status(200).json(catData);
  } catch (err){
    res.status(500).json(err);
  }
});

module.exports = router;
