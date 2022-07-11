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
    :hint="hint"
    @blur="$emit('blur')"
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_SEMESTERS from "./actions/getSemesters";

export default {
  name: "AutoCompleteSemesters",

  components: {
    AutoComplete,
  },

  extends: AutoComplete,

  props: {
    itemValue: {
      type: String,
      default: "id",
    },
    itemText: {
      type: String,
      default: "name",
    },
    label: {
      type: String,
      default: "Cotas",
    },
  },

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

  async mounted() {
    const [semesters] = await GET_SEMESTERS();

    this.dataList = semesters;
  },
};
</script>
