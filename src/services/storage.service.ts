class StorageService {

    private storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    setItem<T>(key: string, item: T) {
        this.storage.setItem(key, JSON.stringify(item));
    }

    getItem<T>(key: string): T {
        let itemText = this.storage.getItem(key);
        return itemText ? JSON.parse(itemText) : null;
    }

    removeItem(key: string) {
        this.storage.removeItem(key);
    }
}
export const storageService = new StorageService(localStorage);

export const Keys = {
    PokemonActual: "pokemon.actual",
    PokemonHistory: "pokemon.history",
    PokemonDetails: "pokemon.details",
}