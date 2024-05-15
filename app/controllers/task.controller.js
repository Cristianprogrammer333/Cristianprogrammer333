import Task from "../models/Task.js";
import messageFormat from "../config/message.js";

export const createTask = async(req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false,
        });
        const taskSaved = await newTask.save();
        res.json(taskSaved);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const findAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const findOneTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const findAllDoneTasks = async (req, res) =>{
    try {
        const task = await Task.find({ done: true });
        res.json(task);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const deleteTask = async (req, res) =>{
    try {
        const data = await Task.findByIdAndDelete(req.params.id);
        res.json(data);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};

export const updateTask = async (req, res) =>{
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.json(updatedTask);
    } catch (error) {
        messageFormat(error.message, "danger");
        res.status(500);
    }
};
