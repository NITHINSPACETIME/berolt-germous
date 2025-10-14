import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Nithin";
  return (
    <main>
      <h1> Collect customer feedback to build better products </h1>
      <div>the subsection of the customer feedback section</div>
      <ButtonLogin isLoggedIn={isLoggedIn}  name={name}/>
    </main>
  );
}
