// app/pages/index.tsx

import React from 'react'; // Import React from 'react' package
import { useRouter } from 'next/router';
import { Button } from '@mui/material'; // Example import from Material-UI

const IndexPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    // Implement Firebase login functionality
    // Redirect to main page upon successful login
    router.push('/main');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default IndexPage;
