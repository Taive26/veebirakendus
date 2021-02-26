<template>
  <div>
    <b-form @submit="addToDatabase">
      <b-form-group
        id="input-group-1"
        label="Mida sinu juurest korjata saab:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.productName"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Sinu peenramaa ja korjamistingimuste täpsem kirjeldus:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.description"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Sinu peenramaal korjamise hind:"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.price"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Sinu peenramaa asukoht:"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="form.address"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        productName: "",
        description: "",
        price: "",
        address: "",
      },
      // show: true,
    };
  },

  methods: {
    async addToDatabase() {
      let newProduct = {
        productName: this.form.productName,
        description: this.form.description,
        price: this.form.price,
        address: this.form.address,
      };
      axios
        .post(`/api/product`, newProduct)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$swal("Peenar lisatud peenramaale!");
      this.$router.push("/home/products");
    },
  },
};
</script>
<style scoped>
</style>