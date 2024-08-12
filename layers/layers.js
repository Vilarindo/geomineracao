ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-49.721095, -11.300135, -33.335879, -1.768489]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map Google Satellite</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_2 = new ol.format.GeoJSON();
var features_Municipios_2 = format_Municipios_2.readFeatures(json_Municipios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Municipios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_2.addFeatures(features_Municipios_2);
var lyr_Municipios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_2, 
                style: style_Municipios_2,
                popuplayertitle: "Municipios",
                interactive: true,
                title: '<img src="styles/legend/Municipios_2.png" /> Municipios'
            });
var format_readeaplicaodaLeideMataAtlnticaPI_3 = new ol.format.GeoJSON();
var features_readeaplicaodaLeideMataAtlnticaPI_3 = format_readeaplicaodaLeideMataAtlnticaPI_3.readFeatures(json_readeaplicaodaLeideMataAtlnticaPI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_readeaplicaodaLeideMataAtlnticaPI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeaplicaodaLeideMataAtlnticaPI_3.addFeatures(features_readeaplicaodaLeideMataAtlnticaPI_3);
var lyr_readeaplicaodaLeideMataAtlnticaPI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readeaplicaodaLeideMataAtlnticaPI_3, 
                style: style_readeaplicaodaLeideMataAtlnticaPI_3,
                popuplayertitle: "Área de aplicação da Lei de Mata Atlântica-PI",
                interactive: true,
                title: '<img src="styles/legend/readeaplicaodaLeideMataAtlnticaPI_3.png" /> Área de aplicação da Lei de Mata Atlântica-PI'
            });
var format_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = new ol.format.GeoJSON();
var features_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = format_CorredorEcolgicoConfusesSerradaCapivaraPI_4.readFeatures(json_CorredorEcolgicoConfusesSerradaCapivaraPI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorEcolgicoConfusesSerradaCapivaraPI_4.addFeatures(features_CorredorEcolgicoConfusesSerradaCapivaraPI_4);
var lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorEcolgicoConfusesSerradaCapivaraPI_4, 
                style: style_CorredorEcolgicoConfusesSerradaCapivaraPI_4,
                popuplayertitle: "Corredor Ecológico - Confusões Serra da Capivara-PI",
                interactive: true,
                title: '<img src="styles/legend/CorredorEcolgicoConfusesSerradaCapivaraPI_4.png" /> Corredor Ecológico - Confusões Serra da Capivara-PI'
            });
var format_UnidadesdeConservaoEstadualPI_5 = new ol.format.GeoJSON();
var features_UnidadesdeConservaoEstadualPI_5 = format_UnidadesdeConservaoEstadualPI_5.readFeatures(json_UnidadesdeConservaoEstadualPI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UnidadesdeConservaoEstadualPI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaoEstadualPI_5.addFeatures(features_UnidadesdeConservaoEstadualPI_5);
var lyr_UnidadesdeConservaoEstadualPI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaoEstadualPI_5, 
                style: style_UnidadesdeConservaoEstadualPI_5,
                popuplayertitle: "Unidades de Conservação Estadual-PI",
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservaoEstadualPI_5.png" /> Unidades de Conservação Estadual-PI'
            });
var format_UnidadesdeConservaoFederalPIICMBIO2023_6 = new ol.format.GeoJSON();
var features_UnidadesdeConservaoFederalPIICMBIO2023_6 = format_UnidadesdeConservaoFederalPIICMBIO2023_6.readFeatures(json_UnidadesdeConservaoFederalPIICMBIO2023_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_UnidadesdeConservaoFederalPIICMBIO2023_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservaoFederalPIICMBIO2023_6.addFeatures(features_UnidadesdeConservaoFederalPIICMBIO2023_6);
var lyr_UnidadesdeConservaoFederalPIICMBIO2023_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservaoFederalPIICMBIO2023_6, 
                style: style_UnidadesdeConservaoFederalPIICMBIO2023_6,
                popuplayertitle: "Unidades de Conservação Federal-PI (ICMBIO 2023)",
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservaoFederalPIICMBIO2023_6.png" /> Unidades de Conservação Federal-PI (ICMBIO 2023)'
            });
var format_ZonadeAmortecimentodasUCsPI3Km_7 = new ol.format.GeoJSON();
var features_ZonadeAmortecimentodasUCsPI3Km_7 = format_ZonadeAmortecimentodasUCsPI3Km_7.readFeatures(json_ZonadeAmortecimentodasUCsPI3Km_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ZonadeAmortecimentodasUCsPI3Km_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeAmortecimentodasUCsPI3Km_7.addFeatures(features_ZonadeAmortecimentodasUCsPI3Km_7);
var lyr_ZonadeAmortecimentodasUCsPI3Km_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeAmortecimentodasUCsPI3Km_7, 
                style: style_ZonadeAmortecimentodasUCsPI3Km_7,
                popuplayertitle: "Zona de Amortecimento das UC`s-PI - 3Km",
                interactive: true,
                title: '<img src="styles/legend/ZonadeAmortecimentodasUCsPI3Km_7.png" /> Zona de Amortecimento das UC`s-PI - 3Km'
            });
var format_Processosminerrios_8 = new ol.format.GeoJSON();
var features_Processosminerrios_8 = format_Processosminerrios_8.readFeatures(json_Processosminerrios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Processosminerrios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Processosminerrios_8.addFeatures(features_Processosminerrios_8);
var lyr_Processosminerrios_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Processosminerrios_8, 
                style: style_Processosminerrios_8,
                popuplayertitle: "Processos minerários",
                interactive: true,
                title: '<img src="styles/legend/Processosminerrios_8.png" /> Processos minerários'
            });
var format_GUAMINERALALCBICGUAMINERALALC_9 = new ol.format.GeoJSON();
var features_GUAMINERALALCBICGUAMINERALALC_9 = format_GUAMINERALALCBICGUAMINERALALC_9.readFeatures(json_GUAMINERALALCBICGUAMINERALALC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAMINERALALCBICGUAMINERALALC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAMINERALALCBICGUAMINERALALC_9.addFeatures(features_GUAMINERALALCBICGUAMINERALALC_9);
var lyr_GUAMINERALALCBICGUAMINERALALC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAMINERALALCBICGUAMINERALALC_9, 
                style: style_GUAMINERALALCBICGUAMINERALALC_9,
                popuplayertitle: "ÁGUA MINERAL ALC. BIC — ÁGUA MINERAL ALC",
                interactive: true,
                title: '<img src="styles/legend/GUAMINERALALCBICGUAMINERALALC_9.png" /> ÁGUA MINERAL ALC. BIC — ÁGUA MINERAL ALC'
            });
var format_GUAMINERALCARBOGAS_10 = new ol.format.GeoJSON();
var features_GUAMINERALCARBOGAS_10 = format_GUAMINERALCARBOGAS_10.readFeatures(json_GUAMINERALCARBOGAS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAMINERALCARBOGAS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAMINERALCARBOGAS_10.addFeatures(features_GUAMINERALCARBOGAS_10);
var lyr_GUAMINERALCARBOGAS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAMINERALCARBOGAS_10, 
                style: style_GUAMINERALCARBOGAS_10,
                popuplayertitle: "ÁGUA MINERAL CARBOGAS",
                interactive: true,
                title: '<img src="styles/legend/GUAMINERALCARBOGAS_10.png" /> ÁGUA MINERAL CARBOGAS'
            });
var format_GUAMINERAL_11 = new ol.format.GeoJSON();
var features_GUAMINERAL_11 = format_GUAMINERAL_11.readFeatures(json_GUAMINERAL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAMINERAL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAMINERAL_11.addFeatures(features_GUAMINERAL_11);
var lyr_GUAMINERAL_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAMINERAL_11, 
                style: style_GUAMINERAL_11,
                popuplayertitle: "ÁGUA MINERAL",
                interactive: true,
                title: '<img src="styles/legend/GUAMINERAL_11.png" /> ÁGUA MINERAL'
            });
var format_GUAPOTVELDEMESA_12 = new ol.format.GeoJSON();
var features_GUAPOTVELDEMESA_12 = format_GUAPOTVELDEMESA_12.readFeatures(json_GUAPOTVELDEMESA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAPOTVELDEMESA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAPOTVELDEMESA_12.addFeatures(features_GUAPOTVELDEMESA_12);
var lyr_GUAPOTVELDEMESA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAPOTVELDEMESA_12, 
                style: style_GUAPOTVELDEMESA_12,
                popuplayertitle: "ÁGUA POTÁVEL DE MESA",
                interactive: true,
                title: '<img src="styles/legend/GUAPOTVELDEMESA_12.png" /> ÁGUA POTÁVEL DE MESA'
            });
var format_AMETISTA_13 = new ol.format.GeoJSON();
var features_AMETISTA_13 = format_AMETISTA_13.readFeatures(json_AMETISTA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AMETISTA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMETISTA_13.addFeatures(features_AMETISTA_13);
var lyr_AMETISTA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMETISTA_13, 
                style: style_AMETISTA_13,
                popuplayertitle: "AMETISTA",
                interactive: true,
                title: '<img src="styles/legend/AMETISTA_13.png" /> AMETISTA'
            });
