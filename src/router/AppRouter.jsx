import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { AppTheme } from "../theme";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth)
  if(status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    <AppTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthRoutes />} />

          <Route path="/*" element={<JournalRoutes />} />
        </Routes>
      </BrowserRouter>
    </AppTheme>
  );
};
