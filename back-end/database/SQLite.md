
SQLite -- This is an embeddable database. Does not require a network layer and there is no separate process for it.

* RAM is volatile and Hard Disk is persistent
	* I/O operations in RAM is faster than Hard disk

* A file block is typically 4kb (but some are larger such as 16kb)
	* Which is a combination or select area on the disk
	* The combination is of track and sector
		* Track -- Concentric circles
		* Sector -- Slices on the circles
		
* If an entry is 400bytes and a block can store 4kb
	* 4000/400 --> 10 entries per block
	* For read 10 million records (10^6)
		* We need to read 10^5 blocks (10^6 / 10)
		* If one I/O operations take 10ms, then it would take 100s to read 1 million records.
	* We could instead index each block in an `index table`
		* If the index table got 400 entries per block, we'll need 250 blocks to index the 1M data.
		* If it takes 1ms per block, then we'll take a max. of 250ms to read every block in the index table. Plus 1ms for the block to move the found item to RAM.
		* We save time from brute-forcing the way though the storage.
	* We can further create another table to index the index table to save more time. This is called `multi level indexing` 
		* This is essentially a B-Tree as one is mapped to another. 
		* Every entry here acts as a node connected to another.
