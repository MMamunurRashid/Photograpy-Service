import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Smile Photography`;
  }, [title]);
};
export default useTitle;
