SELECT 
  drino_users.first_name, 
  drino_users.last_name, 
  drino_users.email, 
  drino_messages.id, 
  drino_messages.message 
FROM 
  drino_users
JOIN 
  drino_messages 
ON 
  drino_users.id = drino_messages.user_id;