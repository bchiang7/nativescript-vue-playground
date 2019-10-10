<template>
  <Page>
    <ActionBar title="Who's that Pokemon?!">
      <NavigationButton
        @tap="$navigateBack"
        text="Go Back"
        android.systemIcon="ic_menu_back"
      />
    </ActionBar>
    <GridLayout>
      <ListView
        v-if="pokemon"
        for="p in pokemon"
        class="list-group"
      >
        <v-template>
          <StackLayout class="list-group-item">
            <Label :text="p.name" />
          </StackLayout>
        </v-template>
      </ListView>
      <ActivityIndicator v-else :busy="true" />
    </GridLayout>
  </Page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemon: [],
    };
  },
  mounted() {
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
        this.pokemon = pokemon.data.results;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
