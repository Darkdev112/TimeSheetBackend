const {Todo} = require('../models');
const logger=require("../../config/logger")

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(400).json("Could not get todos");
  }
};

const getATodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    res.status(200).json(todo);
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(400).json("Could not get todos");
  }
};

const postTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await Todo.create({ description });
    res.status(200).json(newTodo);
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(400).json("Could not get todos");
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await Todo.update({ description }, { where: { id } });
    res.status(200).json("Todo Was Updated");
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(400).json("Could not get todos");
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.destroy({ where: { id } });
    res.status(200).json("Deleted Todo");
  } catch (error) {
    logger.error(`error :- ${error.message}`)
    res.status(400).json("Could not get todos");
  }
};



module.exports = {
  getTodo,
  postTodo,
  deleteTodo,
  updateTodo,
  getATodo,
};
