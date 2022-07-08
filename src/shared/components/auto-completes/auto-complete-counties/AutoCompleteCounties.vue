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
    :disabled="!ufId"
    @blur="$emit('blur')"
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_COUNTIES from "./actions/getCounties";

export default {
  name: "AutoCompleteCounties",

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
    ufId: {
      type: Number,
      default: 0,
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

  watch: {
    ufId(pValue) {
      if (!pValue) {
        this.dataList = [];
        this.inputValue = undefined;
      }

      this.getCounties();
    },
  },

  mounted() {
    this.getCounties();
  },

  methods: {
    async getCounties() {
      if (!this.ufId) {
        return;
      }

      const [counties] = await GET_COUNTIES({
        ufId: this.ufId,
      });

      this.dataList = counties;
    },
  },
};
</script>
