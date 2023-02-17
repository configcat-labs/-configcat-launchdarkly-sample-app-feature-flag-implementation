import { useFeatureFlag } from "configcat-react";
import { DataProvider } from "./context/DataContext";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
import TableCaption from "./components/TableCaption";

const App = () => {
  const { value: captioncounterflagValue } = useFeatureFlag(
    "captioncounterflag",
    false,
    { identifier: "USER-ID", email: "adamsmith@it.campus.com" }
  );

  return (
    <main>
      <DataProvider>
        <table>
          {captioncounterflagValue ? (
            <TableCaption />
          ) : (
            <caption>Student Record</caption>
          )}
          <TableHead />
          <TableBody />
          <TableFooter />
        </table>
      </DataProvider>
    </main>
  );
};

export default App;