import { useParams } from "react-router-dom";
import Menu from "../Components/Menu";
import { getContact } from "../data/items";
import { useMemo } from "react";

export default function Contact() {
  const { contactid } = useParams();

  console.log(contactid);

  const contact = useMemo(() => getContact(contactid), [contactid]);

  if (!contact) {
    throw new Error("Contact does not exist");
  }

  return (
    <>
      <Menu />
      <h1>Contacto {contact.name}</h1>
      <p>{contact.telephone}</p>
      <p>{contact.favorite}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa
        voluptate cupiditate possimus placeat quisquam! Ipsam aliquam
        consectetur dignissimos eligendi ducimus, error culpa autem sapiente
        quibusdam minima. Asperiores, aut voluptatem!
      </p>

      <h2>Formulario de contacto</h2>
    </>
  );
}
