<template>
  <div class="px-2 lg:px-8 p-4 bg-white rounded-lg">
    <p class="text-3xl text-center m-6">Signup</p>
    <Input
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-4"
      input-type="input"
      @textUpdated="updateName"
      placeholder="Enter name"
    />
    <Input
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-4"
      input-type="input"
      @textUpdated="updateEmail"
      placeholder="Enter email"
    />
    <Input
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-4"
      input-type="input"
      @textUpdated="updateUsername"
      placeholder="Enter username"
    />
    <Input
      class-name="pl-4 w-full rounded-full p-2 bg-lighter flex-column text-sm mb-8"
      input-type="input"
      @textUpdated="updatePassword"
      placeholder="Enter password"
    />
    <button
      class="h-12 w-40 text-2xl hover:bg-lightblue rounded-full text-blue border-blue border-2 p-1 px-10 flex m-auto text-center"
      @click="signup"
    >
      Signup
    </button>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
  name: "LoginModal",
  components: {
    Input,
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    updateName: function (name) {
      this.name = name;
    },
    updateEmail: function (email) {
      this.email = email;
    },
    updateUsername: function (username) {
      this.username = username;
    },
    updatePassword: function (password) {
      this.password = password;
    },
    signup: async function () {
      const res = await this.$store.dispatch("signup", {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password,
      });
      console.log(res);
    },
  },
};
</script>
