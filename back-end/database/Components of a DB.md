
Client -->

Network Layer --> 

| Frontend Component of a database |

Tokeniser (to make sense of the query) --> 
Parser (to check if the tokens together form a valid instruction or now) --> 
Optimiser (to run the query in the most efficient way to finish it ASAP) -->

| Execution Engine |
* Query execution
* Cache manager
* Utility services
	* Authentication 
	* Security etc.

| Transaction Manager // Lock Manger // Recovery Manager |

| Concurrency Manager |
* To handle concurrency
	* MVCC -- Multiversion concurrency control
		* This is one of the techniques


| Strorage Engine | 
* Disk storage manager
	* Piece of the disk is called the page
	* To do any operation, the page needs to come to the RAM from the persistent memory
	* Upon updating, we can put it back.
* Buffer Manager -- To deal with the data that is there on disk
	* To move the entire page and to put it back












Databases:

SQLite -- This is an embeddable database. Does not require a network layer and there is no separate process for it.