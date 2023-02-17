import { withLDProvider, captionCounterFlag } from "launchdarkly-react-client-sdk";
import { DataProvider } from "./context/DataContext";
import TableHead from "./components/TableHead";
import TableBody from "./components/TableBody";
import TableFooter from "./components/TableFooter";
import TableCaption from "./components/TableCaption";

const LaunchDarklyPage = () => {
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

const LaunchDarkly = withLDProvider({
  clientSideID: "63c94eb49c832d1263473b58",
  context: {
    "kind": "user",
    "key": "user-key-123abc",
    "name": "Adam Smith",
    "email": "adamsmith@it.campus.com"
  },
  options: { /* ... */ }
})(LaunchDarklyPage);

export default LaunchDarkly
