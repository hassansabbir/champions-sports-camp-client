import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useBookmark = () => {
  const { user } = useContext(AuthContext);

  const { refetch, data: bookmark = [] } = useQuery({
    queryKey: ["bookmarks", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/bookmarks?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [bookmark, refetch];
};
export default useBookmark;