var format_ANFIBOLITO_14 = new ol.format.GeoJSON();
var features_ANFIBOLITO_14 = format_ANFIBOLITO_14.readFeatures(json_ANFIBOLITO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ANFIBOLITO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANFIBOLITO_14.addFeatures(features_ANFIBOLITO_14);
var lyr_ANFIBOLITO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANFIBOLITO_14, 
                style: style_ANFIBOLITO_14,
                popuplayertitle: "ANFIBOLITO",
                interactive: true,
                title: '<img src="styles/legend/ANFIBOLITO_14.png" /> ANFIBOLITO'
            });
var format_ARDSIA_15 = new ol.format.GeoJSON();
var features_ARDSIA_15 = format_ARDSIA_15.readFeatures(json_ARDSIA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARDSIA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARDSIA_15.addFeatures(features_ARDSIA_15);
var lyr_ARDSIA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARDSIA_15, 
                style: style_ARDSIA_15,
                popuplayertitle: "ARDÓSIA",
                interactive: true,
                title: '<img src="styles/legend/ARDSIA_15.png" /> ARDÓSIA'
            });
var format_AREIA_16 = new ol.format.GeoJSON();
var features_AREIA_16 = format_AREIA_16.readFeatures(json_AREIA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AREIA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREIA_16.addFeatures(features_AREIA_16);
var lyr_AREIA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREIA_16, 
                style: style_AREIA_16,
                popuplayertitle: "AREIA",
                interactive: true,
                title: '<img src="styles/legend/AREIA_16.png" /> AREIA'
            });
var format_ARENITO_17 = new ol.format.GeoJSON();
var features_ARENITO_17 = format_ARENITO_17.readFeatures(json_ARENITO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARENITO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENITO_17.addFeatures(features_ARENITO_17);
var lyr_ARENITO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARENITO_17, 
                style: style_ARENITO_17,
                popuplayertitle: "ARENITO",
                interactive: true,
                title: '<img src="styles/legend/ARENITO_17.png" /> ARENITO'
            });
var format_ARGILAREFRATRIA_18 = new ol.format.GeoJSON();
var features_ARGILAREFRATRIA_18 = format_ARGILAREFRATRIA_18.readFeatures(json_ARGILAREFRATRIA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILAREFRATRIA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILAREFRATRIA_18.addFeatures(features_ARGILAREFRATRIA_18);
var lyr_ARGILAREFRATRIA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILAREFRATRIA_18, 
                style: style_ARGILAREFRATRIA_18,
                popuplayertitle: "ARGILA REFRATÁRIA",
                interactive: true,
                title: '<img src="styles/legend/ARGILAREFRATRIA_18.png" /> ARGILA REFRATÁRIA'
            });
var format_ARGILA_19 = new ol.format.GeoJSON();
var features_ARGILA_19 = format_ARGILA_19.readFeatures(json_ARGILA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILA_19.addFeatures(features_ARGILA_19);
var lyr_ARGILA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILA_19, 
                style: style_ARGILA_19,
                popuplayertitle: "ARGILA",
                interactive: true,
                title: '<img src="styles/legend/ARGILA_19.png" /> ARGILA'
            });
var format_ARGILITO_20 = new ol.format.GeoJSON();
var features_ARGILITO_20 = format_ARGILITO_20.readFeatures(json_ARGILITO_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILITO_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILITO_20.addFeatures(features_ARGILITO_20);
var lyr_ARGILITO_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILITO_20, 
                style: style_ARGILITO_20,
                popuplayertitle: "ARGILITO",
                interactive: true,
                title: '<img src="styles/legend/ARGILITO_20.png" /> ARGILITO'
            });
var format_ATAPULGITA_21 = new ol.format.GeoJSON();
var features_ATAPULGITA_21 = format_ATAPULGITA_21.readFeatures(json_ATAPULGITA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ATAPULGITA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATAPULGITA_21.addFeatures(features_ATAPULGITA_21);
var lyr_ATAPULGITA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATAPULGITA_21, 
                style: style_ATAPULGITA_21,
                popuplayertitle: "ATAPULGITA",
                interactive: true,
                title: '<img src="styles/legend/ATAPULGITA_21.png" /> ATAPULGITA'
            });
var format_BASALTO_22 = new ol.format.GeoJSON();
var features_BASALTO_22 = format_BASALTO_22.readFeatures(json_BASALTO_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_BASALTO_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASALTO_22.addFeatures(features_BASALTO_22);
var lyr_BASALTO_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASALTO_22, 
                style: style_BASALTO_22,
                popuplayertitle: "BASALTO",
                interactive: true,
                title: '<img src="styles/legend/BASALTO_22.png" /> BASALTO'
            });
var format_CALCRIOCALCTICO_23 = new ol.format.GeoJSON();
var features_CALCRIOCALCTICO_23 = format_CALCRIOCALCTICO_23.readFeatures(json_CALCRIOCALCTICO_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCRIOCALCTICO_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCRIOCALCTICO_23.addFeatures(features_CALCRIOCALCTICO_23);
var lyr_CALCRIOCALCTICO_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCRIOCALCTICO_23, 
                style: style_CALCRIOCALCTICO_23,
                popuplayertitle: "CALCÁRIO CALCÍTICO",
                interactive: true,
                title: '<img src="styles/legend/CALCRIOCALCTICO_23.png" /> CALCÁRIO CALCÍTICO'
            });
var format_CALCRIODOLOMTICO_24 = new ol.format.GeoJSON();
var features_CALCRIODOLOMTICO_24 = format_CALCRIODOLOMTICO_24.readFeatures(json_CALCRIODOLOMTICO_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCRIODOLOMTICO_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCRIODOLOMTICO_24.addFeatures(features_CALCRIODOLOMTICO_24);
var lyr_CALCRIODOLOMTICO_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCRIODOLOMTICO_24, 
                style: style_CALCRIODOLOMTICO_24,
                popuplayertitle: "CALCÁRIO DOLOMÍTICO",
                interactive: true,
                title: '<img src="styles/legend/CALCRIODOLOMTICO_24.png" /> CALCÁRIO DOLOMÍTICO'
            });
var format_CALCRIO_25 = new ol.format.GeoJSON();
var features_CALCRIO_25 = format_CALCRIO_25.readFeatures(json_CALCRIO_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCRIO_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCRIO_25.addFeatures(features_CALCRIO_25);
var lyr_CALCRIO_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCRIO_25, 
                style: style_CALCRIO_25,
                popuplayertitle: "CALCÁRIO",
                interactive: true,
                title: '<img src="styles/legend/CALCRIO_25.png" /> CALCÁRIO'
            });
var format_CALCEDNIA_26 = new ol.format.GeoJSON();
var features_CALCEDNIA_26 = format_CALCEDNIA_26.readFeatures(json_CALCEDNIA_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCEDNIA_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCEDNIA_26.addFeatures(features_CALCEDNIA_26);
var lyr_CALCEDNIA_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCEDNIA_26, 
                style: style_CALCEDNIA_26,
                popuplayertitle: "CALCEDÔNIA",
                interactive: true,
                title: '<img src="styles/legend/CALCEDNIA_26.png" /> CALCEDÔNIA'
            });
var format_CARVOMINERAL_27 = new ol.format.GeoJSON();
var features_CARVOMINERAL_27 = format_CARVOMINERAL_27.readFeatures(json_CARVOMINERAL_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CARVOMINERAL_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARVOMINERAL_27.addFeatures(features_CARVOMINERAL_27);
var lyr_CARVOMINERAL_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARVOMINERAL_27, 
                style: style_CARVOMINERAL_27,
                popuplayertitle: "CARVÃO MINERAL",
                interactive: true,
                title: '<img src="styles/legend/CARVOMINERAL_27.png" /> CARVÃO MINERAL'
            });
var format_CASCALHO_28 = new ol.format.GeoJSON();
var features_CASCALHO_28 = format_CASCALHO_28.readFeatures(json_CASCALHO_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CASCALHO_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASCALHO_28.addFeatures(features_CASCALHO_28);
var lyr_CASCALHO_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASCALHO_28, 
                style: style_CASCALHO_28,
                popuplayertitle: "CASCALHO",
                interactive: true,
                title: '<img src="styles/legend/CASCALHO_28.png" /> CASCALHO'
            });
var format_CASSITERITA_29 = new ol.format.GeoJSON();
var features_CASSITERITA_29 = format_CASSITERITA_29.readFeatures(json_CASSITERITA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CASSITERITA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASSITERITA_29.addFeatures(features_CASSITERITA_29);
var lyr_CASSITERITA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASSITERITA_29, 
                style: style_CASSITERITA_29,
                popuplayertitle: "CASSITERITA",
                interactive: true,
                title: '<img src="styles/legend/CASSITERITA_29.png" /> CASSITERITA'
            });
var format_CAULIM_30 = new ol.format.GeoJSON();
var features_CAULIM_30 = format_CAULIM_30.readFeatures(json_CAULIM_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CAULIM_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAULIM_30.addFeatures(features_CAULIM_30);
var lyr_CAULIM_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAULIM_30, 
                style: style_CAULIM_30,
                popuplayertitle: "CAULIM",
                interactive: true,
                title: '<img src="styles/legend/CAULIM_30.png" /> CAULIM'
            });
var format_COBRE_31 = new ol.format.GeoJSON();
var features_COBRE_31 = format_COBRE_31.readFeatures(json_COBRE_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_COBRE_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBRE_31.addFeatures(features_COBRE_31);
var lyr_COBRE_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COBRE_31, 
                style: style_COBRE_31,
                popuplayertitle: "COBRE",
                interactive: true,
                title: '<img src="styles/legend/COBRE_31.png" /> COBRE'
            });
