import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Main } from "./Main";
import { Answer } from "./Answer";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      // <TournamentProvider value={tournamentData}>
      <Main />
      // </TournamentProvider>
    )
  },
  {
    path: "/answer/:code",
    element: (
      // <MatchProvider value={tournamentData.matches[0]}>
      <Answer />
      // </MatchProvider>
    )
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
