import { withLDProvider, useFlags } from "launchdarkly-react-client-sdk";
import { DataProvider } from "./context/DataContext";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
import TableCaption from "./components/TableCaption";

const App = () => {
  const { captionCounterFlag } = useFlags();
  return (
    <main>
      <DataProvider>
        <table>
          {captionCounterFlag ? (
            <TableCaption captionCounterFlag={captionCounterFlag} />
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

export default withLDProvider({
  clientSideID: "SDK-KEY",
  context: {
    type: "user",
    key: "USER-ID",
    email: "adamsmith@it.campus.com",
  },
})(App);
