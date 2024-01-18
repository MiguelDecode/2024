import { useContext } from "react";
import CrudContext from "../context/CrudContext.jsx";
import CrudForm from "./CrudForm.jsx";
import CrudTable from "./CrudTable.jsx";
import Loader from "./Loader.jsx";
import Message from "./Message.jsx";

const CrudApi = () => {
  const { loading, error, db } = useContext(CrudContext);

  return (
    <div>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
};

export default CrudApi;
