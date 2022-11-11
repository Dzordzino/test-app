<template>
  <div>
    <textarea
      v-if="inputType === 'textarea'"
      @input="textChanged"
      v-model="text"
      :class="className"
      :placeholder="placeholder"
    ></textarea>
    <input
      v-else
      @input="textChanged"
      v-model="text"
      :class="className"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "ReplayModal",
  props: {
    inputType: {
      type: String,
      default: "input",
    },
    previousText: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      text: "",
    };
  },
  created() {
    if (this.previousText) {
      this.text = this.previousText;
      this.textChanged();
    }
  },
  methods: {
    textChanged: function () {
      this.$emit("textUpdated", this.text);
    },
  },
};
</script>
