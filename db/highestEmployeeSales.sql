SELECT
  count(drino_sales) AS total, user_id
FROM
  drino_sales
  group by user_id
ORDER BY total DESC
LIMIT 1;