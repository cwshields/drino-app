UPDATE drino_users
SET description = $1
WHERE id = $2;

SELECT description FROM drino_users
WHERE id = $2;