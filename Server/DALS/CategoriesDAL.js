let CATEGORIES = require('../Data/categories');

const CategoriesDAL = {
    getCategories: () => {
        return CATEGORIES;
    },
    getCategory: (categoryName) => {
        return CATEGORIES.filter(category => category.category_name === categoryName);
    },
    addCategory: (newCategory) => {
        CATEGORIES.push(newCategory);
        
        return newCategory;
    },
    updateCategory: (newCategory) => {
        const oldCategory = CATEGORIES.find(category => category.category_name === newCategory.category_name);
        
        CATEGORIES[CATEGORIES.indexOf(oldCategory)] = newCategory;

        return newCategory;
    },
    deleteCategory: (categoryName) => {
        const deletedCategory = CATEGORIES.find(category => category.category_name === categoryName);

        CATEGORIES.splice(CATEGORIES.indexOf(deletedCategory), 1);

        return deletedCategory;
    }
}

module.exports = CategoriesDAL;