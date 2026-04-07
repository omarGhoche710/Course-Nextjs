**Note — Status Codes in API**

* لازم نستخدم `status` مع **كل `return`** في الـ API.
* هيدا مهم وضروري نلتزم فيه من هلّق، لأن رح نحتاجه بعدين بالـ frontend والـ error handling.

**أهم Status Codes:**

* `200` → OK
* `201` → Created
* `400` → Bad Request
* `401` → Unauthorized
* `404` → Not Found
* `500` → Internal Server Error

**قاعدة سريعة:**
كل `return NextResponse.json()` لازم يكون معها `{ status: ... }`

---

## Status (use cases):
| العملية            | Status مناسب    | ملاحظات                                       |
| ------------------ | --------------- | --------------------------------------------- |
| GET نجح            | 200             | رجّع البيانات                                 |
| POST تم إنشاء جديد | 201 Created     | optional: Location header للـ resource الجديد |
| PUT / PATCH ناجح   | 200 OK          | رجّع الـ object الجديد أو رسالة               |
| DELETE ناجح        | 200 OK          | أو 204 No Content لو ما بدك ترجع أي body      |
| Resource مش موجود  | 404 Not Found   | سواء تحديث أو حذف                             |
| Input ناقص / خطأ   | 400 Bad Request | validation errors                             |

## Default Status:
=> 200