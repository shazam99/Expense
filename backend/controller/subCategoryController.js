const asyncHandler = require("express-async-handler")
const SubCategory = require("../models/subCategroyModel");
const { Op } = require("sequelize");
const Category = require("../models/categoryModel");



// @desc   Add Sub Category for user
// @route  POST /api/v1/update/sub-category/add
// @access Private
const addSub = asyncHandler(async (req, res) => {
    const { sub_name, category_id } = req.body;
    if (!sub_name || !category_id) {
        res.status(400);
        throw new Error("Credentails missing!");
    }

    // Convert sub_name to uppercase for search and save
    const uppercaseSubCategoryName = sub_name.toUpperCase();

    // Check if the category already exists
    const existingCategory = await SubCategory.findOne({ where: { sub_name: uppercaseSubCategoryName, category_id: category_id } });
    if (existingCategory) {
        res.status(400);
        throw new Error("Sub-Category already exists");
    }

    const isAdmin = req.user.role === 'ROLE_ADMIN_$AUTH_TRUSTED';
    const user_id = isAdmin ? null : req.user.id;
    const subCat = await SubCategory.create({
        sub_name: uppercaseSubCategoryName,
        category_id: category_id,
        user_id: user_id,
    });

    if (subCat) {
        res.status(201).json({ message: "Sub Category added successfully" });
    } else {
        res.status(400);
        throw new Error("Invalid category data");
    }
});


// @desc   Get all categories & subCategories
// @route  POST /api/v1/update/subcategory/get
// @access Private
const getSub = asyncHandler(async (req, res) => {
    const isAdmin = req.user.role === 'ROLE_ADMIN_$AUTH_TRUSTED';
    let whereCondition;

    const userId = req.user.id;

    if (!isAdmin) {
        whereCondition = {user_id : { [Op.or]: [userId, null] }}
    }
    try {
        const categoriesWithSubcategories = await Category.findAll({
            include: {
                model: SubCategory,
                attributes: ['sub_id', 'sub_name'],
            },
            where: whereCondition,
            attributes:['category_id','category_name']
        });

        res.status(200).json(categoriesWithSubcategories);
    } catch (error) {
        console.error('Error fetching categories with subcategories:', error);
        res.status(500).json({ error: 'Internal server error' });
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
    const { category_id, sub_name } = req.body;
    if (!category_id || !sub_name) {
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

    // Convert sub_name to uppercase for search and save
    const uppercaseSubCategoryName = sub_name.toUpperCase();

    await Category.update({ sub_name: uppercaseSubCategoryName }, { where: whereCondition });
    res.status(200).json({ message: "Category updated success" });
});



module.exports = { addSub, getSub };
