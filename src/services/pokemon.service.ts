import { PokemonListItem, PokemonDetailItem } from "../types/pokemon";
import { requestService } from "./request.service";

class PokemonService {

    async getPokemons(): Promise<PokemonListItem[]> {
        const responseData = await requestService
            .get<GetPokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon`);

        return responseData.results.map(data => ({
            name: data.name,
            url: data.url
        }));
    }

    async getPokemonDetails(url: string): Promise<PokemonDetailItem> {
        const responseData = await requestService
            .get<GetPokemonDetailsApiResponse>(url);

        return {
            id: responseData.id,
            name: responseData.name,
            baseExp: responseData.base_experience,
            height: responseData.height
        };
    }
}
export const pokemonService = new PokemonService();

interface GetPokemonApiResponse {
    count: number;
    next: string;
    results: {
        name: string;
        url: string;
    }[]
}

interface GetPokemonDetailsApiResponse {
    id: number;
    name: string;
    height: number;
    base_experience: number;
}