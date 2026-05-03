## Steps:
- Make dashboard client component
- Log a message in this component
- Navigate from home to dashboard
- The message will only appear in the browser
- refresh the page
- The message will appear on the browser and on the terminal

## Explain

when we navigate using the link component the dashboard component is only render client side and we see the message in the browser console, but if we reload the page the dashboard component is rendered once on the server to allow user immediately see the page's HTML content rather than a blank screen and then again on the client side during hydration...


## Summary

In the RSC architecture and by extension in the Next.js app router, components
are server components by default

To create client components, add the "use client" directive at the top of the file

Server components are rendered exclusively on the server

Client components are rendered once on the server and then on the client