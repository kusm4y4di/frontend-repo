// components/UpdateButton.tsx

import React from 'react';
import { updateUser } from '../apis/userApi';
import { Button } from '@mui/material';


const UpdateButton = ({ userId, newData }) => {
  const handleUpdate = async () => {
    try {
      const updatedData = await updateUser(userId, newData);
      console.log('User data updated:', updatedData);
      // Handle success (e.g., update Redux state, show success message)
    } catch (error) {
      console.error('Failed to update user:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleUpdate}>
      Update Data
    </Button>
  );
};

export default UpdateButton;
