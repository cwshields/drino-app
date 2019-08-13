SELECT id, first_name, last_name, username, password FROM drino_users
WHERE username = $1;