# Start Transition

- Marking a state update as a non-blocking Transition 
You can mark a state update as a Transition by wrapping it in a startTransition call:

```js
import { startTransition } from 'react';

function TabContainer() {
  const [tab, setTab] = useState('about');

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```
- Transitions let you keep the user interface updates responsive even on slow devices.

- With a Transition, your UI stays responsive in the middle of a re-render. For example, if the user clicks a tab but then change their mind and click another tab, they can do that without waiting for the first re-render to finish.