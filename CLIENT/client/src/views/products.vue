<template>
<b-container>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills align="center">
        <b-nav-item to="/components/products/" exact exact-active-class="active">LEIA PEENAR</b-nav-item>
        <b-nav-item to="/components/addProduct/" exact exact-active-class="active">KUTSU OMA PEENRALE</b-nav-item>
        <b-nav-item @click="logUserOut" exact exact-active-class="active">LOGI VÄLJA</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <products/>
    </b-card-body>
  </b-card>
  
</b-container>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode";
import products from '../components/products.vue';
export default {
  components: { products },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  created() {
    this.getUserDetails();
  }
};
</script>
<style scoped>
a {
  color: #42b983;
}
</style>