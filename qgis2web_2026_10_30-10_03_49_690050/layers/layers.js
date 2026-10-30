ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5349").setExtent([7400100.744498, 7029321.223319, 7415760.271284, 7038299.499255]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Parcelas301026_1 = new ol.format.GeoJSON();
var features_Parcelas301026_1 = format_Parcelas301026_1.readFeatures(json_Parcelas301026_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5349'});
var jsonSource_Parcelas301026_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelas301026_1.addFeatures(features_Parcelas301026_1);
var lyr_Parcelas301026_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelas301026_1, 
                style: style_Parcelas301026_1,
                popuplayertitle: 'Parcelas 30.10.26',
                interactive: false,
                title: '<img src="styles/legend/Parcelas301026_1.png" /> Parcelas 30.10.26'
            });
var format_Zonarural_2 = new ol.format.GeoJSON();
var features_Zonarural_2 = format_Zonarural_2.readFeatures(json_Zonarural_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5349'});
var jsonSource_Zonarural_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonarural_2.addFeatures(features_Zonarural_2);
var lyr_Zonarural_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonarural_2, 
                style: style_Zonarural_2,
                popuplayertitle: 'Zona rural',
                interactive: true,
                title: '<img src="styles/legend/Zonarural_2.png" /> Zona rural'
            });
var format_Zonasuburbana_3 = new ol.format.GeoJSON();
var features_Zonasuburbana_3 = format_Zonasuburbana_3.readFeatures(json_Zonasuburbana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5349'});
var jsonSource_Zonasuburbana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonasuburbana_3.addFeatures(features_Zonasuburbana_3);
var lyr_Zonasuburbana_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonasuburbana_3, 
                style: style_Zonasuburbana_3,
                popuplayertitle: 'Zona suburbana',
                interactive: true,
                title: '<img src="styles/legend/Zonasuburbana_3.png" /> Zona suburbana'
            });
var format_Zonaurbana_4 = new ol.format.GeoJSON();
var features_Zonaurbana_4 = format_Zonaurbana_4.readFeatures(json_Zonaurbana_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5349'});
var jsonSource_Zonaurbana_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonaurbana_4.addFeatures(features_Zonaurbana_4);
var lyr_Zonaurbana_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonaurbana_4, 
                style: style_Zonaurbana_4,
                popuplayertitle: 'Zona urbana',
                interactive: true,
                title: '<img src="styles/legend/Zonaurbana_4.png" /> Zona urbana'
            });
var lyr_mapaparcela_t_v9_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.servicios.catastro.misiones.gov.ar/geoserver/ows",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mapa:parcelas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'mapa:parcela_t_v9',
                            popuplayertitle: 'mapa:parcela_t_v9',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_mapaparcela_t_v9_5, 0]);
var format_callesmaterialcallematerial_6 = new ol.format.GeoJSON();
var features_callesmaterialcallematerial_6 = format_callesmaterialcallematerial_6.readFeatures(json_callesmaterialcallematerial_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5349'});
var jsonSource_callesmaterialcallematerial_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_callesmaterialcallematerial_6.addFeatures(features_callesmaterialcallematerial_6);
var lyr_callesmaterialcallematerial_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_callesmaterialcallematerial_6, 
                style: style_callesmaterialcallematerial_6,
                popuplayertitle: 'calles+material — calle+material',
                interactive: false,
                title: '<img src="styles/legend/callesmaterialcallematerial_6.png" /> calles+material — calle+material'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Parcelas301026_1.setVisible(true);lyr_Zonarural_2.setVisible(true);lyr_Zonasuburbana_3.setVisible(true);lyr_Zonaurbana_4.setVisible(true);lyr_mapaparcela_t_v9_5.setVisible(true);lyr_callesmaterialcallematerial_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Parcelas301026_1,lyr_Zonarural_2,lyr_Zonasuburbana_3,lyr_Zonaurbana_4,lyr_mapaparcela_t_v9_5,lyr_callesmaterialcallematerial_6];
