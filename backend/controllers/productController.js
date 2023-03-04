import productModel from '../models/productModel.js'
//Получение всех товаров
export const getProducts = async (req, res) => {
  try {
    const category = parseInt(req.query.category) || ['1', '2', '3']
    let sort = req.query.sort || 'price'
    req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort])
    let sortBy = {}
    if (sort[1]) {
      sortBy[sort[0]] = sort[1]
    } else {
    }
    const rolls = await productModel
      .find({
        category: category,
      })
      .sort(sortBy)

    return res.json(rolls)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
