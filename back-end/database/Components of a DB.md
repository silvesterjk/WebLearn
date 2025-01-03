
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

________

To handle distributed data:

| Shard Manager for Sharding | 
| Cluster Manager to manager all the shard nodes | 
| Replication Manager to ensure availability |

CAP -- Consistency vs Availability
____



| Strorage Engine | 
* Disk storage manager
	* Piece of the disk is called the page
	* To do any operation, the page needs to come to the RAM from the persistent memory
	* Upon updating, we can put it back.
* Buffer Manager -- To deal with the data that is there on disk
	* To move the entire page and to put it back
* Indexing by Index Manager
	* This helps the buffer manager to pick the essentials and to move things around.
	

| OS Interaction Layer | 
* To manage system call based on the OS we are using
