<template>
<b-container>
  <b-card title="Card Title" no-body>
    <b-card-header header-tag="nav">
      <b-nav card-header pills align="center">
        <b-nav-item to="/home/products/" exact exact-active-class="active">LEIA PEENAR</b-nav-item>
        <b-nav-item to="/home/addProduct/" exact exact-active-class="active">KUTSU OMA PEENRALE</b-nav-item>
        <b-nav-item @click="logUserOut" exact exact-active-class="active">LOGI VÄLJA</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body>
      <addProduct/>
    </b-card-body>
  </b-card>
  
</b-container>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode";
import addProduct from '../components/addProduct.vue';
export default {
  components: { addProduct },
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
.active{
    color: darkgreen;
}

</style>