lyr_Parcelas301026_1.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'cca': 'cca', 'pda': 'pda', 'tpa': 'tpa', 'ara': 'ara', 'nmp': 'nmp', 'sag': 'sag', 'st_length_': 'st_length_', 'etiqueta': 'etiqueta', 'fecha': 'fecha', 'created_at': 'created_at', 'layer': 'layer', 'path': 'path', });
lyr_Zonarural_2.set('fieldAliases', {'cca': 'cca', 'Ord 38/26': 'Ord 38/26', 'Sup min': 'Sup min', 'Tolerancia': 'Tolerancia', });
lyr_Zonasuburbana_3.set('fieldAliases', {'cca': 'cca', 'Ord 38/26': 'Ord 38/26', 'Sup min': 'Sup min', 'Tolerancia': 'Tolerancia', 'Sup max': 'Sup max', 'Frente min': 'Frente min', });
lyr_Zonaurbana_4.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'cca': 'cca', 'Ord 15/25': 'Ord 15/25', 'Ord 38/26': 'Ord 38/26', 'Sup min': 'Sup min', 'Sup max': 'Sup max', 'Frente min': 'Frente min', 'Tolerancia': 'Tolerancia', });
lyr_callesmaterialcallematerial_6.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Material': 'Material', 'Ordenanza': 'Ordenanza', 'Numero': 'Numero', 'Longitud': 'Longitud', 'suma_mat': 'suma_mat', });
lyr_Parcelas301026_1.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'cca': 'TextEdit', 'pda': 'TextEdit', 'tpa': 'TextEdit', 'ara': 'TextEdit', 'nmp': 'TextEdit', 'sag': 'TextEdit', 'st_length_': 'TextEdit', 'etiqueta': 'TextEdit', 'fecha': 'TextEdit', 'created_at': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Zonarural_2.set('fieldImages', {'cca': 'TextEdit', 'Ord 38/26': 'TextEdit', 'Sup min': '', 'Tolerancia': '', });
lyr_Zonasuburbana_3.set('fieldImages', {'cca': 'TextEdit', 'Ord 38/26': 'TextEdit', 'Sup min': 'TextEdit', 'Tolerancia': 'TextEdit', 'Sup max': 'TextEdit', 'Frente min': 'TextEdit', });
lyr_Zonaurbana_4.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'cca': 'TextEdit', 'Ord 15/25': 'TextEdit', 'Ord 38/26': 'TextEdit', 'Sup min': 'TextEdit', 'Sup max': 'TextEdit', 'Frente min': 'TextEdit', 'Tolerancia': 'TextEdit', });
lyr_callesmaterialcallematerial_6.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Material': 'TextEdit', 'Ordenanza': 'TextEdit', 'Numero': 'TextEdit', 'Longitud': 'TextEdit', 'suma_mat': 'TextEdit', });
lyr_Parcelas301026_1.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'cca': 'no label', 'pda': 'no label', 'tpa': 'no label', 'ara': 'no label', 'nmp': 'no label', 'sag': 'no label', 'st_length_': 'no label', 'etiqueta': 'no label', 'fecha': 'no label', 'created_at': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Zonarural_2.set('fieldLabels', {'cca': 'hidden field', 'Ord 38/26': 'header label - visible with data', 'Sup min': 'header label - visible with data', 'Tolerancia': 'header label - visible with data', });
lyr_Zonasuburbana_3.set('fieldLabels', {'cca': 'hidden field', 'Ord 38/26': 'header label - visible with data', 'Sup min': 'header label - visible with data', 'Tolerancia': 'header label - visible with data', 'Sup max': 'header label - visible with data', 'Frente min': 'header label - visible with data', });
lyr_Zonaurbana_4.set('fieldLabels', {'fid': 'hidden field', 'gid': 'hidden field', 'cca': 'hidden field', 'Ord 15/25': 'header label - visible with data', 'Ord 38/26': 'header label - visible with data', 'Sup min': 'header label - visible with data', 'Sup max': 'header label - visible with data', 'Frente min': 'header label - visible with data', 'Tolerancia': 'header label - visible with data', });
lyr_callesmaterialcallematerial_6.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Material': 'no label', 'Ordenanza': 'no label', 'Numero': 'no label', 'Longitud': 'no label', 'suma_mat': 'no label', });
lyr_callesmaterialcallematerial_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});