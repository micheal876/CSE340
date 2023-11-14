UPDATE account
SET account_type = 'Admin' 
WHERE account_id = 1;

DELETE FROM account
WHERE account_id = 1;

UPDATE inventory
SET inv_description = REPLACE((SELECT inv_description FROM inventory WHERE inv_id = 10), 'the small interiors', 'a huge interior')
WHERE inv_id = 10;

SELECT inv_make, inv_model, classification_name
FROM inventory
INNER JOIN classification
    ON inventory.classification_id = classification.classification_id
WHERE classification_name = 'Sport';

UPDATE inventory
SET 
    inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/')