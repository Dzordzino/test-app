<template>
  <div
    class="w-full px-2 lg:px-6 py-2 flex flex-row justify-between items-center z-1"
  >
    <button
      class="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue"
      @click="goToHome"
    >
      <i class="fab fa-twitter"></i>
    </button>
    <div class="w-1/3 relative">
      <Input
        input-type="input"
        class-name="pl-12 rounded-full w-full p-2 bg-lighter text-sm z-1"
        placeholder="Search for users"
        @textUpdated="serchUsers"
      />
      <ul
        v-if="users.length"
        class="lg:w-full absolute bg-white rounded-lg border-2 top-12"
      >
        <li
          class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none cursor-pointer"
          v-for="user in users"
          :key="user.id"
          @click="showUser(user.username)"
        >
          {{ user.username }}
        </li>
      </ul>
    </div>
    <div>
      <div v-if="user.username" class="flex flex-row">
        <button
          class="h-10 w-20 hover:bg-lightblue rounded-full text-blue border-blue border-2 mr-2"
          @click="logout"
        >
          logout
        </button>
        <img
          class="h-10 w-10 rounded-full"
          src="http://placeimg.com/50/50/any"
          :alt="user.name"
          @click="showUser(user.username)"
        />
      </div>
      <div v-else>
        <button
          class="h-10 w-20 hover:bg-lightblue rounded-full text-blue border-blue border-2 mr-2"
          @click="login"
        >
          Login
        </button>
        <button
          class="h-10 w-20 hover:bg-lightblue rounded-full text-blue border-blue border-2"
          @click="signup"
        >
          Signup
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
export default {
  name: "Header",
  components: {
    Input,
  },
  data() {
    return {
      users: [],
    };
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser();
    },
  },
  methods: {
    login: function () {
      this.$store.dispatch("openModal", {
        type: "login",
        hasDocumentClose: true,
        hasCloseButton: false,
      });
    },
    signup: function () {
      this.$store.dispatch("openModal", {
        type: "signup",
        hasDocumentClose: true,
        hasCloseButton: false,
      });
    },
    logout: function () {
      this.$store.commit("logoutUser");
    },
    serchUsers: function (text) {
      const regex = new RegExp(`[a-zA-Z]*${text}[a-zA-Z]*`),
        allUsers = this.$store.getters.getMembers();

      if (text) {
        this.users = allUsers.filter((item) =>
          regex.test(item.username.toLowerCase())
        );
      } else {
        this.users = "";
      }
    },
    goToHome: function () {
      this.$router.push("/");
    },
    showUser: function (name) {
      this.users = "";
      this.$router.push(name);
    },
  },
};
</script>
