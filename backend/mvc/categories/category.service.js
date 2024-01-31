const db = require('_helpers/db');

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryDataByName
};

async function getAllCategories() {
    return await db.Category.findAll();
}

async function getCategoryById(id) {
    return await getCategory(id);
}
async function getCategoryDataByName(categoryName) {
    try {
        // Find the category by name and include associated events and PDF uploads
        const category = await db.Category.findOne({
            where: { name: categoryName },
            include: [
                { model: db.Event }, // Include associated events
               
            ]
        });

        if (!category) {
            throw new Error('Category not found');
        }

        return category; // Return the category and its associated data
    } catch (error) {
        // Rethrow the error to be caught by the caller
        throw new Error('Error fetching category: ' + error.message);
    }
}
async function createCategory(params) {
    // validate

    if (await db.Category.findOne({ where: { name: params.name } })) {
        throw 'Category with name "' + params.name + '" already exists';
    }

    // save category
    await db.Category.create(params);
}

async function updateCategory(id, params) {
    const category = await getCategory(id);

    // validate
    const nameChanged = params.name && category.name !== params.name;
    if (nameChanged && await db.Category.findOne({ where: { name: params.name } })) {
        throw 'Category with name "' + params.name + '" already exists';
    }

    // copy params to category and save
    Object.assign(category, params);
    await category.save();

    return category.get();
}

async function deleteCategory(id) {
    const category = await getCategory(id);
    await category.destroy();
}

// helper functions

async function getCategory(id) {
    const category = await db.Category.findByPk(id);
    if (!category) throw 'Category not found';
    return category;
}
