import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' gap={10}>
                {games.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;