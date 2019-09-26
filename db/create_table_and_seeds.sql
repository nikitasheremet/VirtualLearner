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
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'https://www.youtube.com/watch?v=HHjftEZQxNc', 'Learn To Knit', 'Knitting for begginers', 'Science', 'https://www.shutterstock.com/image-vector/play-vector-icon-media-player-red-1480954658');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'http://theastrologypodcast.com/2015/05/18/learning-astrology-and-becoming-an-astrologer/', 'Horoscope Guide',  'Becoming an astrologer','Cooking', 'https://unsplash.com/photos/_Zua2hyvTBk');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'http://www.vetstreet.com/our-pet-experts/should-you-train-your-cat-to-use-the-toilet', 'Housetraining Cat', 'Teach cat to pee in the toilet', 'Science', 'https://www.istockphoto.com/ca/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-gm856794670-141191427');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');

INSERT INTO resources (user_id, url, title, description, category) VALUES (3,'https://www.fluentin3months.com/study-spanish/', 'Learn Spanish Fast', 'Be Fluent in 3 Months', 'Language');
INSERT INTO resources (user_id, url, title, description, category) VALUES (4,'https://www.ranker.com/list/weird-languages/kellen-perry', 'Weird Languages','10 Strangest Languages', 'Language');

INSERT INTO resources (user_id, url, title, description, category) VALUES (5,'https://www.youtube.com/watch?v=QGg8cIKobtQ', 'PLay Guitar Like a Rockstart','Learn to play Guitar Like a Pro in 7 minutes', 'Music');

INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'Cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');

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
