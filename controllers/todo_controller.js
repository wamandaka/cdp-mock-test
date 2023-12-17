const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { ResponseTemplate } = require("../helper/template_helper");

const createTodo = async (req, res) => {
  let { title, completed, userId } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: {
        title: title,
        completed: false,
        userId: req.user.id,
      },
    });
    let resp = ResponseTemplate(todo, "create title success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        userId: req.user.id,
        deleted_at: null,
      },
    });
    let resp = ResponseTemplate(todos, "get todos success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
};

const updateTitleTodo = async (req, res) => {
  let { title, id } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: title,
      },
    });
    let resp = ResponseTemplate(todo, "update title success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
};

const updateStatusTodo = async (req, res) => {
  let { id } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        completed: true,
      },
    });
    let resp = ResponseTemplate(todo, "update status success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
};

const deleteTodo = async (req, res) => {
  let { id } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: {
        id: parseInt(id),
      },
      data: {
        deleted_at: new Date(),
      }
    });
    let resp = ResponseTemplate(todo, "delete success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    console.log(error);
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = { createTodo, getTodos, updateTitleTodo, updateStatusTodo, deleteTodo };
