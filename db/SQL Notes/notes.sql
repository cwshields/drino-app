-- DELETE FROM drino_messages WHERE password ILIKE '%Y%';
-- DELETE FROM drino_messages WHERE id = '23';

-- CREATE TABLE drino_messages (
--   id serial PRIMARY KEY,
--   user_id INT NOT NULL,
--   message VARCHAR (1000) NOT NULL
-- );

-- INSERT INTO drino_messages (message) values ('')

-- UPDATE drino_users SET is_employee = true WHERE first_name = 'Chase';
-- UPDATE drino_users SET id = '2' WHERE id = 23;

-- CREATE TABLE drino_users (
--   id serial PRIMARY KEY,
--   first_name VARCHAR (40) NOT NULL,
--   last_name VARCHAR (40) NOT NULL,
--   username VARCHAR (40) UNIQUE NOT NULL,
--   password VARCHAR (255) NOT NULL,
--   email VARCHAR (60) UNIQUE NOT NULL,
--   is_employee BOOLEAN NOT NULL DEFAULT false,
--   is_admin BOOLEAN NOT NULL DEFAULT false
-- );

-- CREATE TABLE drino_sales (
--   id serial PRIMARY KEY,
--   user_id INT NOT NULL,
--   product VARCHAR (40) NOT NULL,
--   amount INT NOT NULL,
--   price INT NOT NULL
-- );

-- INSERT INTO drino_sales (user_id, product, amount, price) values (1, 'ModelX', 1, 100);

-- UPDATE drino_users
-- SET password = '$2b$10$CBZYw/Lyy2SMrHI2E/KGTec0I4ggd78QytF3f2v.ScUr4WnXeoRzy'
-- WHERE password = '1234';

-- UPDATE drino_messages
-- SET user_id = '70'
-- WHERE id = 24;

-- ALTER TABLE drino_messages ADD COLUMN user_id INT references drino_users(id)

-- SELECT * FROM drino_users
-- JOIN drino_messages ON drino_messages.user_id = drino_users.id

-- SELECT * FROM drino_users
-- JOIN drino_sales ON drino_sales.user_id = drino_users.id

-- When user sends message
-- INSERT INTO drino_messages (message, user_id) VALUES ($1, $2)

-- CREATE TABLE drino_total_sales_monthly (
--   id serial PRIMARY KEY,
--   month VARCHAR (10) NOT NULL,
--   amount INT NOT NULL
-- );

-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('September', 57594);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('October', 61245);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('November', 73836);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('December', 94571);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('January', 52418);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('Febuary', 67629);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('March', 57234);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('April', 52102);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('May', 68280);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('June', 61533);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('July', 53896);
-- INSERT INTO drino_total_sales_monthly (month, amount) VALUES ('August', 59861);

-- SELECT * FROM drino_messages
-- INNER JOIN drino_users ON drino_messages.user_id = drino_users.id;

-- UPDATE drino_users SET email = 'tholliar17@drino.com' WHERE username = 'tholliar17';

-- update drino_users
-- set is_admin = true
-- where id = 2 or id = 5 or id = 7 or id = 8;

-- ALTER TABLE drino_sales 
-- DROP COLUMN amount;