import dynamic from "next/dynamic";
//Dynamic imports are fetched when the component is rendered for the first time.
const Pokegame = dynamic(() => import("../components/Pokegame"), { ssr: false });

function Index() {
  return (
    <div>
      <Pokegame/>
    </div>
  )
}

export default Index;