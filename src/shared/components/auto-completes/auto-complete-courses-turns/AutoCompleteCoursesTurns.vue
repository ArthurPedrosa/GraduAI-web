<template>
  <AutoComplete
    v-model="inputValue"
    :label="label"
    :items="getItems"
    :rules="getRules"
    :multiple="multiple"
    :width="width"
    :disabled="!courseId"
    :minWidth="minWidth"
    :maxWidth="maxWidth"
    :item-text="itemText"
    :item-value="itemValue"
    :persistent-hint="persistentHint"
    @blur="$emit('blur')"
  />
</template>

<script>
import AutoComplete from "../auto-complete/AutoComplete.vue";
import GET_TURNS from "./actions/getTurns";

export default {
  name: "AutoCompleteCoursesTurns",

  components: {
    AutoComplete,
  },

  extends: AutoComplete,

  props: {
    itemValue: {
      type: String,
      default: "value",
    },
    itemText: {
      type: String,
      default: "name",
    },
    universityId: {
      type: Number,
      default: 0,
    },
    locationId: {
      type: Number,
      default: 0,
    },
    courseId: {
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
    courseId(pValue) {
      if (!pValue) {
        this.dataList = [];
        this.inputValue = undefined;
      }

      this.getTurns();
    },

    locationId(pValue, pPrev) {
      if (pValue && pPrev && pValue !== pPrev) {
        this.dataList = [];
        this.inputValue = undefined;
      }
    },

    universityId(pValue, pPrev) {
      if (pValue && pPrev && pValue !== pPrev) {
        this.dataList = [];
        this.inputValue = undefined;
      }
    },
  },

  mounted() {
    this.getTurns();
  },

  methods: {
    async getTurns() {
      if (!this.courseId) {
        return;
      }

      const [turns] = await GET_TURNS({ courseId: this.courseId });

      if (typeof turns === "object") {
        this.dataList = [turns];
      } else {
        this.dataList = turns;
      }
    },
  },
};
</script>
