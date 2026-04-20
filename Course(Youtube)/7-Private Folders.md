## Private Folders

- A way to tell Next.js, "Hey, this folder is just for internal stuff - don't include it in the routhing system."
- The folder and all its subfolders are excluded form rounting.
- Add an underscore at the start of the folder name
- Private folders are super useful for a bunch of things:
  * keeping your UI logic separate from routing logic.
  * Having a consistent way to organise internal files in your project.
  * Making it easier to group related files in your code editor.
  * Avoiding potential naming conflicts with future Next.js file naming conventions.
- if you actially want an underscore in your URL, use "%5F
instead. That's just the URL-encoded version of and underscore.s