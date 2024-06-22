// app/pages/main.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from '../store/actions'; // Adjust path if necessary
import { RootState } from '../store/reducers'; // Adjust path if necessary

const MainPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  // Example function to fetch data
  const fetchData = async () => {
    dispatch(fetchDataRequest());

    try {
      // Replace with actual API endpoint
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };

  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default MainPage;
