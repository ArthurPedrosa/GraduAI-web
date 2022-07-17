<script>
import { Pie } from "vue-chartjs";

export default {
  name: "PieChart",

  extends: Pie,

  props: {
    chartData: {
      required: true,
      type: Array,
      default: () => [],
    },

    variableLabelName: {
      type: String,
      default: "label",
    },

    variableValueName: {
      type: String,
      default: "value",
    },

    variableColorsName: {
      type: String,
      default: "color",
    },
  },

  mounted() {
    const labels = this.chartData.map((item) => item[this.variableLabelName]);
    const data = this.chartData.map((item) => item[this.variableValueName]);
    const colors = this.chartData.map((item) => item[this.variableColorsName]);

    this.renderChart(
      {
        labels: ["Graduação", "Evasão"],
        datasets: [
          {
            labels,
            backgroundColor: colors,
            data,
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
