create table if not exists master_user(
	user_id bigint primary key,
	user_name varchar(255),
	user_password varchar(255),
	user_email varchar(255) unique,
	state varchar(255),
	country varchar(255),
	doj timestamp
);
create table if not exists master_category(
	id bigint primary key,
	category_name varchar(255) unique
);
create table if not exists user_sub_category(
	id bigint primary key,
	parent_category bigint,
	sub_name varchar(255),
	user_id bigint,
	Foreign key (parent_category) references master_category(id),
	Foreign key (user_id) references master_user(user_id)
);
INSERT INTO public.master_user(
	user_id,user_name, user_password, user_email, state, country)
	VALUES
    (1,'admin', 'admin', 'admin@admin.com', 'Mumbai', 'India'),
	(2,'siddharth', 'password', 'sharmazsiddharth@gmail.com', 'Faridabad', 'India');	
INSERT INTO public.master_category(
	id, category_name)
	VALUES
    (101,'Bills'),
	(102,'Travel'),
	(103,'Rent'),
	(104,'Online'),
	(105,'Food');	
INSERT INTO public.user_sub_category(id,parent_category, sub_name, user_id)
VALUES 
    (1,101, 'Electricity', NULL),
    (2,101, 'Water', NULL),
    (3,101, 'Mobile', NULL),
    (4,101, 'Wifi', NULL),
    (5,102, 'Metro', NULL),
    (6,102, 'Rickshaw', NULL),
    (7,102, 'Train', NULL),
    (8,103, 'Rent', NULL),
    (9,104, 'Amazon', NULL),
    (10,104, 'Flipkart', NULL),
    (11,104, 'others', NULL),
    (12,105, 'Breakfast', NULL),
    (13,105, 'Lunch', NULL),
    (14,105, 'Snacks', NULL),
    (15,105, 'Dinner', NULL);
INSERT INTO public.user_sub_category(id,parent_category, sub_name, user_id)
VALUES 
    (16,105, 'Tiffin', 1),
    (17,105, 'Compass', 1),
	(18,104, 'Swiggy', 2),
    (19,104, 'Zomato', 2);
	
	
	
select * from user_sub_category usc
join master_category mc on usc.parent_category=mc.id;

select * from user_sub_category usc
join master_category mc on usc.parent_category = mc.id
where usc.user_id is null or usc.user_id = 1;

