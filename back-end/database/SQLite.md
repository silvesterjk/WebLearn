
SQLite -- This is an embeddable database. Does not require a network layer and there is no separate process for it.

Light weight on-device database.

This is different from MySQL, PostgreSQL & MariaDB, as they are client-server databases.

Architecture:
* Division 1: We talk to the DB via SQL commands which is then converted to byte code instruction
	* Tokeniser -->
	* Parser -->
	* Code generation (byte code) -->
* Division 2: Byte code will process the request (data processing)
	* Virtual Database Engine (VDBE) or a Virtual Machine (VM) -->
	* B/B+ Tree -->
		* Every data is stored on Single Disk File
		* A file is a set of bytes put together. Chunks of 4kb maybe. 
			* Called pages.
	* Pager --> 
		* Taking care of cache, lock mechanism etc.
	* Virtual file system or OS interface

