<script>
import { Bar } from "vue-chartjs";

export default {
  name: "BarChart",

  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "February",
          "January",
          "March",
          "April",
          "May",
          "June",
          "July",
          "July",
          "July",
          "July",
          "July",
          "July",
          "July",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 32, 40, 39, 44, 40, 40, 40, 40, 40, 40, 40, 40],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
