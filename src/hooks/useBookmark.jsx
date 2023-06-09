import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useBookmark = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    data: bookmark = [],
    refetch,
  } = useQuery({
    queryKey: ["bookmarks", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/bookmarks?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [bookmark, isLoading, refetch];
};
export default useBookmark;