var format_COLUMBITA_32 = new ol.format.GeoJSON();
var features_COLUMBITA_32 = format_COLUMBITA_32.readFeatures(json_COLUMBITA_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_COLUMBITA_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLUMBITA_32.addFeatures(features_COLUMBITA_32);
var lyr_COLUMBITA_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLUMBITA_32, 
                style: style_COLUMBITA_32,
                popuplayertitle: "COLUMBITA",
                interactive: true,
                title: '<img src="styles/legend/COLUMBITA_32.png" /> COLUMBITA'
            });
var format_CONCHASCALCRIAS_33 = new ol.format.GeoJSON();
var features_CONCHASCALCRIAS_33 = format_CONCHASCALCRIAS_33.readFeatures(json_CONCHASCALCRIAS_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CONCHASCALCRIAS_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONCHASCALCRIAS_33.addFeatures(features_CONCHASCALCRIAS_33);
var lyr_CONCHASCALCRIAS_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONCHASCALCRIAS_33, 
                style: style_CONCHASCALCRIAS_33,
                popuplayertitle: "CONCHAS CALCÁRIAS",
                interactive: true,
                title: '<img src="styles/legend/CONCHASCALCRIAS_33.png" /> CONCHAS CALCÁRIAS'
            });
var format_CONGLOMERADO_34 = new ol.format.GeoJSON();
var features_CONGLOMERADO_34 = format_CONGLOMERADO_34.readFeatures(json_CONGLOMERADO_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CONGLOMERADO_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONGLOMERADO_34.addFeatures(features_CONGLOMERADO_34);
var lyr_CONGLOMERADO_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONGLOMERADO_34, 
                style: style_CONGLOMERADO_34,
                popuplayertitle: "CONGLOMERADO",
                interactive: true,
                title: '<img src="styles/legend/CONGLOMERADO_34.png" /> CONGLOMERADO'
            });
var format_CROMITA_35 = new ol.format.GeoJSON();
var features_CROMITA_35 = format_CROMITA_35.readFeatures(json_CROMITA_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CROMITA_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CROMITA_35.addFeatures(features_CROMITA_35);
var lyr_CROMITA_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CROMITA_35, 
                style: style_CROMITA_35,
                popuplayertitle: "CROMITA",
                interactive: true,
                title: '<img src="styles/legend/CROMITA_35.png" /> CROMITA'
            });
var format_DADONOCADASTRADO_36 = new ol.format.GeoJSON();
var features_DADONOCADASTRADO_36 = format_DADONOCADASTRADO_36.readFeatures(json_DADONOCADASTRADO_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DADONOCADASTRADO_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DADONOCADASTRADO_36.addFeatures(features_DADONOCADASTRADO_36);
var lyr_DADONOCADASTRADO_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DADONOCADASTRADO_36, 
                style: style_DADONOCADASTRADO_36,
                popuplayertitle: "DADO NÃO CADASTRADO",
                interactive: true,
                title: '<img src="styles/legend/DADONOCADASTRADO_36.png" /> DADO NÃO CADASTRADO'
            });
var format_DIABSIO_37 = new ol.format.GeoJSON();
var features_DIABSIO_37 = format_DIABSIO_37.readFeatures(json_DIABSIO_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIABSIO_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIABSIO_37.addFeatures(features_DIABSIO_37);
var lyr_DIABSIO_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIABSIO_37, 
                style: style_DIABSIO_37,
                popuplayertitle: "DIABÁSIO",
                interactive: true,
                title: '<img src="styles/legend/DIABSIO_37.png" /> DIABÁSIO'
            });
var format_DIAMANTEINDUSTRIAL_38 = new ol.format.GeoJSON();
var features_DIAMANTEINDUSTRIAL_38 = format_DIAMANTEINDUSTRIAL_38.readFeatures(json_DIAMANTEINDUSTRIAL_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIAMANTEINDUSTRIAL_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIAMANTEINDUSTRIAL_38.addFeatures(features_DIAMANTEINDUSTRIAL_38);
var lyr_DIAMANTEINDUSTRIAL_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIAMANTEINDUSTRIAL_38, 
                style: style_DIAMANTEINDUSTRIAL_38,
                popuplayertitle: "DIAMANTE INDUSTRIAL",
                interactive: true,
                title: '<img src="styles/legend/DIAMANTEINDUSTRIAL_38.png" /> DIAMANTE INDUSTRIAL'
            });
var format_DIAMANTE_39 = new ol.format.GeoJSON();
var features_DIAMANTE_39 = format_DIAMANTE_39.readFeatures(json_DIAMANTE_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIAMANTE_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIAMANTE_39.addFeatures(features_DIAMANTE_39);
var lyr_DIAMANTE_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIAMANTE_39, 
                style: style_DIAMANTE_39,
                popuplayertitle: "DIAMANTE",
                interactive: true,
                title: '<img src="styles/legend/DIAMANTE_39.png" /> DIAMANTE'
            });
var format_FOSFATO_40 = new ol.format.GeoJSON();
var features_FOSFATO_40 = format_FOSFATO_40.readFeatures(json_FOSFATO_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FOSFATO_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOSFATO_40.addFeatures(features_FOSFATO_40);
var lyr_FOSFATO_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOSFATO_40, 
                style: style_FOSFATO_40,
                popuplayertitle: "FOSFATO",
                interactive: true,
                title: '<img src="styles/legend/FOSFATO_40.png" /> FOSFATO'
            });
var format_GALENA_41 = new ol.format.GeoJSON();
var features_GALENA_41 = format_GALENA_41.readFeatures(json_GALENA_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GALENA_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GALENA_41.addFeatures(features_GALENA_41);
var lyr_GALENA_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GALENA_41, 
                style: style_GALENA_41,
                popuplayertitle: "GALENA",
                interactive: true,
                title: '<img src="styles/legend/GALENA_41.png" /> GALENA'
            });
var format_GEMA_42 = new ol.format.GeoJSON();
var features_GEMA_42 = format_GEMA_42.readFeatures(json_GEMA_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GEMA_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEMA_42.addFeatures(features_GEMA_42);
var lyr_GEMA_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEMA_42, 
                style: style_GEMA_42,
                popuplayertitle: "GEMA",
                interactive: true,
                title: '<img src="styles/legend/GEMA_42.png" /> GEMA'
            });
var format_GIPSITA_43 = new ol.format.GeoJSON();
var features_GIPSITA_43 = format_GIPSITA_43.readFeatures(json_GIPSITA_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GIPSITA_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GIPSITA_43.addFeatures(features_GIPSITA_43);
var lyr_GIPSITA_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GIPSITA_43, 
                style: style_GIPSITA_43,
                popuplayertitle: "GIPSITA",
                interactive: true,
                title: '<img src="styles/legend/GIPSITA_43.png" /> GIPSITA'
            });
var format_GNAISSE_44 = new ol.format.GeoJSON();
var features_GNAISSE_44 = format_GNAISSE_44.readFeatures(json_GNAISSE_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GNAISSE_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNAISSE_44.addFeatures(features_GNAISSE_44);
var lyr_GNAISSE_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNAISSE_44, 
                style: style_GNAISSE_44,
                popuplayertitle: "GNAISSE",
                interactive: true,
                title: '<img src="styles/legend/GNAISSE_44.png" /> GNAISSE'
            });
var format_GRAFITA_45 = new ol.format.GeoJSON();
var features_GRAFITA_45 = format_GRAFITA_45.readFeatures(json_GRAFITA_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRAFITA_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRAFITA_45.addFeatures(features_GRAFITA_45);
var lyr_GRAFITA_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRAFITA_45, 
                style: style_GRAFITA_45,
                popuplayertitle: "GRAFITA",
                interactive: true,
                title: '<img src="styles/legend/GRAFITA_45.png" /> GRAFITA'
            });
var format_GRANITO_46 = new ol.format.GeoJSON();
var features_GRANITO_46 = format_GRANITO_46.readFeatures(json_GRANITO_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRANITO_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANITO_46.addFeatures(features_GRANITO_46);
var lyr_GRANITO_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANITO_46, 
                style: style_GRANITO_46,
                popuplayertitle: "GRANITO",
                interactive: true,
                title: '<img src="styles/legend/GRANITO_46.png" /> GRANITO'
            });
var format_GRANULITO_47 = new ol.format.GeoJSON();
var features_GRANULITO_47 = format_GRANULITO_47.readFeatures(json_GRANULITO_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRANULITO_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANULITO_47.addFeatures(features_GRANULITO_47);
var lyr_GRANULITO_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANULITO_47, 
                style: style_GRANULITO_47,
                popuplayertitle: "GRANULITO",
                interactive: true,
                title: '<img src="styles/legend/GRANULITO_47.png" /> GRANULITO'
            });
var format_ILMENITA_48 = new ol.format.GeoJSON();
var features_ILMENITA_48 = format_ILMENITA_48.readFeatures(json_ILMENITA_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ILMENITA_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ILMENITA_48.addFeatures(features_ILMENITA_48);
var lyr_ILMENITA_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ILMENITA_48, 
                style: style_ILMENITA_48,
                popuplayertitle: "ILMENITA",
                interactive: true,
                title: '<img src="styles/legend/ILMENITA_48.png" /> ILMENITA'
            });
