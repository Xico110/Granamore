var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FutureTimberDamsSurfaceTears_1 = new ol.format.GeoJSON();
var features_FutureTimberDamsSurfaceTears_1 = format_FutureTimberDamsSurfaceTears_1.readFeatures(json_FutureTimberDamsSurfaceTears_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureTimberDamsSurfaceTears_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureTimberDamsSurfaceTears_1.addFeatures(features_FutureTimberDamsSurfaceTears_1);
var lyr_FutureTimberDamsSurfaceTears_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureTimberDamsSurfaceTears_1, 
                style: style_FutureTimberDamsSurfaceTears_1,
                popuplayertitle: "Future Timber Dams - Surface Tears",
                interactive: true,
                title: '<img src="styles/legend/FutureTimberDamsSurfaceTears_1.png" /> Future Timber Dams - Surface Tears'
            });
var format_FutureTimberDamsGullies_2 = new ol.format.GeoJSON();
var features_FutureTimberDamsGullies_2 = format_FutureTimberDamsGullies_2.readFeatures(json_FutureTimberDamsGullies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureTimberDamsGullies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureTimberDamsGullies_2.addFeatures(features_FutureTimberDamsGullies_2);
var lyr_FutureTimberDamsGullies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureTimberDamsGullies_2, 
                style: style_FutureTimberDamsGullies_2,
                popuplayertitle: "Future Timber Dams - Gullies",
                interactive: true,
                title: '<img src="styles/legend/FutureTimberDamsGullies_2.png" /> Future Timber Dams - Gullies'
            });
var format_ExistingTimberDams307February2022toSeptember2024_3 = new ol.format.GeoJSON();
var features_ExistingTimberDams307February2022toSeptember2024_3 = format_ExistingTimberDams307February2022toSeptember2024_3.readFeatures(json_ExistingTimberDams307February2022toSeptember2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingTimberDams307February2022toSeptember2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingTimberDams307February2022toSeptember2024_3.addFeatures(features_ExistingTimberDams307February2022toSeptember2024_3);
var lyr_ExistingTimberDams307February2022toSeptember2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingTimberDams307February2022toSeptember2024_3, 
                style: style_ExistingTimberDams307February2022toSeptember2024_3,
                popuplayertitle: "Existing Timber Dams (307) - February 2022 to September 2024",
                interactive: true,
                title: '<img src="styles/legend/ExistingTimberDams307February2022toSeptember2024_3.png" /> Existing Timber Dams (307) - February 2022 to September 2024'
            });
var format_ExistingStoneDams3January2023_4 = new ol.format.GeoJSON();
var features_ExistingStoneDams3January2023_4 = format_ExistingStoneDams3January2023_4.readFeatures(json_ExistingStoneDams3January2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingStoneDams3January2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingStoneDams3January2023_4.addFeatures(features_ExistingStoneDams3January2023_4);
var lyr_ExistingStoneDams3January2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingStoneDams3January2023_4, 
                style: style_ExistingStoneDams3January2023_4,
                popuplayertitle: "Existing Stone Dams (3) - January 2023",
                interactive: true,
                title: '<img src="styles/legend/ExistingStoneDams3January2023_4.png" /> Existing Stone Dams (3) - January 2023'
            });
var format_NewStoneDams25August7th2024_5 = new ol.format.GeoJSON();
var features_NewStoneDams25August7th2024_5 = format_NewStoneDams25August7th2024_5.readFeatures(json_NewStoneDams25August7th2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewStoneDams25August7th2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewStoneDams25August7th2024_5.addFeatures(features_NewStoneDams25August7th2024_5);
var lyr_NewStoneDams25August7th2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewStoneDams25August7th2024_5, 
                style: style_NewStoneDams25August7th2024_5,
                popuplayertitle: "New Stone Dams (25) - August 7th,  2024",
                interactive: true,
                title: '<img src="styles/legend/NewStoneDams25August7th2024_5.png" /> New Stone Dams (25) - August 7th,  2024'
            });
var format_PiezometersandPeatDepths37_6 = new ol.format.GeoJSON();
var features_PiezometersandPeatDepths37_6 = format_PiezometersandPeatDepths37_6.readFeatures(json_PiezometersandPeatDepths37_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiezometersandPeatDepths37_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiezometersandPeatDepths37_6.addFeatures(features_PiezometersandPeatDepths37_6);
var lyr_PiezometersandPeatDepths37_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PiezometersandPeatDepths37_6, 
                style: style_PiezometersandPeatDepths37_6,
                popuplayertitle: "Piezometers and Peat Depths (37)",
                interactive: true,
                title: '<img src="styles/legend/PiezometersandPeatDepths37_6.png" /> Piezometers and Peat Depths (37)'
            });
var format_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7 = new ol.format.GeoJSON();
var features_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7 = format_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.readFeatures(json_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.addFeatures(features_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7);
var lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7, 
                style: style_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7,
                popuplayertitle: "Suspended Solids Sample Points (3 - Bi-annually,  from December 2023)",
                interactive: true,
                title: '<img src="styles/legend/SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.png" /> Suspended Solids Sample Points (3 - Bi-annually,  from December 2023)'
            });
