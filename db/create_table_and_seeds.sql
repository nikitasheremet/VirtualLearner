DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(500),
  profile_pic VARCHAR (255)
);

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  url VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(500) NOT NULL,
  thumbnail_photo VARCHAR (255)
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  comment TEXT NOT NULL,
  time TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE
);
CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  rating SMALLINT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER NOT NULL REFERENCES resources(id) ON DELETE CASCADE
);

-- USERS
INSERT INTO users (first_name, last_name, email, password, profile_pic) VALUES ('Corah', 'G', 'corah@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti', '/images/avatar.svg');
INSERT INTO users (first_name, last_name, email, password, profile_pic) VALUES ('Johhny', 'M', 'johnny@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti', '/images/avatar3.svg');
INSERT INTO users (first_name, last_name, email, password, profile_pic) VALUES ('Nikita', 'S', 'nikita@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti', '/images/avatar4.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Prince', '/images/avatar4.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Evon', '/images/avatar4.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Nathanael', '/images/avatar5.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Le', '/images/avatar6.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Colleen', '/images/avatar7.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Karol', '/images/avatar8.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Isabelle', '/images/avatar9.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Jaclyn', '/images/avatar10.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Pia', '/images/avatar11.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Joan', '/images/avatar12.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Orpha', '/images/avatar1.svg');
INSERT INTO users (first_name, profile_pic) VALUES ('Marybeth', '/images/avatar2.svg');

