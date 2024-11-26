
ip a --> This will populate the ip address

man {command} --> Will pull up the manual pages for that comment

##### If the `apropos` command does not work because your manual pages are not indexed, what command you can use to manually refresh these?

Note: The `apropos` command in Linux helps users find commands by searching the names and descriptions of manual pages for a specified string or keywords

-- `mandb` command is used If the apropos command does not work, because your manual pages are not indexed.


##### You are trying to use `ssh alex@localhost` to log in through SSH. Your connection is refused. `ssh` has a command line option to show you the `verbose` output. That will show a lot more status messages and help you debug why this connection is failing. What is the correct option for that? (you need not to make ssh connection work at this point)

`ssh -v alex@localhost`


##### You type `host` in the terminal. What keys do you press to see some suggestions about what you can type here?
`tab tab`

##### What section of the manual pages deals with `System administration commands`?
`section 8`

##### How to find the number of hidden files in `/home/bob/data/` directory?
`ls -la /home/bob/data/` command can help find the hidden files

#####  SSH into `dev-host01` host from `centos-host` and create a blank file called `/home/bob/myfile` in `dev-host01` host.  

```
Step 1: login with ssh bob@dev-host01
Step 2: Enter the password caleston123
Step 3: touch /home/bob/myfile
Step 4: cd into /home/bob
Step 5: ls will show myfile


Note: 
SSH credentials for `dev-host01` host:  
> Host: dev-host01  
> Username: bob  
> Password: caleston123
> 
```



##### We are trying to run `apropos ssh` command to get some details about the commands related to `ssh` but we are getting this error:

```text
ssh: nothing appropriate.
```

Look into the issue and fix the same to make `apropos ssh` command work

--> sudo mandb

##### Using `apropos` command, find out the the configuration file for NFS mounts and save its name in `/home/bob/nfs` file.

```
apropos "NFS mounts"

vi /home/bob/nfs

nfsmount.conf
```


```