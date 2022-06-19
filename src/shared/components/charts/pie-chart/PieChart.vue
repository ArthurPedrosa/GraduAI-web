<script>
import { Pie } from "vue-chartjs";

export default {
  name: "PieChart",

  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ["Graduação", "Evasão"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651"],
            data: [60, 40],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
