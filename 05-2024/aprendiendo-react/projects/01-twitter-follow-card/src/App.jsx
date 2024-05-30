import TwitterFollowCard from "./components/TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
];

const App = () => {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>

      <TwitterFollowCard userName="pheralb" isFollowing>
        Pablo Heraldo
      </TwitterFollowCard>

      {users.map((user, index) => (
        <TwitterFollowCard key={index} userName={user.userName}>
          {user.name}
        </TwitterFollowCard>
      ))}
    </section>
  );
};

export default App;

