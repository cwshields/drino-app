SELECT id, first_name, last_name, username, password, is_employee, is_admin FROM drino_users
WHERE username = $1;