# Why does OAuth skip authentication after the first login?

- Target: "Why does OAuth authentication with GitHub prompt for authorization the first time, but automatically log me in on subsequent attemp";

- Response: "because you have a token stored somewhere in a cookie, it uses it after first login until it expires"

- Target: "Is this token different from the token generated when a user logs in with email and password? Because I know that the token generated during a normal login expires after logout, but the token generated with OAuth expires after a specific period of time."

- Response: "that's the whole point of oauth flow really. once you authorize the app to access your github account, it stores that permission so you don't have to keep clicking "yes" every single time. would be pretty annoying if you had to approve same app over and over again each time you visit."