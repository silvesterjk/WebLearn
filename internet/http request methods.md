
HTTP requests are messages sent by clients to interact with server resources. Each method serves a specific purpose:

GET
- Purpose: Retrieves data from the server
- Payload: No body payload
- Success Response: 200 (OK)
- Example: Fetching user profile, loading webpage
- Safe & Idempotent: Yes

 POST
- Purpose: Creates new resources
- Payload: Carries data in request body
- Success Response: 201 (Created)
- Example: Submitting forms, uploading files
- Safe & Idempotent: No

 PUT
- Purpose: Updates by replacing entire resource
- Payload: Complete resource data
- Success Response: 200 (OK) or 204 (No Content)
- Example: Updating user profile completely
- Idempotent: Yes

PATCH
- Purpose: Partial resource modification
- Payload: Only changed fields
- Success Response: 200 (OK) or 204 (No Content)
- Example: Updating just user's email
- Idempotent: No

 DELETE
- Purpose: Removes resources
- Payload: Usually empty
- Success Response: 200 (OK) or 204 (No Content)
- Example: Removing user account
- Idempotent: Yes

Key Differences:
- PUT vs PATCH: PUT replaces entire resource, PATCH updates specific fields
- POST vs PUT: POST creates new resources, PUT updates existing ones
- GET vs POST: GET retrieves data, POST sends data

Common Status Codes:
- 2xx: Success (200 OK, 201 Created, 204 No Content)
- 4xx: Client Errors (400 Bad Request, 404 Not Found)
- 5xx: Server Errors (500 Internal Server Error)