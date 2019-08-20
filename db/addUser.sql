INSERT INTO drino_users
(first_name, last_name, username, email)
VALUES
($1, $2, $3, $4)
RETURNING *;