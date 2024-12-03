var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ExistingTimberDams510February2022toNovember2024_1 = new ol.format.GeoJSON();
var features_ExistingTimberDams510February2022toNovember2024_1 = format_ExistingTimberDams510February2022toNovember2024_1.readFeatures(json_ExistingTimberDams510February2022toNovember2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingTimberDams510February2022toNovember2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingTimberDams510February2022toNovember2024_1.addFeatures(features_ExistingTimberDams510February2022toNovember2024_1);
var lyr_ExistingTimberDams510February2022toNovember2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingTimberDams510February2022toNovember2024_1, 
                style: style_ExistingTimberDams510February2022toNovember2024_1,
                popuplayertitle: "Existing Timber Dams (510) - February 2022 to November 2024",
                interactive: true,
                title: '<img src="styles/legend/ExistingTimberDams510February2022toNovember2024_1.png" /> Existing Timber Dams (510) - February 2022 to November 2024'
            });
var format_ExistingStoneDams3January2023_2 = new ol.format.GeoJSON();
var features_ExistingStoneDams3January2023_2 = format_ExistingStoneDams3January2023_2.readFeatures(json_ExistingStoneDams3January2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExistingStoneDams3January2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExistingStoneDams3January2023_2.addFeatures(features_ExistingStoneDams3January2023_2);
var lyr_ExistingStoneDams3January2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExistingStoneDams3January2023_2, 
                style: style_ExistingStoneDams3January2023_2,
                popuplayertitle: "Existing Stone Dams (3) - January 2023",
                interactive: true,
                title: '<img src="styles/legend/ExistingStoneDams3January2023_2.png" /> Existing Stone Dams (3) - January 2023'
            });
var format_NewStoneDams25August7th2024_3 = new ol.format.GeoJSON();
var features_NewStoneDams25August7th2024_3 = format_NewStoneDams25August7th2024_3.readFeatures(json_NewStoneDams25August7th2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewStoneDams25August7th2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewStoneDams25August7th2024_3.addFeatures(features_NewStoneDams25August7th2024_3);
var lyr_NewStoneDams25August7th2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewStoneDams25August7th2024_3, 
                style: style_NewStoneDams25August7th2024_3,
                popuplayertitle: "New Stone Dams (25) - August 7th,  2024",
                interactive: true,
                title: '<img src="styles/legend/NewStoneDams25August7th2024_3.png" /> New Stone Dams (25) - August 7th,  2024'
            });
var format_pHSamplePoints3TrimonthlyfromMay2023_4 = new ol.format.GeoJSON();
var features_pHSamplePoints3TrimonthlyfromMay2023_4 = format_pHSamplePoints3TrimonthlyfromMay2023_4.readFeatures(json_pHSamplePoints3TrimonthlyfromMay2023_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pHSamplePoints3TrimonthlyfromMay2023_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pHSamplePoints3TrimonthlyfromMay2023_4.addFeatures(features_pHSamplePoints3TrimonthlyfromMay2023_4);
var lyr_pHSamplePoints3TrimonthlyfromMay2023_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pHSamplePoints3TrimonthlyfromMay2023_4, 
                style: style_pHSamplePoints3TrimonthlyfromMay2023_4,
                popuplayertitle: "pH Sample Points (3 - Tri-monthly,  from May 2023)",
                interactive: true,
                title: '<img src="styles/legend/pHSamplePoints3TrimonthlyfromMay2023_4.png" /> pH Sample Points (3 - Tri-monthly,  from May 2023)'
            });
var format_PiezometersandPeatDepths37_5 = new ol.format.GeoJSON();
var features_PiezometersandPeatDepths37_5 = format_PiezometersandPeatDepths37_5.readFeatures(json_PiezometersandPeatDepths37_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PiezometersandPeatDepths37_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PiezometersandPeatDepths37_5.addFeatures(features_PiezometersandPeatDepths37_5);
var lyr_PiezometersandPeatDepths37_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PiezometersandPeatDepths37_5, 
                style: style_PiezometersandPeatDepths37_5,
                popuplayertitle: "Piezometers and Peat Depths (37)",
                interactive: true,
                title: '<img src="styles/legend/PiezometersandPeatDepths37_5.png" /> Piezometers and Peat Depths (37)'
            });