var format_LATERITA_49 = new ol.format.GeoJSON();
var features_LATERITA_49 = format_LATERITA_49.readFeatures(json_LATERITA_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_LATERITA_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATERITA_49.addFeatures(features_LATERITA_49);
var lyr_LATERITA_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LATERITA_49, 
                style: style_LATERITA_49,
                popuplayertitle: "LATERITA",
                interactive: true,
                title: '<img src="styles/legend/LATERITA_49.png" /> LATERITA'
            });
var format_MAGNESITA_50 = new ol.format.GeoJSON();
var features_MAGNESITA_50 = format_MAGNESITA_50.readFeatures(json_MAGNESITA_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MAGNESITA_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAGNESITA_50.addFeatures(features_MAGNESITA_50);
var lyr_MAGNESITA_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAGNESITA_50, 
                style: style_MAGNESITA_50,
                popuplayertitle: "MAGNESITA",
                interactive: true,
                title: '<img src="styles/legend/MAGNESITA_50.png" /> MAGNESITA'
            });
var format_MANGANS_51 = new ol.format.GeoJSON();
var features_MANGANS_51 = format_MANGANS_51.readFeatures(json_MANGANS_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MANGANS_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGANS_51.addFeatures(features_MANGANS_51);
var lyr_MANGANS_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGANS_51, 
                style: style_MANGANS_51,
                popuplayertitle: "MANGANÊS",
                interactive: true,
                title: '<img src="styles/legend/MANGANS_51.png" /> MANGANÊS'
            });
var format_MRMORE_52 = new ol.format.GeoJSON();
var features_MRMORE_52 = format_MRMORE_52.readFeatures(json_MRMORE_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MRMORE_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MRMORE_52.addFeatures(features_MRMORE_52);
var lyr_MRMORE_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MRMORE_52, 
                style: style_MRMORE_52,
                popuplayertitle: "MÁRMORE",
                interactive: true,
                title: '<img src="styles/legend/MRMORE_52.png" /> MÁRMORE'
            });
var format_MINRIODEALUMNIO_53 = new ol.format.GeoJSON();
var features_MINRIODEALUMNIO_53 = format_MINRIODEALUMNIO_53.readFeatures(json_MINRIODEALUMNIO_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEALUMNIO_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEALUMNIO_53.addFeatures(features_MINRIODEALUMNIO_53);
var lyr_MINRIODEALUMNIO_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEALUMNIO_53, 
                style: style_MINRIODEALUMNIO_53,
                popuplayertitle: "MINÉRIO DE ALUMÍNIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEALUMNIO_53.png" /> MINÉRIO DE ALUMÍNIO'
            });
var format_MINRIODECOBRE_54 = new ol.format.GeoJSON();
var features_MINRIODECOBRE_54 = format_MINRIODECOBRE_54.readFeatures(json_MINRIODECOBRE_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODECOBRE_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODECOBRE_54.addFeatures(features_MINRIODECOBRE_54);
var lyr_MINRIODECOBRE_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODECOBRE_54, 
                style: style_MINRIODECOBRE_54,
                popuplayertitle: "MINÉRIO DE COBRE",
                interactive: true,
                title: '<img src="styles/legend/MINRIODECOBRE_54.png" /> MINÉRIO DE COBRE'
            });
var format_MINRIODECROMO_55 = new ol.format.GeoJSON();
var features_MINRIODECROMO_55 = format_MINRIODECROMO_55.readFeatures(json_MINRIODECROMO_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODECROMO_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODECROMO_55.addFeatures(features_MINRIODECROMO_55);
var lyr_MINRIODECROMO_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODECROMO_55, 
                style: style_MINRIODECROMO_55,
                popuplayertitle: "MINÉRIO DE CROMO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODECROMO_55.png" /> MINÉRIO DE CROMO'
            });
var format_MINRIODEFERRO_56 = new ol.format.GeoJSON();
var features_MINRIODEFERRO_56 = format_MINRIODEFERRO_56.readFeatures(json_MINRIODEFERRO_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEFERRO_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEFERRO_56.addFeatures(features_MINRIODEFERRO_56);
var lyr_MINRIODEFERRO_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEFERRO_56, 
                style: style_MINRIODEFERRO_56,
                popuplayertitle: "MINÉRIO DE FERRO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEFERRO_56.png" /> MINÉRIO DE FERRO'
            });
var format_MINRIODELTIO_57 = new ol.format.GeoJSON();
var features_MINRIODELTIO_57 = format_MINRIODELTIO_57.readFeatures(json_MINRIODELTIO_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODELTIO_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODELTIO_57.addFeatures(features_MINRIODELTIO_57);
var lyr_MINRIODELTIO_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODELTIO_57, 
                style: style_MINRIODELTIO_57,
                popuplayertitle: "MINÉRIO DE LÍTIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODELTIO_57.png" /> MINÉRIO DE LÍTIO'
            });
var format_MINRIODEMAGNSIO_58 = new ol.format.GeoJSON();
var features_MINRIODEMAGNSIO_58 = format_MINRIODEMAGNSIO_58.readFeatures(json_MINRIODEMAGNSIO_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEMAGNSIO_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEMAGNSIO_58.addFeatures(features_MINRIODEMAGNSIO_58);
var lyr_MINRIODEMAGNSIO_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEMAGNSIO_58, 
                style: style_MINRIODEMAGNSIO_58,
                popuplayertitle: "MINÉRIO DE MAGNÉSIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEMAGNSIO_58.png" /> MINÉRIO DE MAGNÉSIO'
            });
var format_MINRIODEMANGANS_59 = new ol.format.GeoJSON();
var features_MINRIODEMANGANS_59 = format_MINRIODEMANGANS_59.readFeatures(json_MINRIODEMANGANS_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEMANGANS_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEMANGANS_59.addFeatures(features_MINRIODEMANGANS_59);
var lyr_MINRIODEMANGANS_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEMANGANS_59, 
                style: style_MINRIODEMANGANS_59,
                popuplayertitle: "MINÉRIO DE MANGANÊS",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEMANGANS_59.png" /> MINÉRIO DE MANGANÊS'
            });
var format_MINRIODENQUEL_60 = new ol.format.GeoJSON();
var features_MINRIODENQUEL_60 = format_MINRIODENQUEL_60.readFeatures(json_MINRIODENQUEL_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODENQUEL_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODENQUEL_60.addFeatures(features_MINRIODENQUEL_60);
var lyr_MINRIODENQUEL_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODENQUEL_60, 
                style: style_MINRIODENQUEL_60,
                popuplayertitle: "MINÉRIO DE NÍQUEL",
                interactive: true,
                title: '<img src="styles/legend/MINRIODENQUEL_60.png" /> MINÉRIO DE NÍQUEL'
            });
var format_MINRIODEOURO_61 = new ol.format.GeoJSON();
var features_MINRIODEOURO_61 = format_MINRIODEOURO_61.readFeatures(json_MINRIODEOURO_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEOURO_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEOURO_61.addFeatures(features_MINRIODEOURO_61);
var lyr_MINRIODEOURO_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEOURO_61, 
                style: style_MINRIODEOURO_61,
                popuplayertitle: "MINÉRIO DE OURO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEOURO_61.png" /> MINÉRIO DE OURO'
            });
var format_MINRIODETITNIO_62 = new ol.format.GeoJSON();
var features_MINRIODETITNIO_62 = format_MINRIODETITNIO_62.readFeatures(json_MINRIODETITNIO_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODETITNIO_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODETITNIO_62.addFeatures(features_MINRIODETITNIO_62);
var lyr_MINRIODETITNIO_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODETITNIO_62, 
                style: style_MINRIODETITNIO_62,
                popuplayertitle: "MINÉRIO DE TITÂNIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODETITNIO_62.png" /> MINÉRIO DE TITÂNIO'
            });
var format_NQUEL_63 = new ol.format.GeoJSON();
var features_NQUEL_63 = format_NQUEL_63.readFeatures(json_NQUEL_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_NQUEL_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQUEL_63.addFeatures(features_NQUEL_63);
var lyr_NQUEL_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQUEL_63, 
                style: style_NQUEL_63,
                popuplayertitle: "NÍQUEL",
                interactive: true,
                title: '<img src="styles/legend/NQUEL_63.png" /> NÍQUEL'
            });
var format_OPALA_64 = new ol.format.GeoJSON();
var features_OPALA_64 = format_OPALA_64.readFeatures(json_OPALA_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_OPALA_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPALA_64.addFeatures(features_OPALA_64);
var lyr_OPALA_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPALA_64, 
                style: style_OPALA_64,
                popuplayertitle: "OPALA",
                interactive: true,
                title: '<img src="styles/legend/OPALA_64.png" /> OPALA'
            });
var format_OURO_65 = new ol.format.GeoJSON();
var features_OURO_65 = format_OURO_65.readFeatures(json_OURO_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_OURO_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OURO_65.addFeatures(features_OURO_65);
var lyr_OURO_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OURO_65, 
                style: style_OURO_65,
                popuplayertitle: "OURO",
                interactive: true,
                title: '<img src="styles/legend/OURO_65.png" /> OURO'
            });
var format_QUARTZITO_66 = new ol.format.GeoJSON();
var features_QUARTZITO_66 = format_QUARTZITO_66.readFeatures(json_QUARTZITO_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_QUARTZITO_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUARTZITO_66.addFeatures(features_QUARTZITO_66);
var lyr_QUARTZITO_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUARTZITO_66, 
                style: style_QUARTZITO_66,
                popuplayertitle: "QUARTZITO",
                interactive: true,
                title: '<img src="styles/legend/QUARTZITO_66.png" /> QUARTZITO'
            });