var format_pHSamplePoints3TrimonthlyfromMay2023_8 = new ol.format.GeoJSON();
var features_pHSamplePoints3TrimonthlyfromMay2023_8 = format_pHSamplePoints3TrimonthlyfromMay2023_8.readFeatures(json_pHSamplePoints3TrimonthlyfromMay2023_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pHSamplePoints3TrimonthlyfromMay2023_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pHSamplePoints3TrimonthlyfromMay2023_8.addFeatures(features_pHSamplePoints3TrimonthlyfromMay2023_8);
var lyr_pHSamplePoints3TrimonthlyfromMay2023_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pHSamplePoints3TrimonthlyfromMay2023_8, 
                style: style_pHSamplePoints3TrimonthlyfromMay2023_8,
                popuplayertitle: "pH Sample Points (3 - Tri-monthly,  from May 2023)",
                interactive: true,
                title: '<img src="styles/legend/pHSamplePoints3TrimonthlyfromMay2023_8.png" /> pH Sample Points (3 - Tri-monthly,  from May 2023)'
            });
var format_TreeLocations171_9 = new ol.format.GeoJSON();
var features_TreeLocations171_9 = format_TreeLocations171_9.readFeatures(json_TreeLocations171_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreeLocations171_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreeLocations171_9.addFeatures(features_TreeLocations171_9);
var lyr_TreeLocations171_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreeLocations171_9, 
                style: style_TreeLocations171_9,
                popuplayertitle: "Tree Locations (171)",
                interactive: true,
                title: '<img src="styles/legend/TreeLocations171_9.png" /> Tree Locations (171)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FutureTimberDamsSurfaceTears_1.setVisible(true);lyr_FutureTimberDamsGullies_2.setVisible(true);lyr_ExistingTimberDams307February2022toSeptember2024_3.setVisible(true);lyr_ExistingStoneDams3January2023_4.setVisible(true);lyr_NewStoneDams25August7th2024_5.setVisible(true);lyr_PiezometersandPeatDepths37_6.setVisible(true);lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.setVisible(true);lyr_pHSamplePoints3TrimonthlyfromMay2023_8.setVisible(true);lyr_TreeLocations171_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FutureTimberDamsSurfaceTears_1,lyr_FutureTimberDamsGullies_2,lyr_ExistingTimberDams307February2022toSeptember2024_3,lyr_ExistingStoneDams3January2023_4,lyr_NewStoneDams25August7th2024_5,lyr_PiezometersandPeatDepths37_6,lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7,lyr_pHSamplePoints3TrimonthlyfromMay2023_8,lyr_TreeLocations171_9];
lyr_FutureTimberDamsSurfaceTears_1.set('fieldAliases', {'id': 'id', 'Area (m2)': 'Area (m2)', });
lyr_FutureTimberDamsGullies_2.set('fieldAliases', {'id': 'id', 'Length (m)': 'Length (m)', });
lyr_ExistingTimberDams307February2022toSeptember2024_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'description': 'description', 'Date of Construction': 'Date of Construction', });
lyr_ExistingStoneDams3January2023_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'description': 'description', });
lyr_NewStoneDams25August7th2024_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'description': 'description', });
lyr_PiezometersandPeatDepths37_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Piezometer Name': 'Piezometer Name', 'Peat Depth': 'Peat Depth', 'August Level (cm)': 'August Level (cm)', 'Change from July Level (cm)': 'Change from July Level (cm)', });
lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'Values May 2024 (mg/l)': 'Values May 2024 (mg/l)', });
lyr_pHSamplePoints3TrimonthlyfromMay2023_8.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'Values Aug 24': 'Values Aug 24', });
lyr_TreeLocations171_9.set('fieldAliases', {'id': 'id', });
lyr_FutureTimberDamsSurfaceTears_1.set('fieldImages', {'id': '', 'Area (m2)': '', });
lyr_FutureTimberDamsGullies_2.set('fieldImages', {'id': 'TextEdit', 'Length (m)': '', });
lyr_ExistingTimberDams307February2022toSeptember2024_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Date of Construction': 'TextEdit', });
lyr_ExistingStoneDams3January2023_4.set('fieldImages', {'X': '', 'Y': '', 'name': '', 'description': '', });
lyr_NewStoneDams25August7th2024_5.set('fieldImages', {'X': '', 'Y': '', 'name': '', 'description': '', });
lyr_PiezometersandPeatDepths37_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Piezometer Name': 'TextEdit', 'Peat Depth': 'TextEdit', 'August Level (cm)': 'TextEdit', 'Change from July Level (cm)': 'TextEdit', });
lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'Values May 2024 (mg/l)': 'TextEdit', });
lyr_pHSamplePoints3TrimonthlyfromMay2023_8.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'Values Aug 24': 'TextEdit', });
lyr_TreeLocations171_9.set('fieldImages', {'id': 'TextEdit', });
lyr_FutureTimberDamsSurfaceTears_1.set('fieldLabels', {'id': 'hidden field', 'Area (m2)': 'header label - visible with data', });
lyr_FutureTimberDamsGullies_2.set('fieldLabels', {'id': 'hidden field', 'Length (m)': 'header label - visible with data', });
lyr_ExistingTimberDams307February2022toSeptember2024_3.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'Date of Construction': 'header label - visible with data', });
lyr_ExistingStoneDams3January2023_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', });
lyr_NewStoneDams25August7th2024_5.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', });
lyr_PiezometersandPeatDepths37_6.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Piezometer Name': 'header label - visible with data', 'Peat Depth': 'header label - visible with data', 'August Level (cm)': 'header label - visible with data', 'Change from July Level (cm)': 'header label - visible with data', });
lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_7.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', 'Values May 2024 (mg/l)': 'header label - visible with data', });
lyr_pHSamplePoints3TrimonthlyfromMay2023_8.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'header label - visible with data', 'Values Aug 24': 'header label - visible with data', });
lyr_TreeLocations171_9.set('fieldLabels', {'id': 'hidden field', });
lyr_TreeLocations171_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});