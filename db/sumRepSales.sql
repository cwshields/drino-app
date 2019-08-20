SELECT sum(price)
FROM drino_sales
WHERE user_id = $1