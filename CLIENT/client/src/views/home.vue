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
      <h3>Oled jõudnud virtuaalsele peenramaale.</h3>
      <h3>Sul on peenral palju maasikaid, ise ei jõua neid ära süüa või korjata? Sul on tagaaias õunauputus?</h3>
      <h3>Kutsu enda peenrale korjama!</h3>
      <h3>Sooviksid oma kätega endale moosimarju korjata? Unistad, et värske toidukraam oleks pärit võimalikult kodu lähedalt?</h3>
      <h3>Leia endale sobiv peenar!</h3>
      <router-view/>
    </b-card-body>
  </b-card>
  
</b-container>
</template>


<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
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
h3 {
  margin: 40px 0 0;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20pt;
  color: darkgreen;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>