var format_QUARTZO_67 = new ol.format.GeoJSON();
var features_QUARTZO_67 = format_QUARTZO_67.readFeatures(json_QUARTZO_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_QUARTZO_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUARTZO_67.addFeatures(features_QUARTZO_67);
var lyr_QUARTZO_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUARTZO_67, 
                style: style_QUARTZO_67,
                popuplayertitle: "QUARTZO",
                interactive: true,
                title: '<img src="styles/legend/QUARTZO_67.png" /> QUARTZO'
            });
var format_RUTILO_68 = new ol.format.GeoJSON();
var features_RUTILO_68 = format_RUTILO_68.readFeatures(json_RUTILO_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RUTILO_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTILO_68.addFeatures(features_RUTILO_68);
var lyr_RUTILO_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTILO_68, 
                style: style_RUTILO_68,
                popuplayertitle: "RUTILO",
                interactive: true,
                title: '<img src="styles/legend/RUTILO_68.png" /> RUTILO'
            });
var format_SAIBRO_69 = new ol.format.GeoJSON();
var features_SAIBRO_69 = format_SAIBRO_69.readFeatures(json_SAIBRO_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SAIBRO_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAIBRO_69.addFeatures(features_SAIBRO_69);
var lyr_SAIBRO_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAIBRO_69, 
                style: style_SAIBRO_69,
                popuplayertitle: "SAIBRO",
                interactive: true,
                title: '<img src="styles/legend/SAIBRO_69.png" /> SAIBRO'
            });
var format_SAISDEMAGNSIO_70 = new ol.format.GeoJSON();
var features_SAISDEMAGNSIO_70 = format_SAISDEMAGNSIO_70.readFeatures(json_SAISDEMAGNSIO_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SAISDEMAGNSIO_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAISDEMAGNSIO_70.addFeatures(features_SAISDEMAGNSIO_70);
var lyr_SAISDEMAGNSIO_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAISDEMAGNSIO_70, 
                style: style_SAISDEMAGNSIO_70,
                popuplayertitle: "SAIS DE MAGNÉSIO",
                interactive: true,
                title: '<img src="styles/legend/SAISDEMAGNSIO_70.png" /> SAIS DE MAGNÉSIO'
            });
var format_SAISDEPOTSSIO_71 = new ol.format.GeoJSON();
var features_SAISDEPOTSSIO_71 = format_SAISDEPOTSSIO_71.readFeatures(json_SAISDEPOTSSIO_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SAISDEPOTSSIO_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAISDEPOTSSIO_71.addFeatures(features_SAISDEPOTSSIO_71);
var lyr_SAISDEPOTSSIO_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAISDEPOTSSIO_71, 
                style: style_SAISDEPOTSSIO_71,
                popuplayertitle: "SAIS DE POTÁSSIO",
                interactive: true,
                title: '<img src="styles/legend/SAISDEPOTSSIO_71.png" /> SAIS DE POTÁSSIO'
            });
var format_SEIXOS_72 = new ol.format.GeoJSON();
var features_SEIXOS_72 = format_SEIXOS_72.readFeatures(json_SEIXOS_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SEIXOS_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEIXOS_72.addFeatures(features_SEIXOS_72);
var lyr_SEIXOS_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEIXOS_72, 
                style: style_SEIXOS_72,
                popuplayertitle: "SEIXOS",
                interactive: true,
                title: '<img src="styles/legend/SEIXOS_72.png" /> SEIXOS'
            });
var format_SIENITO_73 = new ol.format.GeoJSON();
var features_SIENITO_73 = format_SIENITO_73.readFeatures(json_SIENITO_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SIENITO_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIENITO_73.addFeatures(features_SIENITO_73);
var lyr_SIENITO_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIENITO_73, 
                style: style_SIENITO_73,
                popuplayertitle: "SIENITO",
                interactive: true,
                title: '<img src="styles/legend/SIENITO_73.png" /> SIENITO'
            });
var format_SILTITO_74 = new ol.format.GeoJSON();
var features_SILTITO_74 = format_SILTITO_74.readFeatures(json_SILTITO_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SILTITO_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SILTITO_74.addFeatures(features_SILTITO_74);
var lyr_SILTITO_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SILTITO_74, 
                style: style_SILTITO_74,
                popuplayertitle: "SILTITO",
                interactive: true,
                title: '<img src="styles/legend/SILTITO_74.png" /> SILTITO'
            });
var format_TALCO_75 = new ol.format.GeoJSON();
var features_TALCO_75 = format_TALCO_75.readFeatures(json_TALCO_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TALCO_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALCO_75.addFeatures(features_TALCO_75);
var lyr_TALCO_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TALCO_75, 
                style: style_TALCO_75,
                popuplayertitle: "TALCO",
                interactive: true,
                title: '<img src="styles/legend/TALCO_75.png" /> TALCO'
            });
var format_TERRASRARAS_76 = new ol.format.GeoJSON();
var features_TERRASRARAS_76 = format_TERRASRARAS_76.readFeatures(json_TERRASRARAS_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TERRASRARAS_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERRASRARAS_76.addFeatures(features_TERRASRARAS_76);
var lyr_TERRASRARAS_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERRASRARAS_76, 
                style: style_TERRASRARAS_76,
                popuplayertitle: "TERRAS RARAS",
                interactive: true,
                title: '<img src="styles/legend/TERRASRARAS_76.png" /> TERRAS RARAS'
            });
var format_VERMICULITA_77 = new ol.format.GeoJSON();
var features_VERMICULITA_77 = format_VERMICULITA_77.readFeatures(json_VERMICULITA_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_VERMICULITA_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERMICULITA_77.addFeatures(features_VERMICULITA_77);
var lyr_VERMICULITA_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERMICULITA_77, 
                style: style_VERMICULITA_77,
                popuplayertitle: "VERMICULITA",
                interactive: true,
                title: '<img src="styles/legend/VERMICULITA_77.png" /> VERMICULITA'
            });
var format_XISTO_78 = new ol.format.GeoJSON();
var features_XISTO_78 = format_XISTO_78.readFeatures(json_XISTO_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_XISTO_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XISTO_78.addFeatures(features_XISTO_78);
var lyr_XISTO_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XISTO_78, 
                style: style_XISTO_78,
                popuplayertitle: "XISTO",
                interactive: true,
                title: '<img src="styles/legend/XISTO_78.png" /> XISTO'
            });
var format_FaseRequerimentoderegistrodeextrao_79 = new ol.format.GeoJSON();
var features_FaseRequerimentoderegistrodeextrao_79 = format_FaseRequerimentoderegistrodeextrao_79.readFeatures(json_FaseRequerimentoderegistrodeextrao_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRequerimentoderegistrodeextrao_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRequerimentoderegistrodeextrao_79.addFeatures(features_FaseRequerimentoderegistrodeextrao_79);
var lyr_FaseRequerimentoderegistrodeextrao_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRequerimentoderegistrodeextrao_79, 
                style: style_FaseRequerimentoderegistrodeextrao_79,
                popuplayertitle: "Fase - Requerimento de registro de extração",
                interactive: true,
                title: '<img src="styles/legend/FaseRequerimentoderegistrodeextrao_79.png" /> Fase - Requerimento de registro de extração'
            });
var format_FaseRequerimentodepesquisa_80 = new ol.format.GeoJSON();
var features_FaseRequerimentodepesquisa_80 = format_FaseRequerimentodepesquisa_80.readFeatures(json_FaseRequerimentodepesquisa_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRequerimentodepesquisa_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRequerimentodepesquisa_80.addFeatures(features_FaseRequerimentodepesquisa_80);
var lyr_FaseRequerimentodepesquisa_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRequerimentodepesquisa_80, 
                style: style_FaseRequerimentodepesquisa_80,
                popuplayertitle: "Fase - Requerimento de pesquisa",
                interactive: true,
                title: '<img src="styles/legend/FaseRequerimentodepesquisa_80.png" /> Fase - Requerimento de pesquisa'
            });
var format_FaseRequerimentodelicenciamento_81 = new ol.format.GeoJSON();
var features_FaseRequerimentodelicenciamento_81 = format_FaseRequerimentodelicenciamento_81.readFeatures(json_FaseRequerimentodelicenciamento_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRequerimentodelicenciamento_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRequerimentodelicenciamento_81.addFeatures(features_FaseRequerimentodelicenciamento_81);
var lyr_FaseRequerimentodelicenciamento_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRequerimentodelicenciamento_81, 
                style: style_FaseRequerimentodelicenciamento_81,
                popuplayertitle: "Fase - Requerimento de licenciamento",
                interactive: true,
                title: '<img src="styles/legend/FaseRequerimentodelicenciamento_81.png" /> Fase - Requerimento de licenciamento'
            });
var format_FaseRequerimentodelavragarimpeira_82 = new ol.format.GeoJSON();
var features_FaseRequerimentodelavragarimpeira_82 = format_FaseRequerimentodelavragarimpeira_82.readFeatures(json_FaseRequerimentodelavragarimpeira_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRequerimentodelavragarimpeira_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRequerimentodelavragarimpeira_82.addFeatures(features_FaseRequerimentodelavragarimpeira_82);
var lyr_FaseRequerimentodelavragarimpeira_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRequerimentodelavragarimpeira_82, 
                style: style_FaseRequerimentodelavragarimpeira_82,
                popuplayertitle: "Fase - Requerimento de lavra garimpeira",
                interactive: true,
                title: '<img src="styles/legend/FaseRequerimentodelavragarimpeira_82.png" /> Fase - Requerimento de lavra garimpeira'
            });
