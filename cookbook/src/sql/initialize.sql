CREATE DATABASE IF NOT EXISTS cookbook;
USE cookbook;


CREATE TABLE IF NOT EXISTS users (
id 				SERIAL 			PRIMARY KEY NOT NULL,
login			VARCHAR(50)		NOT NULL,  
password 		VARCHAR(120)		NOT NULL,
UNIQUE(login)
);

CREATE TABLE IF NOT EXISTS user_info (
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
username		VARCHAR(50)		NOT NULL,
info			TEXT 			NULL,
avatar			VARCHAR(255)	DEFAULT('none') NULL
);

CREATE TABLE IF NOT EXISTS roles ( 
id 				SERIAL 			PRIMARY KEY NOT NULL,
name			VARCHAR(20)		NOT NULL,
UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS users_roles ( 
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
role_id			BIGINT			UNSIGNED NOT NULL
);



CREATE TABLE IF NOT EXISTS cookbooks (
id 				SERIAL 			PRIMARY KEY NOT NULL,
name			VARCHAR(100)	NOT NULL,
avatar 			VARCHAR(255)	DEFAULT('none'),
description		TEXT,
UNIQUE(name)
);

CREATE TABLE IF NOT EXISTS recipes (
id 				SERIAL 			PRIMARY KEY NOT NULL,
name			VARCHAR(100)		NOT NULL,
avatar 			VARCHAR(255)		DEFAULT('none') NOT NULL,
description		TEXT,
directions		TEXT,
ingridients		TEXT				NOT NULL,
cooking_time	INT
);

CREATE TABLE IF NOT EXISTS cookbooks_recipes (
id 				SERIAL 			PRIMARY KEY NOT NULL,
cookbook_id		BIGINT			UNSIGNED NOT NULL,
recipe_id		BIGINT			UNSIGNED NOT NULL
);



/************** COOKBOOK STATISTICS *************/
CREATE TABLE IF NOT EXISTS c_comments (
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
cookbook_id		BIGINT			UNSIGNED NOT NULL,
text			TEXT			NOT NULL,
created_at 		TIMESTAMP		NOT NULL,
rate			SMALLINT		CHECK(rate > 0 AND rate <6) NOT NULL 
);

CREATE TABLE IF NOT EXISTS c_likes ( 
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
cookbook_id		BIGINT			UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS c_views ( 
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
cookbook_id		BIGINT			UNSIGNED NOT NULL
);

/************** RECIPES STATISTICS *************/
CREATE TABLE IF NOT EXISTS r_comments (
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
recipe_id		BIGINT			UNSIGNED NOT NULL,
text			TEXT			NOT NULL,
created_at 		TIMESTAMP		NOT NULL,
rate			SMALLINT		CHECK(rate > 0 AND rate <6) NOT NULL 
);

CREATE TABLE IF NOT EXISTS r_likes ( 
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
recipe_id		BIGINT			UNSIGNED NOT NULL
);

CREATE TABLE IF NOT EXISTS r_views ( 
id 				SERIAL 			PRIMARY KEY NOT NULL,
user_id			BIGINT			UNSIGNED NOT NULL,
recipe_id		BIGINT			UNSIGNED NOT NULL
);


ALTER TABLE  user_info 
ADD CONSTRAINT fk_user_info_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;


ALTER TABLE  users_roles 
ADD CONSTRAINT fk_users_roles_user_id_user_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
ALTER TABLE  users_roles 
ADD CONSTRAINT fk_users_roles_user_id_role_id
 FOREIGN KEY (role_id) REFERENCES roles (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
    
ALTER TABLE  cookbooks_recipes 
ADD CONSTRAINT fk_cookbooks_recipes_cookbook_id_cookbooks_id
 FOREIGN KEY (cookbook_id) REFERENCES cookbooks (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
ALTER TABLE  cookbooks_recipes 
ADD CONSTRAINT fk_cookbooks_recipes_recipe_id_recipes_id
 FOREIGN KEY (recipe_id) REFERENCES recipes (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
        

ALTER TABLE  c_comments 
ADD CONSTRAINT fk_c_comments_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE  c_comments 
ADD CONSTRAINT fk_c_comments_cookbook_id_cookbooks_id
 FOREIGN KEY (cookbook_id) REFERENCES cookbooks (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
    
ALTER TABLE  c_views
ADD CONSTRAINT fk_c_views_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;    
    
ALTER TABLE  c_views 
ADD CONSTRAINT fk_c_views_cookbook_id_cookbooks_id
 FOREIGN KEY (cookbook_id) REFERENCES cookbooks (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;   
    
    
ALTER TABLE  c_likes
ADD CONSTRAINT fk_c_likes_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;    
    
ALTER TABLE  c_likes 
ADD CONSTRAINT fk_c_likes_cookbook_id_cookbooks_id
 FOREIGN KEY (cookbook_id) REFERENCES cookbooks (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;



ALTER TABLE  r_comments 
ADD CONSTRAINT fk_r_comments_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;

ALTER TABLE  r_comments 
ADD CONSTRAINT fk_r_comments_recipe_id_recipes_id
 FOREIGN KEY (recipe_id) REFERENCES recipes (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    
    
ALTER TABLE  r_views
ADD CONSTRAINT fk_r_views_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;    
    
ALTER TABLE  r_views 
ADD CONSTRAINT fk_r_views_recipe_id_recipes_id
 FOREIGN KEY (recipe_id) REFERENCES recipes (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;   
    
    
ALTER TABLE  r_likes
ADD CONSTRAINT fk_r_likes_user_id_users_id
 FOREIGN KEY (user_id) REFERENCES users (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;    
    
ALTER TABLE  r_likes 
ADD CONSTRAINT fk_r_likes_recipe_id_recipes_id
 FOREIGN KEY (recipe_id) REFERENCES recipes (id) 
	ON DELETE CASCADE
	ON UPDATE CASCADE;
    

    