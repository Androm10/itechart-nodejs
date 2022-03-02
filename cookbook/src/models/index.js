let user            = require('./user');
let role            = require('./role');
let userInfo        = require('./userInfo');
let usersRoles      = require('./usersRoles');
let cookbook        = require('./cookbook');
let recipe          = require('./recipe');
let cookbooksRecipes= require('./cookbooksRecipes')

let cookbookComment = require('./cookbookComment');
let recipeComment   = require('./recipeComment');
let cookbookLike    = require('./cookbookLike');
let recipeLike      = require('./recipeLike');
let cookbookView    = require('./cookbookView');
let recipeView      = require('./recipeView');


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

user.hasMany(cookbook, { foreignKey: 'creatorId'});
cookbook.belongsTo(user, { foreignKey: 'creatorId'});

user.belongsToMany(recipe, {through: recipeComment, foreignKey: 'userId', otherKey: 'recipeId'});
recipe.belongsToMany(user, {through: recipeComment, foreignKey: 'recipeId', otherKey: 'userId'});

user.belongsToMany(recipe, {through: recipeView, foreignKey: 'userId', otherKey: 'recipeId'});
recipe.belongsToMany(user, {through: recipeView, foreignKey: 'recipeId', otherKey: 'userId'});

user.belongsToMany(recipe, {through: recipeLike, foreignKey: 'userId', otherKey: 'recipeId'});
recipe.belongsToMany(user, {through: recipeLike, foreignKey: 'recipeId', otherKey: 'userId'});

user.hasMany(recipe, { foreignKey: 'creatorId'});
recipe.belongsTo(user, { foreignKey: 'creatorId'});


recipe.hasMany(recipeView, {foreignKey: 'recipeId'});
recipe.hasMany(recipeLike, {foreignKey: 'recipeId'});

cookbook.hasMany(cookbookView, {foreignKey: 'cookbookId'});
cookbook.hasMany(cookbookLike, {foreignKey: 'cookbookId'});


