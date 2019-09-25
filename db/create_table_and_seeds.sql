DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS likes CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(500) NOT NULL,
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
INSERT INTO users (first_name, last_name, email, password) VALUES ('Corah', 'G', 'corah@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Johhny', 'M', 'johnny@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti');
INSERT INTO users (first_name, last_name, email, password) VALUES ('Nikita', 'S', 'nikita@lighthouse.ca', '$2a$10$xOZ028dkAVxsER2fXNO33exiRkjOdhvJiAvvECGYuu/Y6JPu4ZSti');

-- Resources
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'https://www.youtube.com/watch?v=HHjftEZQxNc', 'Learn To Knit', 'Knitting for begginers', 'science', 'https://www.shutterstock.com/image-vector/play-vector-icon-media-player-red-1480954658');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'http://theastrologypodcast.com/2015/05/18/learning-astrology-and-becoming-an-astrologer/', 'Horoscope Guide',  'Becoming an astrologer','cooking', 'https://unsplash.com/photos/_Zua2hyvTBk');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (1,'http://www.vetstreet.com/our-pet-experts/should-you-train-your-cat-to-use-the-toilet', 'Housetraining Cat', 'Teach cat to pee in the toilet', 'science', 'https://www.istockphoto.com/ca/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-gm856794670-141191427');
INSERT INTO resources (user_id, url, title, description, category, thumbnail_photo) VALUES (2,'https://www.youtube.com/watch?v=BuebC0CfD8E', 'Cutting an Onion', 'Best Way to Cut an Onion', 'cooking', 'https://cdn.theatlantic.com/assets/media/img/mt/2015/05/shutterstock_247399801/lead_720_405.jpg?mod=1533691742');

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
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 4, 1);
INSERT INTO ratings (user_id, resource_id, rating) VALUES (1, 4, 2);
