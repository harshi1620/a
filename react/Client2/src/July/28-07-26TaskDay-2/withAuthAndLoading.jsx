import React from "react";

// HOC
function withAuthAndLoading(Component) {
  return function ({ isLoggedIn, isLoading }) {
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component />;
  };
}

// Original Component
function Dashboard() {
  return <h2>Welcome to Dashboard</h2>;
}

// Enhanced Component
const DashboardWithAuth = withAuthAndLoading(Dashboard);

export default function App() {
  return (
    <DashboardWithAuth
      isLoading={false}
      isLoggedIn={true}
    />
  );
}