const {Todoz} = require('../models');
const logger=require("../../config/logger")

const getTodo = async (req, res) => {
  try {
    const todos = await Todoz.Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getATodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todoz.Todo.findByPk(id);
    res.status(200).json(todo);
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await Todoz.Todo.create({ description });
    res.status(200).json(newTodo);
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await Todoz.Todo.update({ description }, { where: { id } });
    res.status(200).json("Todo Was Updated");
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todoz.Todo.destroy({ where: { id } });
    res.status(200).json("Deleted Todo");
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getTodo,
  postTodo,
  deleteTodo,
  updateTodo,
  getATodo,
};
