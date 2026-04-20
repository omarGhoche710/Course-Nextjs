# useRouter

```plainText
const router = useRouter(); // create router instance to control navigation

router.push("/path");     // navigate to page and add it to history (user can go back)

router.replace("/path");  // navigate to page and replace current history entry (no back)

router.back();            // go to previous page in history

router.forward();         // go to next page in history

router.refresh();         // re-fetch data from server without full page reload
```