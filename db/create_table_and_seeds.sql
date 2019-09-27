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
INSERT INTO users (first_name, last_name, email, password, profile_pic) VALUES ('Corah', 'G', 'corah@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti', 'Golden-Retriever-puppy_01.jpg');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Johhny', 'M', 'johnny@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Nikita', 'S', 'nikita@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti');
INSERT INTO users (first_name) VALUES ('Prince');
INSERT INTO users (first_name) VALUES ('Evon');
INSERT INTO users (first_name) VALUES ('Nathanael');
INSERT INTO users (first_name) VALUES ('Le');
INSERT INTO users (first_name) VALUES ('Colleen');
INSERT INTO users (first_name) VALUES ('Karol');
INSERT INTO users (first_name) VALUES ('Isabelle');
INSERT INTO users (first_name) VALUES ('Jaclyn');
INSERT INTO users (first_name) VALUES ('Pia');
INSERT INTO users (first_name) VALUES ('Joan');
INSERT INTO users (first_name) VALUES ('Orpha');
INSERT INTO users (first_name) VALUES ('Marybeth');

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
INSERT INTO resources (user_id, url, title, description, category) VALUES (2, 'https://www.nytimes.com/guides/travel/how-to-pack-a-suitcase', 'How to Pack a Suitcase Like a Pro', 'Packing may seem simple, but it is a science with rules", "other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.dictionary.com/browse/other', 'What is the definition of other', 'Usually others. other persons or things', 'other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (3, 'https://www.youtube.com/watch?v=uBGl2BujkPQ', 'Science for Dummies', 'Introduction to Anatomy & Physiology: Crash Course A&P #1', 'science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.cbc.ca/news/technology/science-survey-1.5291291', 'Canadians trust in science falling, poll suggests', '44% consider scientists elitists and many discount science that doesnt align with personal beliefs', 'science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2, 'https://www.sciencenews.org/article/connecting-our-dwindling-natural-habitats-could-help-preserve-plant-diversity', 'Connecting our dwindling natural habitats could help preserve plant diversity', 'An ecological experiment so big it can be seen from space suggests that connecting isolated habitats with natural corridors can help preserve plant diversity.', 'science');
INSERT INTO resources (user_id, url, title, description, category) VALUES (7, 'https://www.youtube.com/watch?v=-Qy2vist-XQ', 'This Is How Successful People Manage Their Time', '15 Secrets Successful People Know About Time Management!', 'Project Management');
INSERT INTO resources (user_id, url, title, description, category) VALUES (7, 'https://blog.hubspot.com/marketing/project-management-terms-you-should-know', '13 Project Management Terms You Should Know', 'This nugget of wisdom is especially relevant to project managers.', 'Project Management');
INSERT INTO resources (user_id, url, title, description, category) VALUES (6,'https://www.centennialcollege.ca/programs-courses/full-time/project-management/', 'Project Management at Centennial College', 'Centennial Colleges Project Management program will provide you with the solid fundamental knowledge to manage projects in a timely and cost-effective manner.', 'Project Management');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.youtube.com/watch?v=j5PWMI_AGAg', 'Dean Unglert Reveals Why He Isnt On Engagement Level', 'Dean Unglert and Caelynn Miller-Keyes are taking things slow!', 'other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (2, 'https://www.nytimes.com/guides/travel/how-to-pack-a-suitcase', 'How to Pack a Suitcase Like a Pro', 'Packing may seem simple, but it is a science with rules', 'other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (1, 'https://www.dictionary.com/browse/other', 'What is the definition of other', 'Usually others. other persons or things', 'other');
INSERT INTO resources (user_id, url, title, description, category) VALUES (3, 'https://www.youtube.com/watch?v=uBGl2BujkPQ', 'Science for Dummies', 'Introduction to Anatomy & Physiology: Crash Course A&P #1', 'science')
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (4,'https://www.coachmag.co.uk/fitness/5851/20-effective-health-and-fitness-tips', 'Great tips to keep fit', 'These are so helpful!', 'Health and Fitness', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (4,'https://www.shape.com/fitness/tips/our-25-all-time-best-workout-tips', 'Workout tips', 'Bulking season', 'Health and Fitness', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=LJ9CYzSaHvk', 'Gauchos playing pato', 'Looks fun.', 'Sports', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'http://union.playwithspirit.com/', 'Cameron Wins Union Ultimate Festival!', 'Legendary.', 'Sports', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (7,'https://www.housebeautiful.com/home-remodeling/renovation/a27424221/how-to-paint-brick/', 'Painting Bricks', 'Exposed bricks are so 2018. Pain over them!', 'Home Renovations', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (6,'https://www.boredpanda.com/harry-potter-cupboard-under-the-stairs-courtney-bonnet/?utm_source=google&utm_medium=organic&utm_campaign=organic', 'Harry Potter Closet!', 'This looks great. I want to make my own!', 'Home Renovations', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');

-- Likes
INSERT INTO likes (user_id, resource_id) VALUES (1,4);

--  Comments
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Every time I chop onion I can''t stop crying. Tips anyone??', 3, 4);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('Who here is also a Taurus?', 2, 2);
INSERT INTO comments (comment, user_id, resource_id) VALUES ('^ Ski googles?', 1, 4);

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
