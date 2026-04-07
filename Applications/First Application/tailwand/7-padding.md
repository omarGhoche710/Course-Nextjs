`px-4` في **Tailwind CSS** معناها:

```text
padding-left: 1rem
padding-right: 1rem
```

وبما أن:

```text
1rem = 16px
```

فبالتالي:

```text
px-4 = padding-left: 16px
       padding-right: 16px
```

---

## نفكك الاسم

```text
p  = padding
x  = left + right (أفقي)
4  = 1rem = 16px
```

يعني:

```text
px-4 = padding أفقي 16px
```

---

## مثال

```tsx
<div className="px-4">
  Content
</div>
```

هذا يعني:

```css
padding-left: 16px;
padding-right: 16px;
```

---

## للمقارنة السريعة

| Class  | المعنى               | px   |
| ------ | -------------------- | ---- |
| `p-4`  | padding من كل الجهات | 16px |
| `px-4` | padding يمين ويسار   | 16px |
| `py-4` | padding فوق وتحت     | 16px |
| `pt-4` | padding-top          | 16px |
| `pb-4` | padding-bottom       | 16px |
| `pl-4` | padding-left         | 16px |
| `pr-4` | padding-right        | 16px |
