<template lang="">
  <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>
<script>
// import Chart from 'chart.js';

export default {
  /* eslint-disable no-unused-vars */
  props: ['propsdata'],
  mounted() {
    //const ctx = document.getElementById('barChart');

    var myChart = new this.$_Chart(this.$refs.barChart, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        onclick: function () {
          this.$emit('refresh:chart');
        },
      },
    });
  },
};
</script>
<style lang=""></style>
