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
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_UFS from "./actions/getUfs";

export default {
  name: "AutoCompleteUfs",

  components: {
    AutoComplete,
  },

  extends: AutoComplete,

  props: {
    itemValue: {
      type: String,
      default: "uf_id",
    },
    itemText: {
      type: String,
      default: "uf_name",
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
    const [uf] = await GET_UFS();

    this.dataList = uf;
  },
};
</script>
