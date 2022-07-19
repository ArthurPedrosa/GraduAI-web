<template>
  <AutoComplete
    v-model="inputValue"
    :label="label"
    :items="getItems"
    :rules="getRules"
    :multiple="multiple"
    :width="width"
    :minWidth="minWidth"
    :maxWidth="maxWidth"
    :item-text="itemText"
    :item-value="itemValue"
    :persistent-hint="persistentHint"
    :disabled="disabled"
    @blur="$emit('blur')"
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_COURSES from "./actions/getCourses";

export default {
  name: "AutoCompleteCourses",

  components: {
    AutoComplete,
  },

  extends: AutoComplete,

  data() {
    return {
      dataList: [],
    };
  },

  computed: {
    getItems() {
      return this.dataList;
    },
  },

  mounted() {
    this.getCourses();
  },

  methods: {
    async getCourses() {
      const courses = await GET_COURSES();

      this.dataList = courses;
    },
  },
};
</script>