var format_FaseRequerimentodelavra_83 = new ol.format.GeoJSON();
var features_FaseRequerimentodelavra_83 = format_FaseRequerimentodelavra_83.readFeatures(json_FaseRequerimentodelavra_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRequerimentodelavra_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRequerimentodelavra_83.addFeatures(features_FaseRequerimentodelavra_83);
var lyr_FaseRequerimentodelavra_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRequerimentodelavra_83, 
                style: style_FaseRequerimentodelavra_83,
                popuplayertitle: "Fase - Requerimento de lavra",
                interactive: true,
                title: '<img src="styles/legend/FaseRequerimentodelavra_83.png" /> Fase - Requerimento de lavra'
            });
var format_FaseRegistrodeextrao_84 = new ol.format.GeoJSON();
var features_FaseRegistrodeextrao_84 = format_FaseRegistrodeextrao_84.readFeatures(json_FaseRegistrodeextrao_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRegistrodeextrao_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRegistrodeextrao_84.addFeatures(features_FaseRegistrodeextrao_84);
var lyr_FaseRegistrodeextrao_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRegistrodeextrao_84, 
                style: style_FaseRegistrodeextrao_84,
                popuplayertitle: "Fase - Registro de extração",
                interactive: true,
                title: '<img src="styles/legend/FaseRegistrodeextrao_84.png" /> Fase - Registro de extração'
            });
var format_FaseReconhecimentogeolgico_85 = new ol.format.GeoJSON();
var features_FaseReconhecimentogeolgico_85 = format_FaseReconhecimentogeolgico_85.readFeatures(json_FaseReconhecimentogeolgico_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseReconhecimentogeolgico_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseReconhecimentogeolgico_85.addFeatures(features_FaseReconhecimentogeolgico_85);
var lyr_FaseReconhecimentogeolgico_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseReconhecimentogeolgico_85, 
                style: style_FaseReconhecimentogeolgico_85,
                popuplayertitle: "Fase - Reconhecimento geológico",
                interactive: true,
                title: '<img src="styles/legend/FaseReconhecimentogeolgico_85.png" /> Fase - Reconhecimento geológico'
            });
var format_FaseLicenciamento_86 = new ol.format.GeoJSON();
var features_FaseLicenciamento_86 = format_FaseLicenciamento_86.readFeatures(json_FaseLicenciamento_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseLicenciamento_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseLicenciamento_86.addFeatures(features_FaseLicenciamento_86);
var lyr_FaseLicenciamento_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseLicenciamento_86, 
                style: style_FaseLicenciamento_86,
                popuplayertitle: "Fase - Licenciamento",
                interactive: true,
                title: '<img src="styles/legend/FaseLicenciamento_86.png" /> Fase - Licenciamento'
            });
var format_FaseLavragarimpeira_87 = new ol.format.GeoJSON();
var features_FaseLavragarimpeira_87 = format_FaseLavragarimpeira_87.readFeatures(json_FaseLavragarimpeira_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseLavragarimpeira_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseLavragarimpeira_87.addFeatures(features_FaseLavragarimpeira_87);
var lyr_FaseLavragarimpeira_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseLavragarimpeira_87, 
                style: style_FaseLavragarimpeira_87,
                popuplayertitle: "Fase - Lavra garimpeira",
                interactive: true,
                title: '<img src="styles/legend/FaseLavragarimpeira_87.png" /> Fase - Lavra garimpeira'
            });
var format_FaseDisponibilidade_88 = new ol.format.GeoJSON();
var features_FaseDisponibilidade_88 = format_FaseDisponibilidade_88.readFeatures(json_FaseDisponibilidade_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseDisponibilidade_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseDisponibilidade_88.addFeatures(features_FaseDisponibilidade_88);
var lyr_FaseDisponibilidade_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseDisponibilidade_88, 
                style: style_FaseDisponibilidade_88,
                popuplayertitle: "Fase - Disponibilidade",
                interactive: true,
                title: '<img src="styles/legend/FaseDisponibilidade_88.png" /> Fase - Disponibilidade'
            });
var format_FaseDireitoderequereralavra_89 = new ol.format.GeoJSON();
var features_FaseDireitoderequereralavra_89 = format_FaseDireitoderequereralavra_89.readFeatures(json_FaseDireitoderequereralavra_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseDireitoderequereralavra_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseDireitoderequereralavra_89.addFeatures(features_FaseDireitoderequereralavra_89);
var lyr_FaseDireitoderequereralavra_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseDireitoderequereralavra_89, 
                style: style_FaseDireitoderequereralavra_89,
                popuplayertitle: "Fase - Direito de requerer a lavra",
                interactive: true,
                title: '<img src="styles/legend/FaseDireitoderequereralavra_89.png" /> Fase - Direito de requerer a lavra'
            });
var format_FaseConcessodelavra_90 = new ol.format.GeoJSON();
var features_FaseConcessodelavra_90 = format_FaseConcessodelavra_90.readFeatures(json_FaseConcessodelavra_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseConcessodelavra_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseConcessodelavra_90.addFeatures(features_FaseConcessodelavra_90);
var lyr_FaseConcessodelavra_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseConcessodelavra_90, 
                style: style_FaseConcessodelavra_90,
                popuplayertitle: "Fase - Concessão de lavra",
                interactive: true,
                title: '<img src="styles/legend/FaseConcessodelavra_90.png" /> Fase - Concessão de lavra'
            });
var format_FaseAutorizaodepesquisa_91 = new ol.format.GeoJSON();
var features_FaseAutorizaodepesquisa_91 = format_FaseAutorizaodepesquisa_91.readFeatures(json_FaseAutorizaodepesquisa_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseAutorizaodepesquisa_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseAutorizaodepesquisa_91.addFeatures(features_FaseAutorizaodepesquisa_91);
var lyr_FaseAutorizaodepesquisa_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseAutorizaodepesquisa_91, 
                style: style_FaseAutorizaodepesquisa_91,
                popuplayertitle: "Fase - Autorização de pesquisa",
                interactive: true,
                title: '<img src="styles/legend/FaseAutorizaodepesquisa_91.png" /> Fase - Autorização de pesquisa'
            });
