const db = require('_helpers/db');

module.exports = {
    getAllPages,
    getPageById,
    createPage,
    updatePage,
    deletePage,
    getPageDataByName
};

async function getAllPages() {
    return await db.Pages.findAll();
}

async function getPageById(id) {
    return await getPage(id);
}

async function getPageDataByName(pageName) {
    try {
        // Find the page by name and include associated events and PDF uploads
        const page = await db.Pages.findOne({
            where: { name: pageName },
            include: [
                { model: db.Event }, // Include associated events
                // Add more associations if needed
            ]
        });

        if (!page) {
            throw new Error('Page not found');
        }

        return page; // Return the page and its associated data
    } catch (error) {
        // Rethrow the error to be caught by the caller
        throw new Error('Error fetching page: ' + error.message);
    }
}

async function createPage(params) {
    // validate

    if (await db.Pages.findOne({ where: { name: params.name } })) {
        throw 'Page with name "' + params.name + '" already exists';
    }

    // save page
    await db.Pages.create(params);
}

async function updatePage(id, params) {
    const page = await getPage(id);

    // validate
    const nameChanged = params.name && page.name !== params.name;
    if (nameChanged && await db.Pages.findOne({ where: { name: params.name } })) {
        throw 'Page with name "' + params.name + '" already exists';
    }

    // copy params to page and save
    Object.assign(page, params);
    await page.save();

    return page.get();
}

async function deletePage(id) {
    const page = await getPage(id);
    await page.destroy();
}

// helper functions

async function getPage(id) {
    const page = await db.Pages.findByPk(id);
    if (!page) throw 'Page not found';
    return page;
}
