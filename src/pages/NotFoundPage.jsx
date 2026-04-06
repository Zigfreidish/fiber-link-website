import { Navigate, useParams } from "react-router-dom";

const NotFoundPage = () => {
  const { locale } = useParams();
  return <Navigate to={`/${locale || "en"}`} replace />;
};

export default NotFoundPage;
