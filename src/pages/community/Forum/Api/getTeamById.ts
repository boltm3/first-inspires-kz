import useSWR from 'swr';
import { supabase } from '../services/supabaseClient'; // Import the initialized supabase client
import { Team } from './types'; // Import Team type

// SWR fetcher function to fetch team data
const fetcher = async (teamId: number) => {
  const { data, error } = await supabase
    .from('team')  // Fetch from the 'team' table
    .select('*')   // Select all columns
    .eq('team_id', teamId);  // Filter by team_id

  if (error) {
    throw error;  // If there is an error, throw it
  }

  return data;  // Return the fetched data
};

// getTeamById function to fetch team data by team_id using SWR
const getTeamById = (teamId: number) => {
  const { data, error, isValidating } = useSWR<Team[]>(['team', teamId], () => fetcher(teamId));  // Use SWR to fetch data

  return {
    team: data ? data[0] : null,  // Return the first team data (since team_id is unique)
    loading: !data && !error,  // If data is not loaded and there is no error, it's loading
    error: error?.message || null,  // Error message
    isValidating,  // Whether data is being re-validated
  };
};

export default getTeamById;
