<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",

  extends: Bar,

  props: {
    chartData: {
      required: true,
      type: Array,
      default: () => [],
    },
    labelChart: {
      type: String,
      default: "Label",
    },
    variableLabelName: {
      required: true,
      type: String,
      default: "",
    },
    variableValueName: {
      required: true,
      type: String,
      default: "",
    },
  },

  mounted() {
    const labels = this.chartData.map((item) => item[this.variableLabelName]);
    const data = this.chartData.map((item) => item[this.variableValueName]);

    this.renderChart(
      {
        labels,
        datasets: [
          {
            label: this.labelChart,
            backgroundColor: "#fcab10",
            data,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  },
};
</script>
