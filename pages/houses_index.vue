<script>
  export default {
    async asyncData({ $content, params }) {
      const houses = await $content('houses').fetch()
      return {
        houses
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 25px; text-align: center;">Casas Registradas</h3>
     <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;">

       <div v-for="house of houses" :key="house.slug" >
         <NuxtLink style="text-decoration: none;" :to="{ name: 'houses-slug', params: { slug: house.slug } }">
          <div style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #000000; border-radius: 10px;">
            <p style="text-decoration: none; font-size: 24px; font-weight: 700; text-align: center; color: darkmagenta;">{{ house.name }}</p>
          </div>
         </NuxtLink>
       </div>
     </div>
   <FooterView />
 </div>
</template>