-- Resources
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'https://www.youtube.com/watch?v=HHjftEZQxNc', 'Learn To Knit', 'Knitting for begginers', 'Science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'https://www.theatlantic.com/health/archive/2017/07/my-dad-is-now-scared-of-macaroni-and-cheese-should-he-be/534702/', 'Scary KD',  'How Scared Should I be of Mac and Cheese','Cooking');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'http://www.vetstreet.com/our-pet-experts/should-you-train-your-cat-to-use-the-toilet', 'Housetraining Cat', 'Teach cat to pee in the toilet', 'Science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'https://www.fluentin3months.com/study-spanish/', 'Learn Spanish Fast', 'Be Fluent in 3 Months', 'Language');
INSERT INTO resources (user_id, url, title, description, category) VALUES (4,'https://www.ranker.com/list/weird-languages/kellen-perry', 'Weird Languages','10 Strangest Languages', 'Language');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'https://www.youtube.com/watch?v=QGg8cIKobtQ', 'Play Guitar Like a Rockstart','Learn to play Guitar Like a Pro in 7 minutes', 'Music');
INSERT INTO resources (user_id, url, title, description, category) VALUES (6,'https://www.youtube.com/watch?v=1jYg28lY0pA', 'How To Play The Triangle', 'How to play the triangle proffesionally', 'Music');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'http://thehappypassport.com/make-money-traveling/', 'Make Money While Travelling', 'How to get rich from travelling', 'Travel');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://www.timeout.com/toronto/bars/best-bars-in-toronto', 'Best Bars Toronto', '15 Best Bars in Toronto', 'Travel');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1,'https://www.pacsafe.com/blog/tips-for-finding-real-buried-treasure.html', 'Find Buried Treasure', 'Guide on how to find real buried tresure!', 'Gardening');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://www.youtube.com/watch?v=jkXdi36XI20', 'Raising Bumblebees', 'Starting a Bumblee Family', 'Gardening');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://www.youtube.com/watch?v=2d7s3spWAzo', 'Making Promises', 'Learning about how promises work', 'Coding');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://thetechieguy.com/a-step-by-step-guide-how-to-hack-apple-and-amazon/', 'Hack Amazon and Apple', 'How to get my games and orders for free', 'Coding');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://en.wikipedia.org/wiki/Religion', 'What is religion', 'Understanding Religion', 'Religion');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2,'https://sites.google.com/site/steveoedekerkinfo/feature-films/bruce-almighty', 'Bruce Almighty Fan Site', 'Really good movie', 'Religion');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2, 'https://www.nytimes.com/guides/travel/
how-to-pack-a-suitcase', 'How to Pack a Suitcase Like a Pro', 'Packing may seem simple, but it is a science with rules', 'Other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.dictionary.com/browse/other', 'What is the definition of other', 'Usually others. other persons or things', 'Other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (3, 'https://www.youtube.com/watch?v=uBGl2BujkPQ', 'Science for Dummies', 'Introduction to Anatomy & Physiology: Crash Course A&P #1', 'Science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.cbc.ca/news/technology/science-survey-1.5291291', 'Canadians trust in science falling, poll suggests', '44% consider scientists elitists and many discount science that doesnt align with personal beliefs', 'Science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2, 'https://www.sciencenews.org/article/connecting-our-dwindling-natural-habitats-could-help-preserve-plant-diversity', 'Connecting our dwindling natural habitats could help preserve plant diversity', 'An ecological experiment so big it can be seen from space suggests that connecting isolated habitats with natural corridors can help preserve plant diversity.', 'Science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (7, 'https://www.youtube.com/watch?v=-Qy2vist-XQ', 'This Is How Successful People Manage Their Time', '15 Secrets Successful People Know About Time Management!', 'Project Management');
INSERT INTO resources (user_id, url, title, description, category) VALUES (7, 'https://blog.hubspot.com/marketing/project-management-terms-you-should-know', '13 Project Management Terms You Should Know', 'This nugget of wisdom is especially relevant to project managers.', 'Project Management');
INSERT INTO resources (user_id, url, title, description, category) VALUES (6,'https://www.centennialcollege.ca/programs-courses/full-time/project-management/', 'Project Management at Centennial College', 'Centennial Colleges Project Management program will provide you with the solid fundamental knowledge to manage projects in a timely and cost-effective manner.', 'Project Management');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.youtube.com/watch?v=j5PWMI_AGAg', 'Dean Unglert Reveals Why He Isnt On Engagement Level', 'Dean Unglert and Caelynn Miller-Keyes are taking things slow!', 'Other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2, 'https://www.nytimes.com/guides/travel/how-to-pack-a-suitcase', 'How to Pack a Suitcase Like a Pro', 'Packing may seem simple, but it is a science with rules', 'Other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.dictionary.com/browse/other', 'What is the definition of other', 'Usually others. other persons or things', 'Other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (3, 'https://www.youtube.com/watch?v=uBGl2BujkPQ', 'Science for Dummies', 'Introduction to Anatomy & Physiology: Crash Course A&P #1', 'Science');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (4,'https://www.coachmag.co.uk/fitness/5851/20-effective-health-and-fitness-tips', 'Great tips to keep fit', 'These are so helpful!', 'Health and Fitness', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (4,'https://www.shape.com/fitness/tips/our-25-all-time-best-workout-tips', 'Workout tips', 'Bulking season', 'Health and Fitness', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=LJ9CYzSaHvk', 'Gauchos playing pato', 'Looks fun.', 'Sports', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'http://union.playwithspirit.com/', 'Cameron Wins Union Ultimate Festival!', 'Legendary.', 'Sports', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (7,'https://www.housebeautiful.com/home-remodeling/renovation/a27424221/how-to-paint-brick/', 'Painting Bricks', 'Exposed bricks are so 2018. Pain over them!', 'Home Renovations', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (6,'https://www.boredpanda.com/harry-potter-cupboard-under-the-stairs-courtney-bonnet/?utm_source=google&utm_medium=organic&utm_campaign=organic', 'Harry Potter Closet!', 'This looks great. I want to make my own!', 'Home Renovations', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');

-- Likes
INSERT INTO likes (user_id, resource_id) VALUES (1,4);
INSERT INTO likes (user_id, resource_id) VALUES (1,1);
INSERT INTO likes (user_id, resource_id) VALUES (2,2);
INSERT INTO likes (user_id, resource_id) VALUES (3,1);
INSERT INTO likes (user_id, resource_id) VALUES (1,2);
INSERT INTO likes (user_id, resource_id) VALUES (5,2);
INSERT INTO likes (user_id, resource_id) VALUES (1,3);
INSERT INTO likes (user_id, resource_id) VALUES (6,3);
INSERT INTO likes (user_id, resource_id) VALUES (1,4);
INSERT INTO likes (user_id, resource_id) VALUES (1,5);
INSERT INTO likes (user_id, resource_id) VALUES (3,5);
INSERT INTO likes (user_id, resource_id) VALUES (1,6);
INSERT INTO likes (user_id, resource_id) VALUES (5,6);
INSERT INTO likes (user_id, resource_id) VALUES (1,7);
INSERT INTO likes (user_id, resource_id) VALUES (2,8);
INSERT INTO likes (user_id, resource_id) VALUES (3,9);
INSERT INTO likes (user_id, resource_id) VALUES (4,10);
INSERT INTO likes (user_id, resource_id) VALUES (1,11);
INSERT INTO likes (user_id, resource_id) VALUES (1,12);
INSERT INTO likes (user_id, resource_id) VALUES (1,13);
INSERT INTO likes (user_id, resource_id) VALUES (7,14);
INSERT INTO likes (user_id, resource_id) VALUES (7,15);
INSERT INTO likes (user_id, resource_id) VALUES (1,15);
INSERT INTO likes (user_id, resource_id) VALUES (9,16);
INSERT INTO likes (user_id, resource_id) VALUES (1,16);
INSERT INTO likes (user_id, resource_id) VALUES (1,17);
INSERT INTO likes (user_id, resource_id) VALUES (10,18);
INSERT INTO likes (user_id, resource_id) VALUES (1,18);
INSERT INTO likes (user_id, resource_id) VALUES (2,19);
INSERT INTO likes (user_id, resource_id) VALUES (1,19);
INSERT INTO likes (user_id, resource_id) VALUES (1,20);
INSERT INTO likes (user_id, resource_id) VALUES (12,20);
INSERT INTO likes (user_id, resource_id) VALUES (3,21);
INSERT INTO likes (user_id, resource_id) VALUES (7,22);
INSERT INTO likes (user_id, resource_id) VALUES (8,22);
INSERT INTO likes (user_id, resource_id) VALUES (1,23);
INSERT INTO likes (user_id, resource_id) VALUES (2,23);
INSERT INTO likes (user_id, resource_id) VALUES (9,23);
INSERT INTO likes (user_id, resource_id) VALUES (10,23);
INSERT INTO likes (user_id, resource_id) VALUES (3,23);
INSERT INTO likes (user_id, resource_id) VALUES (11,23);
INSERT INTO likes (user_id, resource_id) VALUES (1,24);
INSERT INTO likes (user_id, resource_id) VALUES (2,29);
INSERT INTO likes (user_id, resource_id) VALUES (10,29);
INSERT INTO likes (user_id, resource_id) VALUES (1,25);
INSERT INTO likes (user_id, resource_id) VALUES (1,25);
INSERT INTO likes (user_id, resource_id) VALUES (9,25);
INSERT INTO likes (user_id, resource_id) VALUES (2,25);
INSERT INTO likes (user_id, resource_id) VALUES (3,26);
INSERT INTO likes (user_id, resource_id) VALUES (4,26);
INSERT INTO likes (user_id, resource_id) VALUES (5,26);
INSERT INTO likes (user_id, resource_id) VALUES (6,26);
INSERT INTO likes (user_id, resource_id) VALUES (8,26);
INSERT INTO likes (user_id, resource_id) VALUES (7,26);
INSERT INTO likes (user_id, resource_id) VALUES (9,27);
INSERT INTO likes (user_id, resource_id) VALUES (10,27);
INSERT INTO likes (user_id, resource_id) VALUES (1,27);
INSERT INTO likes (user_id, resource_id) VALUES (11,27);
INSERT INTO likes (user_id, resource_id) VALUES (3,28);
INSERT INTO likes (user_id, resource_id) VALUES (4,28);
INSERT INTO likes (user_id, resource_id) VALUES (5,29);
INSERT INTO likes (user_id, resource_id) VALUES (8,29);
INSERT INTO likes (user_id, resource_id) VALUES (9,29);
INSERT INTO likes (user_id, resource_id) VALUES (10,30);
INSERT INTO likes (user_id, resource_id) VALUES (11,31);
INSERT INTO likes (user_id, resource_id) VALUES (2,31);
INSERT INTO likes (user_id, resource_id) VALUES (3,31);
INSERT INTO likes (user_id, resource_id) VALUES (4,31);
INSERT INTO likes (user_id, resource_id) VALUES (5,31);
INSERT INTO likes (user_id, resource_id) VALUES (6,29);
INSERT INTO likes (user_id, resource_id) VALUES (7,29);


--  Comments
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Every time I chop onion I can''t stop crying. Tips anyone??', 3, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Who here is also a Taurus?', 2, 2);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('WOW Knitting is so cooooooooolllll!', 3, 1);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('No Way Knitting is lame O', 7, 1);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('How dare you sir!!!!', 1, 1);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('You Take it back right now, knitting has taken me through some dark places', 8, 1);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Everybody wants to be a rockstar!', 1, 7);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Rockstars are corrupting our children ??!?!?!?', 1, 7);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('OMG!!! I cant believe this', 2, 1);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Great Article thanks for sharing', 2, 2);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Defintely going to save this for later', 3, 3);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('WOW!!!!', 3, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Great share!!', 3, 5);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('love this!', 5, 6);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('I can not handle this', 5, 7);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('hahahha!', 5, 8);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('^ LOL', 5, 9);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('im so confused at this???', 6, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Please delete this off your resource-DO NOT LIKE', 6, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('WOW!! OMG', 6, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('This is shocking', 6, 10);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('I cant believe this', 7, 10);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('????', 7, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES (' wow how did you find this!!?', 7, 6);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Thanks Karen for the share!', 8, 9);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('wowwww', 3, 31);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Please send me this to my gmail!', 2, 31);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Wow we have the same interests ', 5, 30);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('DEAN!!!!!!!! DONT DO THIS', 7, 24);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('WHAT ABOUT KRISTINA?', 8, 24);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('I LOVE HIM AWWWWW', 8, 25);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Great share!!', 10, 24);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('love this!', 11, 23);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('i hate this', 2, 22);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('hahahha!', 5, 21);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('this is not funny', 4, 10);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('I wish I did not have to see this on my timeline', 12, 11);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('EWWWWWWWWW', 8, 13);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('this is so surprising', 2, 14);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('I am going to bed now, this is too much for me!', 10, 19);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('NOOOOOOOOO', 6, 20);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('THANK YOU!!!!', 11, 29);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Hello - where did you even find this???', 2, 31);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Amazing find', 1, 31);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Amazing! Can you make a video on how to make your own??', 5, 8);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Super helpful! Can''t wait to practice', 2, 8);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('I wish he was my triangle teacher!', 3, 8);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Love this movie!', 6, 16);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Thanks! So helpful', 5, 13);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Don''t make promises you cant''t keep! Ha!', 2, 13);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Bzzzzzzzz', 2, 12);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Bzzzzzzzz', 5, 12);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Mac n Screams!', 5, 2);


-- Ratings
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 4, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 3, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 3, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 3, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 3, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 3, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 3, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 2, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 6, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 3, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (3, 3, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (4, 6, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (5, 5, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (6, 3, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (7, 4, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (8, 6, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (2, 6, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (3, 3, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (7, 3, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (9, 6, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (10, 5, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (8, 12, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (11, 10, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (8, 23, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (5, 25, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (7, 26, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (3, 27, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (8, 12, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 18, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 27, 3);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (9, 12, 2);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (8, 11, 2);






