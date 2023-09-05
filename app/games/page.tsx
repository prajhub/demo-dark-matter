import GameDisplayTwo from "@/components/gamedisplaytwo";
import GamesDisplay from "@/components/gamesdisplay";
import GamesHere from "@/components/gameshere";
import GamesMain from "@/components/gamesmain";
import UpcomingGames from "@/components/gamesupcoming";

export default function Games() {
    return (
        <>
            <GamesMain/>
            <GamesHere/>
           <GamesDisplay/>
          <GameDisplayTwo/>
          <UpcomingGames/>
            
        </>
    )
}