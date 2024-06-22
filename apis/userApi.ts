// apis/userApi.ts

const API_URL = 'http://localhost:5000';  // Ganti dengan URL API lokal Anda

export const updateUser = async (userId: string, newData: any) => {
  try {
    const response = await fetch(`${API_URL}/api/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Contoh penggunaan token dari local storage
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error('Update failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};
