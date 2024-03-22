const asyncHandler = require("express-async-handler")
const Category = require("../models/categoryModel");
const { Op } = require("sequelize");



// @desc   Add Category for user
// @route  POST /api/v1/update/category/add
// @access Private
const addCategory = asyncHandler(async (req, res) => {
    const { category_name } = req.body;
    if (!category_name) {
        res.status(400);
        throw new Error("Category name is mandatory!");
    }

    // Convert category_name to uppercase for search and save
    const uppercaseCategoryName = category_name.toUpperCase();

    // Check if the category already exists
    const existingCategory = await Category.findOne({ where: { category_name: uppercaseCategoryName } });
    if (existingCategory) {
        res.status(400);
        throw new Error("Category already exists");
    }

    const isAdmin = req.user.role === 'ROLE_ADMIN_$AUTH_TRUSTED';
    const user_id = isAdmin ? null : req.user.id;
    const category = await Category.create({
        category_name: uppercaseCategoryName,
        user_id: user_id,
    });

    if (category) {
        res.status(201).json({ category: uppercaseCategoryName });
    } else {
        res.status(400);
        throw new Error("Invalid category data");
    }
});


// @desc   Get all categories
// @route  POST /api/v1/update/category/get
// @access Private
const getCategory = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const categories = await Category.findAll({ where: { user_id: { [Op.or]: [userId, null] } } });
    if (categories) {
        res.status(200).json({ categories });
    } else {
        res.status(404);
        throw new Error("not found");
    }
});


// @desc   Remove Category based on user id
// @route  POST /api/v1/update/category/remove
// @access Private
const removeCategory = asyncHandler(async (req, res) => {
    const { category_id } = req.body;
    if (!category_id) {
        res.status(400);
        throw new Error("Category id is null!");
    }

    const isAdmin = req.user.role === 'ROLE_ADMIN_$AUTH_TRUSTED';
    let whereCondition = { category_id: category_id };

    if (!isAdmin) {
        whereCondition.user_id = req.user.id;
    }

    const existingCategory = await Category.findOne({ where: whereCondition });
    if (!existingCategory) {
        res.status(404);
        throw new Error("Category not found");
    }

    await Category.destroy({ where: whereCondition });
    res.status(200).json({ message: "Successfully deleted" });
});


// @desc   Update Category for user
// @route  POST /api/v1/update/category/update
// @access Private
const updateCategory = asyncHandler(async (req, res) => {
    const { category_id, category_name } = req.body;
    if (!category_id || !category_name) {
        res.status(400);
        throw new Error("Category id and name are mandatory!");
    }

    const isAdmin = req.user.role === 'ROLE_ADMIN_$AUTH_TRUSTED';
    let whereCondition = { category_id: category_id };

    if (!isAdmin) {
        whereCondition.user_id = req.user.id;
    }

    // Check if the category already exists
    const existingCategory = await Category.findOne({ where: whereCondition });
    if (!existingCategory) {
        res.status(400);
        throw new Error("Category doesn't exist");
    }

    // Convert category_name to uppercase for search and save
    const uppercaseCategoryName = category_name.toUpperCase();

    await Category.update({ category_name: uppercaseCategoryName }, { where: whereCondition });
    res.status(200).json({ message: "Category updated success" });
});



module.exports = { addCategory, getCategory, removeCategory, updateCategory };