var format_FaseAptoparadisponibilidade_92 = new ol.format.GeoJSON();
var features_FaseAptoparadisponibilidade_92 = format_FaseAptoparadisponibilidade_92.readFeatures(json_FaseAptoparadisponibilidade_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseAptoparadisponibilidade_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseAptoparadisponibilidade_92.addFeatures(features_FaseAptoparadisponibilidade_92);
var lyr_FaseAptoparadisponibilidade_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseAptoparadisponibilidade_92, 
                style: style_FaseAptoparadisponibilidade_92,
                popuplayertitle: "Fase - Apto para disponibilidade",
                interactive: true,
                title: '<img src="styles/legend/FaseAptoparadisponibilidade_92.png" /> Fase - Apto para disponibilidade'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_readeaplicaodaLeideMataAtlnticaPI_3.setVisible(true);lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.setVisible(true);lyr_UnidadesdeConservaoEstadualPI_5.setVisible(true);lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.setVisible(true);lyr_ZonadeAmortecimentodasUCsPI3Km_7.setVisible(true);lyr_Processosminerrios_8.setVisible(false);lyr_GUAMINERALALCBICGUAMINERALALC_9.setVisible(false);lyr_GUAMINERALCARBOGAS_10.setVisible(false);lyr_GUAMINERAL_11.setVisible(false);lyr_GUAPOTVELDEMESA_12.setVisible(false);lyr_AMETISTA_13.setVisible(false);lyr_ANFIBOLITO_14.setVisible(false);lyr_ARDSIA_15.setVisible(false);lyr_AREIA_16.setVisible(false);lyr_ARENITO_17.setVisible(false);lyr_ARGILAREFRATRIA_18.setVisible(false);lyr_ARGILA_19.setVisible(false);lyr_ARGILITO_20.setVisible(false);lyr_ATAPULGITA_21.setVisible(false);lyr_BASALTO_22.setVisible(false);lyr_CALCRIOCALCTICO_23.setVisible(false);lyr_CALCRIODOLOMTICO_24.setVisible(false);lyr_CALCRIO_25.setVisible(false);lyr_CALCEDNIA_26.setVisible(false);lyr_CARVOMINERAL_27.setVisible(false);lyr_CASCALHO_28.setVisible(false);lyr_CASSITERITA_29.setVisible(false);lyr_CAULIM_30.setVisible(false);lyr_COBRE_31.setVisible(false);lyr_COLUMBITA_32.setVisible(false);lyr_CONCHASCALCRIAS_33.setVisible(false);lyr_CONGLOMERADO_34.setVisible(false);lyr_CROMITA_35.setVisible(false);lyr_DADONOCADASTRADO_36.setVisible(false);lyr_DIABSIO_37.setVisible(false);lyr_DIAMANTEINDUSTRIAL_38.setVisible(false);lyr_DIAMANTE_39.setVisible(false);lyr_FOSFATO_40.setVisible(false);lyr_GALENA_41.setVisible(false);lyr_GEMA_42.setVisible(false);lyr_GIPSITA_43.setVisible(false);lyr_GNAISSE_44.setVisible(false);lyr_GRAFITA_45.setVisible(false);lyr_GRANITO_46.setVisible(false);lyr_GRANULITO_47.setVisible(false);lyr_ILMENITA_48.setVisible(false);lyr_LATERITA_49.setVisible(false);lyr_MAGNESITA_50.setVisible(false);lyr_MANGANS_51.setVisible(false);lyr_MRMORE_52.setVisible(false);lyr_MINRIODEALUMNIO_53.setVisible(false);lyr_MINRIODECOBRE_54.setVisible(false);lyr_MINRIODECROMO_55.setVisible(false);lyr_MINRIODEFERRO_56.setVisible(false);lyr_MINRIODELTIO_57.setVisible(false);lyr_MINRIODEMAGNSIO_58.setVisible(false);lyr_MINRIODEMANGANS_59.setVisible(false);lyr_MINRIODENQUEL_60.setVisible(false);lyr_MINRIODEOURO_61.setVisible(false);lyr_MINRIODETITNIO_62.setVisible(false);lyr_NQUEL_63.setVisible(false);lyr_OPALA_64.setVisible(false);lyr_OURO_65.setVisible(false);lyr_QUARTZITO_66.setVisible(false);lyr_QUARTZO_67.setVisible(false);lyr_RUTILO_68.setVisible(false);lyr_SAIBRO_69.setVisible(false);lyr_SAISDEMAGNSIO_70.setVisible(false);lyr_SAISDEPOTSSIO_71.setVisible(false);lyr_SEIXOS_72.setVisible(false);lyr_SIENITO_73.setVisible(false);lyr_SILTITO_74.setVisible(false);lyr_TALCO_75.setVisible(false);lyr_TERRASRARAS_76.setVisible(false);lyr_VERMICULITA_77.setVisible(false);lyr_XISTO_78.setVisible(false);lyr_FaseRequerimentoderegistrodeextrao_79.setVisible(false);lyr_FaseRequerimentodepesquisa_80.setVisible(false);lyr_FaseRequerimentodelicenciamento_81.setVisible(false);lyr_FaseRequerimentodelavragarimpeira_82.setVisible(false);lyr_FaseRequerimentodelavra_83.setVisible(false);lyr_FaseRegistrodeextrao_84.setVisible(false);lyr_FaseReconhecimentogeolgico_85.setVisible(false);lyr_FaseLicenciamento_86.setVisible(false);lyr_FaseLavragarimpeira_87.setVisible(false);lyr_FaseDisponibilidade_88.setVisible(false);lyr_FaseDireitoderequereralavra_89.setVisible(false);lyr_FaseConcessodelavra_90.setVisible(false);lyr_FaseAutorizaodepesquisa_91.setVisible(false);lyr_FaseAptoparadisponibilidade_92.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Municipios_2,lyr_readeaplicaodaLeideMataAtlnticaPI_3,lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4,lyr_UnidadesdeConservaoEstadualPI_5,lyr_UnidadesdeConservaoFederalPIICMBIO2023_6,lyr_ZonadeAmortecimentodasUCsPI3Km_7,lyr_Processosminerrios_8,lyr_GUAMINERALALCBICGUAMINERALALC_9,lyr_GUAMINERALCARBOGAS_10,lyr_GUAMINERAL_11,lyr_GUAPOTVELDEMESA_12,lyr_AMETISTA_13,lyr_ANFIBOLITO_14,lyr_ARDSIA_15,lyr_AREIA_16,lyr_ARENITO_17,lyr_ARGILAREFRATRIA_18,lyr_ARGILA_19,lyr_ARGILITO_20,lyr_ATAPULGITA_21,lyr_BASALTO_22,lyr_CALCRIOCALCTICO_23,lyr_CALCRIODOLOMTICO_24,lyr_CALCRIO_25,lyr_CALCEDNIA_26,lyr_CARVOMINERAL_27,lyr_CASCALHO_28,lyr_CASSITERITA_29,lyr_CAULIM_30,lyr_COBRE_31,lyr_COLUMBITA_32,lyr_CONCHASCALCRIAS_33,lyr_CONGLOMERADO_34,lyr_CROMITA_35,lyr_DADONOCADASTRADO_36,lyr_DIABSIO_37,lyr_DIAMANTEINDUSTRIAL_38,lyr_DIAMANTE_39,lyr_FOSFATO_40,lyr_GALENA_41,lyr_GEMA_42,lyr_GIPSITA_43,lyr_GNAISSE_44,lyr_GRAFITA_45,lyr_GRANITO_46,lyr_GRANULITO_47,lyr_ILMENITA_48,lyr_LATERITA_49,lyr_MAGNESITA_50,lyr_MANGANS_51,lyr_MRMORE_52,lyr_MINRIODEALUMNIO_53,lyr_MINRIODECOBRE_54,lyr_MINRIODECROMO_55,lyr_MINRIODEFERRO_56,lyr_MINRIODELTIO_57,lyr_MINRIODEMAGNSIO_58,lyr_MINRIODEMANGANS_59,lyr_MINRIODENQUEL_60,lyr_MINRIODEOURO_61,lyr_MINRIODETITNIO_62,lyr_NQUEL_63,lyr_OPALA_64,lyr_OURO_65,lyr_QUARTZITO_66,lyr_QUARTZO_67,lyr_RUTILO_68,lyr_SAIBRO_69,lyr_SAISDEMAGNSIO_70,lyr_SAISDEPOTSSIO_71,lyr_SEIXOS_72,lyr_SIENITO_73,lyr_SILTITO_74,lyr_TALCO_75,lyr_TERRASRARAS_76,lyr_VERMICULITA_77,lyr_XISTO_78,lyr_FaseRequerimentoderegistrodeextrao_79,lyr_FaseRequerimentodepesquisa_80,lyr_FaseRequerimentodelicenciamento_81,lyr_FaseRequerimentodelavragarimpeira_82,lyr_FaseRequerimentodelavra_83,lyr_FaseRegistrodeextrao_84,lyr_FaseReconhecimentogeolgico_85,lyr_FaseLicenciamento_86,lyr_FaseLavragarimpeira_87,lyr_FaseDisponibilidade_88,lyr_FaseDireitoderequereralavra_89,lyr_FaseConcessodelavra_90,lyr_FaseAutorizaodepesquisa_91,lyr_FaseAptoparadisponibilidade_92];
