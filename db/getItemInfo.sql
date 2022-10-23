SELECT 
  *
FROM 
  drino_images
JOIN
  drino_products
ON
  drino_images.id = drino_products.id
WHERE 
  drino_products.id = $1;