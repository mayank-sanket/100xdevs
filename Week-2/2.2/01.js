// try these things in the terminal: ping <url>
// ipconfig


// HTTP server: 

/* Things client needs to worry about:
1. Protocol (HTTP/HTTPS)
2. Address (URL/IP/PORT)
3. Route
4. Headers, Body, Params
5. Method

---------------------------------------------

* Things server needs to worry about:
1. Response headers
2. Response body
3.Status codes

--------------------------------------------

CLIENT:

eg: https://chat.openai.com/backend-api/conversation

=> https (protocol)
=> chat.openai.com (URL)
=> backend-api/conversation

Header -Cookie -123as@3325d3@!E223 (some kind of authentication stuff)
Body - What is 2 + 2 (usually in JSON)
Method : POST

-------------------------------

SERVER:

=> Response header: 
=> Response Body: 2+2 is equal to 4

=> Status code: 200 (for example)

_________________________________________________

Status codes: (ideally)

200: Everything is ok
404: Page/route not found
403: Authentication issues
500: Internal server issues

*/