let user            = require('./user');
let role            = require('./role');
let userInfo        = require('./userInfo');
let usersRoles      = require('./usersRoles');
let cookbook        = require('./cookbook');
let recipe          = require('./recipe');
let cookbooksRecipes= require('./cookbooksRecipes')

let cookbookComment = require('./cookbook');
let recipeComment   = require('./recipe');
let cookbookLike    = require('./cookbook');
let recipeLike      = require('./recipe');
let cookbookView    = require('./cookbook');
let recipeView      = require('./recipe');


user.hasOne(userInfo, {foreignKey : 'userId'});
userInfo.belongsTo(user, {foreignKey : 'userId'});

user.belongsToMany(role, { through : usersRoles, foreignKey: 'userId', otherKey : 'roleId'});
role.belongsToMany(user, { through : usersRoles, foreignKey: 'roleId', otherKey : 'userId'});

recipe.belongsToMany(cookbook, {through : cookbooksRecipes, foreignKey: 'recipeId', otherKey: 'cookbookId'});
cookbook.belongsToMany(recipe, {through : cookbooksRecipes, foreignKey: 'cookbookId', otherKey: 'recipeId'});


user.belongsToMany(cookbook, {through: cookbookComment, foreignKey: 'userId', otherKey: 'cookbookId'});
cookbook.belongsToMany(user, {through: cookbookComment, foreignKey: 'cookbookId', otherKey: 'userId'});

user.belongsToMany(cookbook, {through: cookbookView, foreignKey: 'userId', otherKey: 'cookbookId'});
cookbook.belongsToMany(user, {through: cookbookView, foreignKey: 'cookbookId', otherKey: 'userId'});

user.belongsToMany(cookbook, {through: cookbookLike, foreignKey: 'userId', otherKey: 'cookbookId'});
cookbook.belongsToMany(user, {through: cookbookLike, foreignKey: 'cookbookId', otherKey: 'userId'});


user.belongsToMany(recipe, {through: recipeComment, foreignKey: 'userId', otherKey: 'recipeId'});
recipe.belongsToMany(user, {through: recipeComment, foreignKey: 'recipeId', otherKey: 'userId'});

user.belongsToMany(recipe, {through: recipeView, foreignKey: 'userId', otherKey: 'recipeId'});
recipe.belongsToMany(user, {through: recipeView, foreignKey: 'recipeId', otherKey: 'userId'});

user.belongsToMany(recipe, {through: recipeLike, foreignKey: 'userId', otherKey: 'recipeId'});
recipe.belongsToMany(user, {through: recipeLike, foreignKey: 'recipeId', otherKey: 'userId'});