## **307 Temporary Redirect & Deprecation Period — Short Note**

### **307 Temporary Redirect**

**307 Temporary Redirect** means:
The resource is temporarily moved to another URL, and the client must repeat the request using the **same HTTP method and body**.

**Key Points**

* Temporary redirect
* Keeps the same method (POST stays POST)
* Commonly used when moving from an old API version to a new one

**Example**

```http
POST /api/v1/users
```

Response:

```http
Status: 307 Temporary Redirect
Location: /api/v2/users
```

Client automatically sends:

```http
POST /api/v2/users
```

---

### **Deprecation Period**

**Deprecation period** is the time during which an old API version is still available but marked as outdated, giving clients time to migrate to the new version.

**Key Points**

* Old version still works
* Developers are warned to migrate
* After the period ends, the old version may be removed

**Typical Flow**

```text
v1 released
   ↓
v2 released
   ↓
v1 marked as deprecated (Deprecation Period)
   ↓
v1 removed (Sunset)
```
