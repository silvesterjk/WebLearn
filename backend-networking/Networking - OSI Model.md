* Client-Server Architecture
	* We need standard to transfer data
	
* Open Systems Interconnection (OSI) Model:
	* 7 levels describe each specific network component:
		* L7 -- Application - HTTP/FTP/gRPC (Backend Engineers work on this majorly)
			* POST request with JSON data to HTTPS server
		* L6 -- Presentation -- Serialisation of JSON for example
			* Serialize JSON to flat byte strings
		* L5 -- Session -- Stateful/Stateless --> Connection Establishment
			* Request to establish TCP connection/TLS
		* L4 -- Transport -- UDP/TCP (Ports) (Backend Engineers work on this majorly)
			* Sends SYN request target port 443
		* L3 -- Network -- Internet Protocol
			* SYN in placed an IP packet(s) and adds the source/destination IPs
		* L2 -- Data Link -- Frames, Mac address Ethernet
			* Each packet goes into a single frame and adds the source/destination MAC address.
		* L1 -- Physical -- Electric signals, fiber or radio waves
			* Each frame becomes string of bits which converted into either a radio signal (wifi), electric signal (ethernet), or light(fiber)


1. Physical Layer (Layer 1)
- Deals with physical transmission of raw bits over physical medium
- Handles voltage levels, cable types, physical network design
- Practical example: When you plug an Ethernet cable into your laptop's network port, the physical layer handles:
  - The electrical signals traveling through the copper wires
  - The pin layout of the RJ-45 connector
  - The voltage levels that represent 1s and 0s

2. Data Link Layer (Layer 2)
- Handles node-to-node data delivery and error detection
- Manages physical addressing (MAC addresses)
- Practical example: When your laptop communicates with your router:
  - Your network card uses its MAC address (e.g., 00:1A:2B:3C:4D:5E) to identify itself
  - The router recognizes your device through this MAC address
  - If there's signal interference and some bits are corrupted, this layer detects it and requests retransmission

1. Network Layer (Layer 3)
- Manages logical addressing and routing between networks
- Handles packet forwarding, routing, and addressing
- Practical example: When you access a website like google.com:
  - Your computer sends packets with your IP address (e.g., 192.168.1.5) as source
  - The destination IP address might be Google's server (e.g., 172.217.3.110)
  - Routers along the way use these IP addresses to forward packets to the correct destination

2. Transport Layer (Layer 4)
- Ensures complete data transfer and handles flow control
- Manages end-to-end communication
- Practical example: When you download a large file:
  - TCP breaks the file into smaller segments
  - Each segment gets a sequence number
  - If segment #45 doesn't arrive, your computer requests retransmission of just that segment
  - TCP also ensures you don't overwhelm the server by sending too many requests at once

3. Session Layer (Layer 5)
- Establishes, manages, and terminates connections
- Handles session tokens and checkpoints
- Practical example: When you log into your online banking:
  - The session layer creates a unique session ID for your login
  - If your internet drops while transferring money, the session layer can resume from the last checkpoint
  - When you click "logout," the session layer terminates the connection

4. Presentation Layer (Layer 6)
- Handles data translation, encryption, and compression
- Ensures data is readable by receiving system
- Practical example: When you open a website with HTTPS:
  - Your browser and the server negotiate encryption (e.g., TLS)
  - If you upload a JPEG image, this layer handles the encoding
  - Character encoding (like UTF-8) is managed here to ensure text appears correctly

5. Application Layer (Layer 7)
- Provides network services directly to applications
- Implements common application protocols
- Practical example: When you send an email:
  - Your email client uses SMTP protocol to send the message
  - The recipient's server uses POP3 or IMAP to receive it
  - When browsing websites, your browser uses HTTP/HTTPS protocols

All these layers work together in sequence. For instance, when you send an email:
* Your email client composes the message (Layer 7)
* The message is encrypted and compressed (Layer 6)
* A session is established with the email server (Layer 5)
* TCP ensures reliable delivery (Layer 4)
* IP handles routing to the email server (Layer 3)
* Your network card adds MAC addressing (Layer 2)
* The data is converted to electrical signals and transmitted (Layer 1)


* Level 1 to 4 is public
* 