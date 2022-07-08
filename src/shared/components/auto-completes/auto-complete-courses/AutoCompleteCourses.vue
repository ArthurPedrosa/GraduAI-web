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
    :disabled="!locationId && !universityId"
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

  props: {
    itemValue: {
      type: String,
      default: "id",
    },
    itemText: {
      type: String,
      default: "name",
    },
    locationId: {
      type: Number,
      default: 0,
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
    locationId(pValue) {
      if (!pValue) {
        this.dataList = [];
        this.inputValue = undefined;
      }

      this.getCourses();
    },

    universityId(pValue, pPrev) {
      if (pValue && pPrev && pValue !== pPrev) {
        this.dataList = [];
        this.inputValue = undefined;
      }
    },
  },

  mounted() {
    this.getCourses();
  },

  methods: {
    async getCourses() {
      if (!this.locationId) {
        return;
      }

      const [courses] = await GET_COURSES({
        locationId: this.locationId,
      });

      this.dataList = courses;
    },
  },
};
</script>
