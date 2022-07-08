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
    :disabled="!universityId"
    @blur="$emit('blur')"
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_LOCATIONS from "./actions/getLocations";

export default {
  name: "AutoCompleteLocations",

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
    universityId: {
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
    universityId(pValue) {
      if (!pValue) {
        this.dataList = [];
        this.inputValue = undefined;
      }

      this.getLocations();
    },
  },

  mounted() {
    this.getLocations();
  },

  methods: {
    async getLocations() {
      if (!this.universityId) {
        return;
      }

      const [locations] = await GET_LOCATIONS({
        universityId: this.universityId,
      });

      this.dataList = locations;
    },
  },
};
</script>
