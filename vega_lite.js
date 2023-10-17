var vg_1 = "empty_data_map.vg.json";
vegaEmbed("#map1", vg_1).then(function(result) {
// Access the Vega view instance https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "scatter_plot_interactive.vg.json";
vegaEmbed("#map1", vg_1).then(function(result) {
// Access the Vega view instance https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);