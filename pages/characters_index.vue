<script>
  export default {
    async asyncData({ $content, params }) {
      const characters = await $content('characters').fetch()
      return {
        characters
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 25px; text-align: center;">Personajes Registrados</h3>
     <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">

       <div v-for="character of characters" :key="character.slug" >
         <NuxtLink style="text-decoration: none;" :to="{ name: 'characters-slug', params: { slug: character.slug } }">
          <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #000000; border-radius: 10px;">
            <p style="text-decoration: none; font-size: 24px; font-weight: 700; text-align: center; color: darkmagenta;">{{ character.name }}</p>
          </div>
         </NuxtLink>
       </div>
     </div>
   <FooterView />
 </div>
</template>