<template>
  <div>
    <!-- TOODETE TABEL -->
    <b-table striped hover 
    :items="items" 
    :fields="fields">
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "products",
  data() {
    return {
      fields: [
        { key: "productName", label: "Peenralt pakutakse:"},
        { key: "descrition", label: "Täpsem kirjeldus:"},
        { key: "price", label: "Hind:"},
        { key: "address", label: "Peenra asukoht"},
      ],
      items: [],
    };
  },
  async created() {
    const products = await axios({
      url: `api/products`,
      method: `GET`,
      headers: {},
    });
    console.log(products); //selleks, et vaadata, milline info sisse tuleb
    this.items = products.data.allProducts;
  },
  methods: {
 
    },
 
};
</script>