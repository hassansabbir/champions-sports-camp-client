import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useStudent = () => {
  const { user } = useContext(AuthContext);
  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/users/student/${user?.email}`,
        {
          method: "GET",
        }
      );
      return response.json();
    },
  });
  return [isStudent, isStudentLoading];
};

export default useStudent;
