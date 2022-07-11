<template>
  <AutoComplete
    v-model="inputValue"
    :label="label"
    :items="getItems"
    :rules="getRules"
    :width="width"
    :minWidth="minWidth"
    :maxWidth="maxWidth"
    :item-text="itemText"
    :item-value="itemValue"
    :persistent-hint="persistentHint"
    :hint="hint"
    multiple
    @blur="$emit('blur')"
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_EXTRAS from "./actions/getExtras";

export default {
  name: "AutoCompleteExtras",

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
    const [extras] = await GET_EXTRAS();
    this.dataList = extras;
  },
};
</script>