var format_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6 = new ol.format.GeoJSON();
var features_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6 = format_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.readFeatures(json_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.addFeatures(features_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6);
var lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6, 
                style: style_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6,
                popuplayertitle: "Suspended Solids Sample Points (3 - Bi-annually,  from December 2023)",
                interactive: true,
                title: '<img src="styles/legend/SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.png" /> Suspended Solids Sample Points (3 - Bi-annually,  from December 2023)'
            });
var format_TreePlantingLocations171_7 = new ol.format.GeoJSON();
var features_TreePlantingLocations171_7 = format_TreePlantingLocations171_7.readFeatures(json_TreePlantingLocations171_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TreePlantingLocations171_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TreePlantingLocations171_7.addFeatures(features_TreePlantingLocations171_7);
var lyr_TreePlantingLocations171_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TreePlantingLocations171_7, 
                style: style_TreePlantingLocations171_7,
                popuplayertitle: "Tree Planting Locations (171)",
                interactive: true,
                title: '<img src="styles/legend/TreePlantingLocations171_7.png" /> Tree Planting Locations (171)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ExistingTimberDams510February2022toNovember2024_1.setVisible(true);lyr_ExistingStoneDams3January2023_2.setVisible(true);lyr_NewStoneDams25August7th2024_3.setVisible(true);lyr_pHSamplePoints3TrimonthlyfromMay2023_4.setVisible(true);lyr_PiezometersandPeatDepths37_5.setVisible(true);lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.setVisible(true);lyr_TreePlantingLocations171_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ExistingTimberDams510February2022toNovember2024_1,lyr_ExistingStoneDams3January2023_2,lyr_NewStoneDams25August7th2024_3,lyr_pHSamplePoints3TrimonthlyfromMay2023_4,lyr_PiezometersandPeatDepths37_5,lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6,lyr_TreePlantingLocations171_7];
lyr_ExistingTimberDams510February2022toNovember2024_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'description': 'description', 'Date of Construction': 'Date of Construction', });
lyr_ExistingStoneDams3January2023_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'description': 'description', });
lyr_NewStoneDams25August7th2024_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'description': 'description', });
lyr_pHSamplePoints3TrimonthlyfromMay2023_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'Values Aug 24': 'Values Aug 24', });
lyr_PiezometersandPeatDepths37_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Piezometer Name': 'Piezometer Name', 'Peat Depth': 'Peat Depth', 'December Level (cm)': 'December Level (cm)', 'Change from October Measurement (cm)': 'Change from October Measurement (cm)', });
lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'name': 'name', 'Values May 2024 (mg/l)': 'Values May 2024 (mg/l)', });
lyr_TreePlantingLocations171_7.set('fieldAliases', {'id': 'id', });
lyr_ExistingTimberDams510February2022toNovember2024_1.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Date of Construction': 'TextEdit', });
lyr_ExistingStoneDams3January2023_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', });
lyr_NewStoneDams25August7th2024_3.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', });
lyr_pHSamplePoints3TrimonthlyfromMay2023_4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'Values Aug 24': 'TextEdit', });
lyr_PiezometersandPeatDepths37_5.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Piezometer Name': 'TextEdit', 'Peat Depth': 'TextEdit', 'December Level (cm)': '', 'Change from October Measurement (cm)': '', });
lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'name': 'TextEdit', 'Values May 2024 (mg/l)': 'TextEdit', });
lyr_TreePlantingLocations171_7.set('fieldImages', {'id': 'TextEdit', });
lyr_ExistingTimberDams510February2022toNovember2024_1.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'Date of Construction': 'inline label - visible with data', });
lyr_ExistingStoneDams3January2023_2.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_NewStoneDams25August7th2024_3.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', 'description': 'inline label - visible with data', });
lyr_pHSamplePoints3TrimonthlyfromMay2023_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', 'Values Aug 24': 'inline label - visible with data', });
lyr_PiezometersandPeatDepths37_5.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Piezometer Name': 'inline label - visible with data', 'Peat Depth': 'inline label - visible with data', 'December Level (cm)': 'inline label - visible with data', 'Change from October Measurement (cm)': 'inline label - visible with data', });
lyr_SuspendedSolidsSamplePoints3BiannuallyfromDecember2023_6.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'name': 'inline label - visible with data', 'Values May 2024 (mg/l)': 'inline label - visible with data', });
lyr_TreePlantingLocations171_7.set('fieldLabels', {'id': 'hidden field', });
lyr_TreePlantingLocations171_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});