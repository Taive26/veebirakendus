<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-success p-5"
          style="margin-top:30px;height:auto;padding-top:100px !important;"
          @submit.prevent="registerUser"
        >
          <input
            type="text"
            id="name"
            class="form-control mb-5"
            placeholder="Nimi"
            v-model="register.name"
            required
          />
          <input
            type="email"
            id="email"
            class="form-control mb-5"
            placeholder="Email"
            v-model="register.email"
            required
          />
          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Salasõna"
            v-model="register.password"
          />
          <p>
            Oled juba kasutaja? <router-link to="/"
              >Sisse logima</router-link
            >
            <!-- Sign in button -->
            <center>
              <button class="btn btn-success btn-block w-75 my-4" type="submit">
                Registreeru
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
        try {
        let response = await this.$http.post("/user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          this.$swal("Success", "Registration Was successful", "success");
        } else {
          this.$swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          this.$swal("Error", error.data.message, "error");
        } else {
          this.$swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>