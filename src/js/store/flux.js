const getState = ({ getStore, setStore }) => {
	const API_PEOPLE = "https://www.swapi.tech/api/people/";
	const API_PLANETS = "https://www.swapi.tech/api/planets/";
  
	return {
	  store: {
		favorites: [],
		characters: [],
		planets: [],
		loading: true,
		loadingPlanets: true,
	  },
	  actions: {
		loadCharactersFetch: () => {
		  const store = getStore();
		  if (store.characters.length === 0 && store.loading) {
			setStore({ loading: false });
			for (let i = 1; i <= 10; i++) {
			  fetch(`${API_PEOPLE}${i}`)
				.then((response) => response.json())
				.then((data) =>
				  setStore({
					characters: [
					  ...store.characters,
					  { ...data.result.properties, id: i },
					],
				  })
				);
			}
		  }
		},
  
		loadPlanetsFetch: () => {
		  const store = getStore();
		  if (store.planets.length === 0 && store.loadingPlanets) {
			setStore({ loadingPlanets: false });
			for (let i = 1; i <= 10; i++) {
			  fetch(`${API_PLANETS}${i}`)
				.then((response) => response.json())
				.then((data) =>
				  setStore({
					planets: [
					  ...store.planets,
					  { ...data.result.properties, id: i },
					],
				  })
				);
			}
		  }
		},
  
		addFavoritesCharacter: (theid) => {
		  const store = getStore();
		  store.characters.map((item) => {
			if (
			  item.id === theid &&
			  !store.favorites.find((f) => f.id === theid)
			) {
			  setStore({
				favorites: [...store.favorites, { id: item.id, name: item.name }],
			  });
			}
			return item; // return the mapped element
		  });
		},
  
		addFavoritesPlanet: (theid) => {
		  const store = getStore();
		  store.planets.map((item) => {
			if (
			  item.id === theid &&
			  !store.favorites.find((f) => f.id === theid)
			) {
			  setStore({
				favorites: [...store.favorites, { id: item.id, name: item.name }],
			  });
			}
			return item; // return the mapped element
		  });
		},
  
		deleteFav: (favId) => {
		  const store = getStore();
		  let eliminateFav = store.favorites.filter(
			(element) => element.id !== favId
		  );
		  setStore({ favorites: [...eliminateFav] });
		},
	  },
	};
  };
  
  export default getState;
  

  