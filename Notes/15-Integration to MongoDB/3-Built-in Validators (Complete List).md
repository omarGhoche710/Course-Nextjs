### Built-in Validators (Complete List)

| Type | Validator | Description |
|---|---|---|
| All types | `required` | Field must exist |
| All types | `default` | Default value if not provided |
| `String` | `minLength` | Minimum character count |
| `String` | `maxLength` | Maximum character count |
| `String` | `match` | Must match a regex pattern |
| `String` | `enum` | Must be one of defined values |
| `String` | `trim` | Auto-removes whitespace |
| `String` | `lowercase` | Auto-converts to lowercase |
| `String` | `uppercase` | Auto-converts to uppercase |
| `Number` | `min` | Minimum value |
| `Number` | `max` | Maximum value |
| `Number` | `enum` | Must be one of defined values |
| `Date` | `min` | Earliest allowed date |
| `Date` | `max` | Latest allowed date |
| `Array` | `minlength` | Minimum number of items |
| `Array` | `maxlength` | Maximum number of items |
| All types | `unique` | No duplicate values in collection |
| All types | `validate` | Custom validator function |

---

### The Most Important One — `validate` (Custom)

When built-ins aren't enough, you write your own:

```js
phone: {
  type: String,
  validate: {
    validator: function(v) {
      return /^\d{10}$/.test(v); // must be exactly 10 digits
    },
    message: props => `${props.value} is not a valid phone number`
  }
}
```

---

> **Note:** `trim`, `lowercase`, `uppercase` are **not** validators — they are **transform/setter** options, meaning they modify the value before saving rather than rejecting it. `unique` is also not a true Mongoose validator — it creates a MongoDB index and throws a duplicate key error at the DB level, not during Mongoose validation.

--- 

## Difference match and validate

Yes! You can replace `match` with `validate` and get the same result:

### Using `match` (shorthand)
```js
email: {
  type: String,
  match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
}
```

### Using `validate` (same thing, more explicit)
```js
email: {
  type: String,
  validate: {
    validator: function(v) {
      return /^\S+@\S+\.\S+$/.test(v);
    },
    message: 'Invalid email format'
  }
}
```

---

Both do the **exact same thing**. The difference is:

| | `match` | `validate` |
|---|---|---|
| Syntax | Shorter | More verbose |
| Regex only | ✅ Yes | ✅ Yes |
| Custom logic | ❌ No | ✅ Yes |
| Async support | ❌ No | ✅ Yes |

So the rule is simple:
- Use **`match`** when you just need a regex check — cleaner and less code
- Use **`validate`** when you need logic beyond regex, like checking against a DB or an external API