lyr_Municipios_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'LEG_1SIMP': 'LEG_1SIMP', 'COUNT_': 'COUNT_', 'Shape_Leng': 'Shape_Leng', 'area_km2': 'area_km2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'PONTO': 'PONTO', 'N': 'N', 'W': 'W', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nome': 'nome', 'sigla': 'sigla', 'areaHa': 'areaHa', 'perimetroM': 'perimetroM', 'administra': 'administra', 'UF': 'UF', 'biomaIBGE': 'biomaIBGE', 'CoordRegio': 'CoordRegio', 'municipios': 'municipios', 'anoCriacao': 'anoCriacao', 'Territorio': 'Territorio', 'Decreto': 'Decreto', 'COD': 'COD', 'Hectares': 'Hectares', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldAliases', {'id': 'id', 'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'Demarcacao': 'Demarcacao', 'EscalaUC': 'EscalaUC', 'NGI': 'NGI', 'Latitude': 'Latitude', 'Longi': 'Longi', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nome': 'nome', 'sigla': 'sigla', 'areaHa': 'areaHa', 'administra': 'administra', 'SiglaGrupo': 'SiglaGrupo', 'UF': 'UF', 'biomaIBGE': 'biomaIBGE', 'biomaCRL': 'biomaCRL', 'CoordRegio': 'CoordRegio', 'municipios': 'municipios', 'anoCriacao': 'anoCriacao', 'Territorio': 'Territorio', 'Decreto': 'Decreto', 'Hectares': 'Hectares', 'BUFF_DIST': 'BUFF_DIST', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Processosminerrios_8.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAMINERALALCBICGUAMINERALALC_9.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAMINERALCARBOGAS_10.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAMINERAL_11.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAPOTVELDEMESA_12.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_AMETISTA_13.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ANFIBOLITO_14.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARDSIA_15.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_AREIA_16.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARENITO_17.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILAREFRATRIA_18.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILA_19.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILITO_20.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ATAPULGITA_21.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_BASALTO_22.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCRIOCALCTICO_23.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCRIODOLOMTICO_24.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCRIO_25.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCEDNIA_26.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CARVOMINERAL_27.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CASCALHO_28.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CASSITERITA_29.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CAULIM_30.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_COBRE_31.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_COLUMBITA_32.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CONCHASCALCRIAS_33.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CONGLOMERADO_34.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CROMITA_35.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DADONOCADASTRADO_36.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIABSIO_37.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIAMANTEINDUSTRIAL_38.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIAMANTE_39.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FOSFATO_40.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GALENA_41.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GEMA_42.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GIPSITA_43.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GNAISSE_44.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRAFITA_45.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRANITO_46.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRANULITO_47.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ILMENITA_48.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_LATERITA_49.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MAGNESITA_50.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MANGANS_51.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MRMORE_52.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEALUMNIO_53.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODECOBRE_54.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODECROMO_55.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEFERRO_56.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODELTIO_57.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEMAGNSIO_58.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEMANGANS_59.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODENQUEL_60.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEOURO_61.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODETITNIO_62.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_NQUEL_63.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_OPALA_64.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_OURO_65.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_QUARTZITO_66.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_QUARTZO_67.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_RUTILO_68.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SAIBRO_69.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SAISDEMAGNSIO_70.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SAISDEPOTSSIO_71.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SEIXOS_72.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SIENITO_73.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SILTITO_74.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_TALCO_75.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_TERRASRARAS_76.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_VERMICULITA_77.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_XISTO_78.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRequerimentoderegistrodeextrao_79.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRequerimentodepesquisa_80.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRequerimentodelicenciamento_81.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRequerimentodelavragarimpeira_82.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRequerimentodelavra_83.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRegistrodeextrao_84.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseReconhecimentogeolgico_85.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseLicenciamento_86.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseLavragarimpeira_87.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseDisponibilidade_88.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseDireitoderequereralavra_89.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseConcessodelavra_90.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseAutorizaodepesquisa_91.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseAptoparadisponibilidade_92.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_Municipios_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'LEG_1SIMP': 'TextEdit', 'COUNT_': 'Range', 'Shape_Leng': 'TextEdit', 'area_km2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldImages', {'id': '', 'fid': '', 'PONTO': '', 'N': '', 'W': '', 'Latitude': '', 'Longitude': '', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'perimetroM': 'TextEdit', 'administra': 'TextEdit', 'UF': 'TextEdit', 'biomaIBGE': 'TextEdit', 'CoordRegio': 'TextEdit', 'municipios': 'TextEdit', 'anoCriacao': 'TextEdit', 'Territorio': 'TextEdit', 'Decreto': 'TextEdit', 'COD': 'Range', 'Hectares': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldImages', {'id': '', 'NomeUC': '', 'Cnuc': '', 'CriacaoAno': '', 'AreaHaAlb': '', 'PerimM': '', 'CriacaoAto': '', 'EsferaAdm': '', 'SiglaCateg': '', 'GrupoUC': '', 'UFAbrang': '', 'BiomaIBGE': '', 'BiomaCRL': '', 'GRegional': '', 'FusoAbrang': '', 'Demarcacao': '', 'EscalaUC': '', 'NGI': '', 'Latitude': '', 'Longi': '', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'administra': 'TextEdit', 'SiglaGrupo': 'TextEdit', 'UF': 'TextEdit', 'biomaIBGE': 'TextEdit', 'biomaCRL': 'TextEdit', 'CoordRegio': 'TextEdit', 'municipios': 'TextEdit', 'anoCriacao': 'TextEdit', 'Territorio': 'TextEdit', 'Decreto': 'TextEdit', 'Hectares': 'TextEdit', 'BUFF_DIST': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Processosminerrios_8.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAMINERALALCBICGUAMINERALALC_9.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAMINERALCARBOGAS_10.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAMINERAL_11.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAPOTVELDEMESA_12.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_AMETISTA_13.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ANFIBOLITO_14.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARDSIA_15.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_AREIA_16.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARENITO_17.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILAREFRATRIA_18.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILA_19.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILITO_20.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ATAPULGITA_21.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_BASALTO_22.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCRIOCALCTICO_23.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCRIODOLOMTICO_24.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCRIO_25.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCEDNIA_26.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CARVOMINERAL_27.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CASCALHO_28.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CASSITERITA_29.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CAULIM_30.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_COBRE_31.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_COLUMBITA_32.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CONCHASCALCRIAS_33.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CONGLOMERADO_34.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CROMITA_35.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DADONOCADASTRADO_36.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIABSIO_37.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIAMANTEINDUSTRIAL_38.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIAMANTE_39.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FOSFATO_40.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GALENA_41.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GEMA_42.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GIPSITA_43.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GNAISSE_44.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRAFITA_45.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRANITO_46.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRANULITO_47.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ILMENITA_48.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_LATERITA_49.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MAGNESITA_50.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MANGANS_51.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MRMORE_52.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEALUMNIO_53.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODECOBRE_54.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODECROMO_55.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEFERRO_56.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODELTIO_57.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEMAGNSIO_58.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEMANGANS_59.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODENQUEL_60.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEOURO_61.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODETITNIO_62.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_NQUEL_63.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_OPALA_64.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_OURO_65.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_QUARTZITO_66.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_QUARTZO_67.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_RUTILO_68.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SAIBRO_69.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SAISDEMAGNSIO_70.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SAISDEPOTSSIO_71.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SEIXOS_72.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SIENITO_73.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SILTITO_74.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_TALCO_75.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_TERRASRARAS_76.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_VERMICULITA_77.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_XISTO_78.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRequerimentoderegistrodeextrao_79.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRequerimentodepesquisa_80.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRequerimentodelicenciamento_81.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRequerimentodelavragarimpeira_82.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRequerimentodelavra_83.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRegistrodeextrao_84.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseReconhecimentogeolgico_85.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseLicenciamento_86.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseLavragarimpeira_87.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseDisponibilidade_88.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseDireitoderequereralavra_89.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseConcessodelavra_90.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseAutorizaodepesquisa_91.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseAptoparadisponibilidade_92.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_Municipios_2.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'LEG_1SIMP': 'no label', 'COUNT_': 'no label', 'Shape_Leng': 'no label', 'area_km2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'PONTO': 'no label', 'N': 'no label', 'W': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nome': 'no label', 'sigla': 'hidden field', 'areaHa': 'no label', 'perimetroM': 'hidden field', 'administra': 'hidden field', 'UF': 'hidden field', 'biomaIBGE': 'no label', 'CoordRegio': 'hidden field', 'municipios': 'hidden field', 'anoCriacao': 'hidden field', 'Territorio': 'inline label - visible with data', 'Decreto': 'hidden field', 'COD': 'hidden field', 'Hectares': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldLabels', {'id': 'hidden field', 'NomeUC': 'no label', 'Cnuc': 'hidden field', 'CriacaoAno': 'hidden field', 'AreaHaAlb': 'no label', 'PerimM': 'hidden field', 'CriacaoAto': 'hidden field', 'EsferaAdm': 'hidden field', 'SiglaCateg': 'hidden field', 'GrupoUC': 'hidden field', 'UFAbrang': 'hidden field', 'BiomaIBGE': 'no label', 'BiomaCRL': 'hidden field', 'GRegional': 'hidden field', 'FusoAbrang': 'hidden field', 'Demarcacao': 'hidden field', 'EscalaUC': 'hidden field', 'NGI': 'hidden field', 'Latitude': 'hidden field', 'Longi': 'hidden field', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nome': 'no label', 'sigla': 'hidden field', 'areaHa': 'no label', 'administra': 'hidden field', 'SiglaGrupo': 'hidden field', 'UF': 'hidden field', 'biomaIBGE': 'no label', 'biomaCRL': 'hidden field', 'CoordRegio': 'hidden field', 'municipios': 'hidden field', 'anoCriacao': 'hidden field', 'Territorio': 'inline label - visible with data', 'Decreto': 'hidden field', 'Hectares': 'hidden field', 'BUFF_DIST': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Processosminerrios_8.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'inline label - visible with data', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAMINERALALCBICGUAMINERALALC_9.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAMINERALCARBOGAS_10.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAMINERAL_11.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAPOTVELDEMESA_12.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_AMETISTA_13.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ANFIBOLITO_14.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARDSIA_15.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_AREIA_16.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARENITO_17.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILAREFRATRIA_18.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILA_19.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILITO_20.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ATAPULGITA_21.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_BASALTO_22.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCRIOCALCTICO_23.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCRIODOLOMTICO_24.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCRIO_25.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCEDNIA_26.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CARVOMINERAL_27.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CASCALHO_28.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CASSITERITA_29.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CAULIM_30.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_COBRE_31.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_COLUMBITA_32.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CONCHASCALCRIAS_33.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CONGLOMERADO_34.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CROMITA_35.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DADONOCADASTRADO_36.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIABSIO_37.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIAMANTEINDUSTRIAL_38.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIAMANTE_39.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FOSFATO_40.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GALENA_41.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GEMA_42.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GIPSITA_43.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GNAISSE_44.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRAFITA_45.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRANITO_46.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRANULITO_47.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ILMENITA_48.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_LATERITA_49.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MAGNESITA_50.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MANGANS_51.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MRMORE_52.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEALUMNIO_53.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODECOBRE_54.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODECROMO_55.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEFERRO_56.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODELTIO_57.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEMAGNSIO_58.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEMANGANS_59.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODENQUEL_60.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEOURO_61.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODETITNIO_62.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_NQUEL_63.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_OPALA_64.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_OURO_65.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_QUARTZITO_66.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_QUARTZO_67.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_RUTILO_68.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SAIBRO_69.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SAISDEMAGNSIO_70.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SAISDEPOTSSIO_71.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SEIXOS_72.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SIENITO_73.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SILTITO_74.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_TALCO_75.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_TERRASRARAS_76.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_VERMICULITA_77.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_XISTO_78.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRequerimentoderegistrodeextrao_79.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRequerimentodepesquisa_80.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRequerimentodelicenciamento_81.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRequerimentodelavragarimpeira_82.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRequerimentodelavra_83.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRegistrodeextrao_84.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseReconhecimentogeolgico_85.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseLicenciamento_86.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseLavragarimpeira_87.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseDisponibilidade_88.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseDireitoderequereralavra_89.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseConcessodelavra_90.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseAutorizaodepesquisa_91.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseAptoparadisponibilidade_92.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'inline label - visible with data', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseAptoparadisponibilidade_92.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});