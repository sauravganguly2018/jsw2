// useFetchData.js
import { useQuery } from '@tanstack/react-query';

export const getProcesses = async()=>{
    const res= await fetch("http://localhost:9001/processes");
    if (!res.ok) {
        throw new Error('Network response was not ok');
      }
    const data = await res.json();
    return data;
}

export const useGetProcesses=()=>{
    return useQuery({
        queryKey: ['processes'],
        queryFn: getProcesses,
        staleTime: 60000, // 1 minute
        cacheTime: 300000, // 5 minutes
      });
}