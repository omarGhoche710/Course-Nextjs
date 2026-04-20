# Conditional Routes

Imagine you want to show different content based on whether a user is logged in
or not

You might want to display a dashboard for authenticated users but show a login
page for those who aren't

Conditional routes allow us to achieve this while maintaining completely separate
code on the same URL

- EX:
```js
import React from "react";

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default ComplexDashboardLayout;

```