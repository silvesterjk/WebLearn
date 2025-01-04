
Note: Return everything from the customer table
`SELECT * FROM customer

Note: ASC can be avoided. As sorting by ascending order is the default. 
`SELECT first_name, last_name, email FROM customer ORDER BY first_name ASC

`SELECT first_name, last_name, email FROM customer ORDER BY first_name DESC

Note: Here the first name is returned in the descending order and the last name is returned in the ascending order
`SELECT first_name, last_name, email FROM customer ORDER BY first_name DESC, last_name

Similarly: 
```
SELECT * 
FROM payment
ORDER BY customer_id, amount DESC

-or-

SELECT * 
FROM books
ORDER BY price DESC

```








