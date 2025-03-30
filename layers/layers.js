var wms_layers = [];

var format_Lim_Admin_wilaya2_0 = new ol.format.GeoJSON();
var features_Lim_Admin_wilaya2_0 = format_Lim_Admin_wilaya2_0.readFeatures(json_Lim_Admin_wilaya2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lim_Admin_wilaya2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lim_Admin_wilaya2_0.addFeatures(features_Lim_Admin_wilaya2_0);
var lyr_Lim_Admin_wilaya2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lim_Admin_wilaya2_0, 
                style: style_Lim_Admin_wilaya2_0,
                popuplayertitle: 'Lim_Admin_wilaya (2)',
                interactive: true,
    title: 'Lim_Admin_wilaya (2)<br />\
    <img src="styles/legend/Lim_Admin_wilaya2_0_0.png" /> faible<br />\
    <img src="styles/legend/Lim_Admin_wilaya2_0_1.png" /> modéré<br />\
    <img src="styles/legend/Lim_Admin_wilaya2_0_2.png" /> négligeable<br />\
    <img src="styles/legend/Lim_Admin_wilaya2_0_3.png" /> très faible<br />\
    <img src="styles/legend/Lim_Admin_wilaya2_0_4.png" /> <br />' });

lyr_Lim_Admin_wilaya2_0.setVisible(true);
var layersList = [lyr_Lim_Admin_wilaya2_0];
lyr_Lim_Admin_wilaya2_0.set('fieldAliases', {'NOM_WILAYA': 'NOM_WILAYA', 'region': 'region', 'nbcommWila': 'nbcommWila', 'NIV_RISQUE': 'NIV_RISQUE', });
lyr_Lim_Admin_wilaya2_0.set('fieldImages', {'NOM_WILAYA': 'TextEdit', 'region': 'TextEdit', 'nbcommWila': 'Range', 'NIV_RISQUE': 'TextEdit', });
lyr_Lim_Admin_wilaya2_0.set('fieldLabels', {'NOM_WILAYA': 'no label', 'region': 'no label', 'nbcommWila': 'no label', 'NIV_RISQUE': 'no label', });
lyr_Lim_Admin_wilaya2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});