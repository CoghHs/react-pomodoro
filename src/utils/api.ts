const BASE_URL = ` https://disney_api.nomadcoders.workers.dev/characters`;

export function fetchCharacters() {
  return fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => data.slice(0, 100));
}

export function fetchCharactersDetail(characterId: number) {
  return fetch(`${BASE_URL}/${characterId}`).then((response) =>
    response.json()
  );
}
