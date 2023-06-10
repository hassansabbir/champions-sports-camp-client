import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const { user } = useContext(AuthContext);
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/users/instructor/${user?.email}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
