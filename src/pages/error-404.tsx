import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { ROUTES } from "../constants";

export function Error404Page() {
  const navigate = useNavigate();

  return (
    <div className="grid min-h-[calc(100vh-94px)] place-items-center px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>

        <p className="text-gray-600">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mx-auto h-0.5 w-16 bg-gray-200"></div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={() => navigate(-1)}
            intent="outline"
            className="border-gray-300"
          >
            Go Back
          </Button>

          <Button onClick={() => navigate(`/${ROUTES.ROOT}`)}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
