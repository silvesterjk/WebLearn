
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


When we are sorting by the last name in descending order, if the last names are the same, then those respective first names must be returned in the descending order

```
SELECT first_name, last_name, email
FROM customer
ORDER BY last_name DESC, first_name DESC

-We could also:-
ORDER BY 2 DESC, 1 DESC

# as last_name is the second column and first_name is the first column
# While this is easier, this is not the best practice
```


To return the unique rows
Note : This will return all the combinations between the selected columns

```
SELECT DISTINCT first_name, last_name, email
FROM customer
```

To return the distinct prices that have been paid

```
SELECT DISTINCT amount
FROM payment
ORDER BY amount DESC
```

To return the first 10 items in the table after sorting the first_names in the ascending order

```
SELECT first_name
FROM actor
ORDER BY first_name ASC
LIMIT 10

-or-

SELECT * FROM rental
ORDER BY rental_date
LIMIT 7
```


To count the number of values 

```
SELECT COUNT(*)
FROM customer

SELECT COUNT(first_name)
FROM customer

SELECT COUNT(DISTINCT first_name)
FROM customer

```

To count the number of payments made by the customer_id 100 &
To list all the payments made by customer_id 100

```
SELECT COUNT(customer_id) FROM payment WHERE customer_id = '100';

SELECT * FROM payment WHERE customer_id = '100';
```


To select values that are equal to or less than 10.99
```
SELECT * FROM payment WHERE amount <= 10.99
```

To select values that are equal to or more than 10.99
```
SELECT * FROM payment WHERE amount >= 10.99
```

To select values that are not equal to 10.99

```
SELECT * FROM payment WHERE amount <> 10.99
-or-
SELECT * FROM payment WHERE amount != 10.99
```

To find all products with a price of more than 200, selecting only the product name and price, and sorting the results by price in ascending order:

```
SELECT name, price
FROM products
WHERE price > 200
ORDER BY price ASC;
```

