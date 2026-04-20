# Headers in route handlers

HTTP headers represent the metadata associated with an API request and
response.

## Request Headers

These are sent by the client, such as a web browser, to the server. They contain
essential information about the request, which helps the server understand and
process it correctly.

- 'User-Agent' which identifies the browser and operating system to the server.
- 'Accept' which indicates the content types like text, video, or image formats that
the client can process.

- 'Authorization' header used by the client to authenticate itself to the server

## Response Headers

These are sent back from the server to the client. They provide information about
the server and the data being sent in the response.

'Content-Type' header which indicates the media type of the response. It tells the
client what the data type of the returned content is, such as text/html for HTML
documents, application/json for JSON data, etc.

## Ex:

```tsx
import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-type": "text/html",
    },
  });
}
```