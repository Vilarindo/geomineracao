ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-50.104848, -11.259625, -33.632468, -1.702468]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google Satellite</a>',
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
var format_ComunidadesTradicionais_9 = new ol.format.GeoJSON();
var features_ComunidadesTradicionais_9 = format_ComunidadesTradicionais_9.readFeatures(json_ComunidadesTradicionais_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ComunidadesTradicionais_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunidadesTradicionais_9.addFeatures(features_ComunidadesTradicionais_9);
var lyr_ComunidadesTradicionais_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunidadesTradicionais_9, 
                style: style_ComunidadesTradicionais_9,
                popuplayertitle: "Comunidades Tradicionais",
                interactive: true,
                title: '<img src="styles/legend/ComunidadesTradicionais_9.png" /> Comunidades Tradicionais'
            });
var format_XISTO_10 = new ol.format.GeoJSON();
var features_XISTO_10 = format_XISTO_10.readFeatures(json_XISTO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_XISTO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XISTO_10.addFeatures(features_XISTO_10);
var lyr_XISTO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XISTO_10, 
                style: style_XISTO_10,
                popuplayertitle: "XISTO",
                interactive: true,
                title: '<img src="styles/legend/XISTO_10.png" /> XISTO'
            });
var format_VERMICULITA_11 = new ol.format.GeoJSON();
var features_VERMICULITA_11 = format_VERMICULITA_11.readFeatures(json_VERMICULITA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_VERMICULITA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VERMICULITA_11.addFeatures(features_VERMICULITA_11);
var lyr_VERMICULITA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VERMICULITA_11, 
                style: style_VERMICULITA_11,
                popuplayertitle: "VERMICULITA",
                interactive: true,
                title: '<img src="styles/legend/VERMICULITA_11.png" /> VERMICULITA'
            });
var format_TERRASRARAS_12 = new ol.format.GeoJSON();
var features_TERRASRARAS_12 = format_TERRASRARAS_12.readFeatures(json_TERRASRARAS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TERRASRARAS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERRASRARAS_12.addFeatures(features_TERRASRARAS_12);
var lyr_TERRASRARAS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERRASRARAS_12, 
                style: style_TERRASRARAS_12,
                popuplayertitle: "TERRAS RARAS",
                interactive: true,
                title: '<img src="styles/legend/TERRASRARAS_12.png" /> TERRAS RARAS'
            });
var format_TALCO_13 = new ol.format.GeoJSON();
var features_TALCO_13 = format_TALCO_13.readFeatures(json_TALCO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_TALCO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TALCO_13.addFeatures(features_TALCO_13);
var lyr_TALCO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TALCO_13, 
                style: style_TALCO_13,
                popuplayertitle: "TALCO",
                interactive: true,
                title: '<img src="styles/legend/TALCO_13.png" /> TALCO'
            });
var format_SILTITO_14 = new ol.format.GeoJSON();
var features_SILTITO_14 = format_SILTITO_14.readFeatures(json_SILTITO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SILTITO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SILTITO_14.addFeatures(features_SILTITO_14);
var lyr_SILTITO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SILTITO_14, 
                style: style_SILTITO_14,
                popuplayertitle: "SILTITO",
                interactive: true,
                title: '<img src="styles/legend/SILTITO_14.png" /> SILTITO'
            });
var format_SIENITO_15 = new ol.format.GeoJSON();
var features_SIENITO_15 = format_SIENITO_15.readFeatures(json_SIENITO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SIENITO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIENITO_15.addFeatures(features_SIENITO_15);
var lyr_SIENITO_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SIENITO_15, 
                style: style_SIENITO_15,
                popuplayertitle: "SIENITO",
                interactive: true,
                title: '<img src="styles/legend/SIENITO_15.png" /> SIENITO'
            });
var format_SEIXOS_16 = new ol.format.GeoJSON();
var features_SEIXOS_16 = format_SEIXOS_16.readFeatures(json_SEIXOS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SEIXOS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEIXOS_16.addFeatures(features_SEIXOS_16);
var lyr_SEIXOS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEIXOS_16, 
                style: style_SEIXOS_16,
                popuplayertitle: "SEIXOS",
                interactive: true,
                title: '<img src="styles/legend/SEIXOS_16.png" /> SEIXOS'
            });
var format_SAISDEPOTSSIO_17 = new ol.format.GeoJSON();
var features_SAISDEPOTSSIO_17 = format_SAISDEPOTSSIO_17.readFeatures(json_SAISDEPOTSSIO_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SAISDEPOTSSIO_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAISDEPOTSSIO_17.addFeatures(features_SAISDEPOTSSIO_17);
var lyr_SAISDEPOTSSIO_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAISDEPOTSSIO_17, 
                style: style_SAISDEPOTSSIO_17,
                popuplayertitle: "SAIS DE POTÁSSIO",
                interactive: true,
                title: '<img src="styles/legend/SAISDEPOTSSIO_17.png" /> SAIS DE POTÁSSIO'
            });
var format_SAISDEMAGNSIO_18 = new ol.format.GeoJSON();
var features_SAISDEMAGNSIO_18 = format_SAISDEMAGNSIO_18.readFeatures(json_SAISDEMAGNSIO_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SAISDEMAGNSIO_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAISDEMAGNSIO_18.addFeatures(features_SAISDEMAGNSIO_18);
var lyr_SAISDEMAGNSIO_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAISDEMAGNSIO_18, 
                style: style_SAISDEMAGNSIO_18,
                popuplayertitle: "SAIS DE MAGNÉSIO",
                interactive: true,
                title: '<img src="styles/legend/SAISDEMAGNSIO_18.png" /> SAIS DE MAGNÉSIO'
            });
var format_SAIBRO_19 = new ol.format.GeoJSON();
var features_SAIBRO_19 = format_SAIBRO_19.readFeatures(json_SAIBRO_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_SAIBRO_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAIBRO_19.addFeatures(features_SAIBRO_19);
var lyr_SAIBRO_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAIBRO_19, 
                style: style_SAIBRO_19,
                popuplayertitle: "SAIBRO",
                interactive: true,
                title: '<img src="styles/legend/SAIBRO_19.png" /> SAIBRO'
            });
var format_RUTILO_20 = new ol.format.GeoJSON();
var features_RUTILO_20 = format_RUTILO_20.readFeatures(json_RUTILO_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_RUTILO_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTILO_20.addFeatures(features_RUTILO_20);
var lyr_RUTILO_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTILO_20, 
                style: style_RUTILO_20,
                popuplayertitle: "RUTILO",
                interactive: true,
                title: '<img src="styles/legend/RUTILO_20.png" /> RUTILO'
            });
var format_QUARTZO_21 = new ol.format.GeoJSON();
var features_QUARTZO_21 = format_QUARTZO_21.readFeatures(json_QUARTZO_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_QUARTZO_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUARTZO_21.addFeatures(features_QUARTZO_21);
var lyr_QUARTZO_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUARTZO_21, 
                style: style_QUARTZO_21,
                popuplayertitle: "QUARTZO",
                interactive: true,
                title: '<img src="styles/legend/QUARTZO_21.png" /> QUARTZO'
            });
var format_QUARTZITO_22 = new ol.format.GeoJSON();
var features_QUARTZITO_22 = format_QUARTZITO_22.readFeatures(json_QUARTZITO_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_QUARTZITO_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUARTZITO_22.addFeatures(features_QUARTZITO_22);
var lyr_QUARTZITO_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUARTZITO_22, 
                style: style_QUARTZITO_22,
                popuplayertitle: "QUARTZITO",
                interactive: true,
                title: '<img src="styles/legend/QUARTZITO_22.png" /> QUARTZITO'
            });
var format_OURO_23 = new ol.format.GeoJSON();
var features_OURO_23 = format_OURO_23.readFeatures(json_OURO_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_OURO_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OURO_23.addFeatures(features_OURO_23);
var lyr_OURO_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OURO_23, 
                style: style_OURO_23,
                popuplayertitle: "OURO",
                interactive: true,
                title: '<img src="styles/legend/OURO_23.png" /> OURO'
            });
var format_OPALA_24 = new ol.format.GeoJSON();
var features_OPALA_24 = format_OPALA_24.readFeatures(json_OPALA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_OPALA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPALA_24.addFeatures(features_OPALA_24);
var lyr_OPALA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPALA_24, 
                style: style_OPALA_24,
                popuplayertitle: "OPALA",
                interactive: true,
                title: '<img src="styles/legend/OPALA_24.png" /> OPALA'
            });
var format_NQUEL_25 = new ol.format.GeoJSON();
var features_NQUEL_25 = format_NQUEL_25.readFeatures(json_NQUEL_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_NQUEL_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQUEL_25.addFeatures(features_NQUEL_25);
var lyr_NQUEL_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQUEL_25, 
                style: style_NQUEL_25,
                popuplayertitle: "NÍQUEL",
                interactive: true,
                title: '<img src="styles/legend/NQUEL_25.png" /> NÍQUEL'
            });
var format_MINRIODETITNIO_26 = new ol.format.GeoJSON();
var features_MINRIODETITNIO_26 = format_MINRIODETITNIO_26.readFeatures(json_MINRIODETITNIO_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODETITNIO_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODETITNIO_26.addFeatures(features_MINRIODETITNIO_26);
var lyr_MINRIODETITNIO_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODETITNIO_26, 
                style: style_MINRIODETITNIO_26,
                popuplayertitle: "MINÉRIO DE TITÂNIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODETITNIO_26.png" /> MINÉRIO DE TITÂNIO'
            });
var format_MINRIODEOURO_27 = new ol.format.GeoJSON();
var features_MINRIODEOURO_27 = format_MINRIODEOURO_27.readFeatures(json_MINRIODEOURO_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEOURO_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEOURO_27.addFeatures(features_MINRIODEOURO_27);
var lyr_MINRIODEOURO_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEOURO_27, 
                style: style_MINRIODEOURO_27,
                popuplayertitle: "MINÉRIO DE OURO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEOURO_27.png" /> MINÉRIO DE OURO'
            });
var format_MINRIODENQUEL_28 = new ol.format.GeoJSON();
var features_MINRIODENQUEL_28 = format_MINRIODENQUEL_28.readFeatures(json_MINRIODENQUEL_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODENQUEL_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODENQUEL_28.addFeatures(features_MINRIODENQUEL_28);
var lyr_MINRIODENQUEL_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODENQUEL_28, 
                style: style_MINRIODENQUEL_28,
                popuplayertitle: "MINÉRIO DE NÍQUEL",
                interactive: true,
                title: '<img src="styles/legend/MINRIODENQUEL_28.png" /> MINÉRIO DE NÍQUEL'
            });
var format_MINRIODEMANGANS_29 = new ol.format.GeoJSON();
var features_MINRIODEMANGANS_29 = format_MINRIODEMANGANS_29.readFeatures(json_MINRIODEMANGANS_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEMANGANS_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEMANGANS_29.addFeatures(features_MINRIODEMANGANS_29);
var lyr_MINRIODEMANGANS_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEMANGANS_29, 
                style: style_MINRIODEMANGANS_29,
                popuplayertitle: "MINÉRIO DE MANGANÊS",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEMANGANS_29.png" /> MINÉRIO DE MANGANÊS'
            });
var format_MINRIODEMAGNSIO_30 = new ol.format.GeoJSON();
var features_MINRIODEMAGNSIO_30 = format_MINRIODEMAGNSIO_30.readFeatures(json_MINRIODEMAGNSIO_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEMAGNSIO_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEMAGNSIO_30.addFeatures(features_MINRIODEMAGNSIO_30);
var lyr_MINRIODEMAGNSIO_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEMAGNSIO_30, 
                style: style_MINRIODEMAGNSIO_30,
                popuplayertitle: "MINÉRIO DE MAGNÉSIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEMAGNSIO_30.png" /> MINÉRIO DE MAGNÉSIO'
            });
var format_MINRIODELTIO_31 = new ol.format.GeoJSON();
var features_MINRIODELTIO_31 = format_MINRIODELTIO_31.readFeatures(json_MINRIODELTIO_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODELTIO_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODELTIO_31.addFeatures(features_MINRIODELTIO_31);
var lyr_MINRIODELTIO_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODELTIO_31, 
                style: style_MINRIODELTIO_31,
                popuplayertitle: "MINÉRIO DE LÍTIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODELTIO_31.png" /> MINÉRIO DE LÍTIO'
            });
var format_MINRIODEFERRO_32 = new ol.format.GeoJSON();
var features_MINRIODEFERRO_32 = format_MINRIODEFERRO_32.readFeatures(json_MINRIODEFERRO_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEFERRO_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEFERRO_32.addFeatures(features_MINRIODEFERRO_32);
var lyr_MINRIODEFERRO_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEFERRO_32, 
                style: style_MINRIODEFERRO_32,
                popuplayertitle: "MINÉRIO DE FERRO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEFERRO_32.png" /> MINÉRIO DE FERRO'
            });
var format_MINRIODECROMO_33 = new ol.format.GeoJSON();
var features_MINRIODECROMO_33 = format_MINRIODECROMO_33.readFeatures(json_MINRIODECROMO_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODECROMO_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODECROMO_33.addFeatures(features_MINRIODECROMO_33);
var lyr_MINRIODECROMO_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODECROMO_33, 
                style: style_MINRIODECROMO_33,
                popuplayertitle: "MINÉRIO DE CROMO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODECROMO_33.png" /> MINÉRIO DE CROMO'
            });
var format_MINRIODECOBRE_34 = new ol.format.GeoJSON();
var features_MINRIODECOBRE_34 = format_MINRIODECOBRE_34.readFeatures(json_MINRIODECOBRE_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODECOBRE_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODECOBRE_34.addFeatures(features_MINRIODECOBRE_34);
var lyr_MINRIODECOBRE_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODECOBRE_34, 
                style: style_MINRIODECOBRE_34,
                popuplayertitle: "MINÉRIO DE COBRE",
                interactive: true,
                title: '<img src="styles/legend/MINRIODECOBRE_34.png" /> MINÉRIO DE COBRE'
            });
var format_MINRIODEALUMNIO_35 = new ol.format.GeoJSON();
var features_MINRIODEALUMNIO_35 = format_MINRIODEALUMNIO_35.readFeatures(json_MINRIODEALUMNIO_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MINRIODEALUMNIO_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINRIODEALUMNIO_35.addFeatures(features_MINRIODEALUMNIO_35);
var lyr_MINRIODEALUMNIO_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MINRIODEALUMNIO_35, 
                style: style_MINRIODEALUMNIO_35,
                popuplayertitle: "MINÉRIO DE ALUMÍNIO",
                interactive: true,
                title: '<img src="styles/legend/MINRIODEALUMNIO_35.png" /> MINÉRIO DE ALUMÍNIO'
            });
var format_MRMORE_36 = new ol.format.GeoJSON();
var features_MRMORE_36 = format_MRMORE_36.readFeatures(json_MRMORE_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MRMORE_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MRMORE_36.addFeatures(features_MRMORE_36);
var lyr_MRMORE_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MRMORE_36, 
                style: style_MRMORE_36,
                popuplayertitle: "MÁRMORE",
                interactive: true,
                title: '<img src="styles/legend/MRMORE_36.png" /> MÁRMORE'
            });
var format_MANGANS_37 = new ol.format.GeoJSON();
var features_MANGANS_37 = format_MANGANS_37.readFeatures(json_MANGANS_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MANGANS_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANGANS_37.addFeatures(features_MANGANS_37);
var lyr_MANGANS_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANGANS_37, 
                style: style_MANGANS_37,
                popuplayertitle: "MANGANÊS",
                interactive: true,
                title: '<img src="styles/legend/MANGANS_37.png" /> MANGANÊS'
            });
var format_MAGNESITA_38 = new ol.format.GeoJSON();
var features_MAGNESITA_38 = format_MAGNESITA_38.readFeatures(json_MAGNESITA_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_MAGNESITA_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAGNESITA_38.addFeatures(features_MAGNESITA_38);
var lyr_MAGNESITA_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAGNESITA_38, 
                style: style_MAGNESITA_38,
                popuplayertitle: "MAGNESITA",
                interactive: true,
                title: '<img src="styles/legend/MAGNESITA_38.png" /> MAGNESITA'
            });
var format_LATERITA_39 = new ol.format.GeoJSON();
var features_LATERITA_39 = format_LATERITA_39.readFeatures(json_LATERITA_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_LATERITA_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LATERITA_39.addFeatures(features_LATERITA_39);
var lyr_LATERITA_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LATERITA_39, 
                style: style_LATERITA_39,
                popuplayertitle: "LATERITA",
                interactive: true,
                title: '<img src="styles/legend/LATERITA_39.png" /> LATERITA'
            });
var format_ILMENITA_40 = new ol.format.GeoJSON();
var features_ILMENITA_40 = format_ILMENITA_40.readFeatures(json_ILMENITA_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ILMENITA_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ILMENITA_40.addFeatures(features_ILMENITA_40);
var lyr_ILMENITA_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ILMENITA_40, 
                style: style_ILMENITA_40,
                popuplayertitle: "ILMENITA",
                interactive: true,
                title: '<img src="styles/legend/ILMENITA_40.png" /> ILMENITA'
            });
var format_GRANULITO_41 = new ol.format.GeoJSON();
var features_GRANULITO_41 = format_GRANULITO_41.readFeatures(json_GRANULITO_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRANULITO_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANULITO_41.addFeatures(features_GRANULITO_41);
var lyr_GRANULITO_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANULITO_41, 
                style: style_GRANULITO_41,
                popuplayertitle: "GRANULITO",
                interactive: true,
                title: '<img src="styles/legend/GRANULITO_41.png" /> GRANULITO'
            });
var format_GRANITOPBRITA_42 = new ol.format.GeoJSON();
var features_GRANITOPBRITA_42 = format_GRANITOPBRITA_42.readFeatures(json_GRANITOPBRITA_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRANITOPBRITA_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANITOPBRITA_42.addFeatures(features_GRANITOPBRITA_42);
var lyr_GRANITOPBRITA_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANITOPBRITA_42, 
                style: style_GRANITOPBRITA_42,
                popuplayertitle: "GRANITO P/ BRITA",
                interactive: true,
                title: '<img src="styles/legend/GRANITOPBRITA_42.png" /> GRANITO P/ BRITA'
            });
var format_GRANITO_43 = new ol.format.GeoJSON();
var features_GRANITO_43 = format_GRANITO_43.readFeatures(json_GRANITO_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRANITO_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRANITO_43.addFeatures(features_GRANITO_43);
var lyr_GRANITO_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRANITO_43, 
                style: style_GRANITO_43,
                popuplayertitle: "GRANITO",
                interactive: true,
                title: '<img src="styles/legend/GRANITO_43.png" /> GRANITO'
            });
var format_GRAFITA_44 = new ol.format.GeoJSON();
var features_GRAFITA_44 = format_GRAFITA_44.readFeatures(json_GRAFITA_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GRAFITA_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRAFITA_44.addFeatures(features_GRAFITA_44);
var lyr_GRAFITA_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRAFITA_44, 
                style: style_GRAFITA_44,
                popuplayertitle: "GRAFITA",
                interactive: true,
                title: '<img src="styles/legend/GRAFITA_44.png" /> GRAFITA'
            });
var format_GNAISSE_45 = new ol.format.GeoJSON();
var features_GNAISSE_45 = format_GNAISSE_45.readFeatures(json_GNAISSE_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GNAISSE_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNAISSE_45.addFeatures(features_GNAISSE_45);
var lyr_GNAISSE_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNAISSE_45, 
                style: style_GNAISSE_45,
                popuplayertitle: "GNAISSE",
                interactive: true,
                title: '<img src="styles/legend/GNAISSE_45.png" /> GNAISSE'
            });
var format_GIPSITA_46 = new ol.format.GeoJSON();
var features_GIPSITA_46 = format_GIPSITA_46.readFeatures(json_GIPSITA_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GIPSITA_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GIPSITA_46.addFeatures(features_GIPSITA_46);
var lyr_GIPSITA_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GIPSITA_46, 
                style: style_GIPSITA_46,
                popuplayertitle: "GIPSITA",
                interactive: true,
                title: '<img src="styles/legend/GIPSITA_46.png" /> GIPSITA'
            });
var format_GEMA_47 = new ol.format.GeoJSON();
var features_GEMA_47 = format_GEMA_47.readFeatures(json_GEMA_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GEMA_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEMA_47.addFeatures(features_GEMA_47);
var lyr_GEMA_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEMA_47, 
                style: style_GEMA_47,
                popuplayertitle: "GEMA",
                interactive: true,
                title: '<img src="styles/legend/GEMA_47.png" /> GEMA'
            });
var format_GALENA_48 = new ol.format.GeoJSON();
var features_GALENA_48 = format_GALENA_48.readFeatures(json_GALENA_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GALENA_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GALENA_48.addFeatures(features_GALENA_48);
var lyr_GALENA_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GALENA_48, 
                style: style_GALENA_48,
                popuplayertitle: "GALENA",
                interactive: true,
                title: '<img src="styles/legend/GALENA_48.png" /> GALENA'
            });
var format_FOSFATO_49 = new ol.format.GeoJSON();
var features_FOSFATO_49 = format_FOSFATO_49.readFeatures(json_FOSFATO_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FOSFATO_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOSFATO_49.addFeatures(features_FOSFATO_49);
var lyr_FOSFATO_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOSFATO_49, 
                style: style_FOSFATO_49,
                popuplayertitle: "FOSFATO",
                interactive: true,
                title: '<img src="styles/legend/FOSFATO_49.png" /> FOSFATO'
            });
var format_DIAMANTEINDUSTRIAL_50 = new ol.format.GeoJSON();
var features_DIAMANTEINDUSTRIAL_50 = format_DIAMANTEINDUSTRIAL_50.readFeatures(json_DIAMANTEINDUSTRIAL_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIAMANTEINDUSTRIAL_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIAMANTEINDUSTRIAL_50.addFeatures(features_DIAMANTEINDUSTRIAL_50);
var lyr_DIAMANTEINDUSTRIAL_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIAMANTEINDUSTRIAL_50, 
                style: style_DIAMANTEINDUSTRIAL_50,
                popuplayertitle: "DIAMANTE INDUSTRIAL",
                interactive: true,
                title: '<img src="styles/legend/DIAMANTEINDUSTRIAL_50.png" /> DIAMANTE INDUSTRIAL'
            });
var format_DIAMANTE_51 = new ol.format.GeoJSON();
var features_DIAMANTE_51 = format_DIAMANTE_51.readFeatures(json_DIAMANTE_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIAMANTE_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIAMANTE_51.addFeatures(features_DIAMANTE_51);
var lyr_DIAMANTE_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIAMANTE_51, 
                style: style_DIAMANTE_51,
                popuplayertitle: "DIAMANTE",
                interactive: true,
                title: '<img src="styles/legend/DIAMANTE_51.png" /> DIAMANTE'
            });
var format_DIABSIOPBRITA_52 = new ol.format.GeoJSON();
var features_DIABSIOPBRITA_52 = format_DIABSIOPBRITA_52.readFeatures(json_DIABSIOPBRITA_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIABSIOPBRITA_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIABSIOPBRITA_52.addFeatures(features_DIABSIOPBRITA_52);
var lyr_DIABSIOPBRITA_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIABSIOPBRITA_52, 
                style: style_DIABSIOPBRITA_52,
                popuplayertitle: "DIABÁSIO P/ BRITA",
                interactive: true,
                title: '<img src="styles/legend/DIABSIOPBRITA_52.png" /> DIABÁSIO P/ BRITA'
            });
var format_DIABSIO_53 = new ol.format.GeoJSON();
var features_DIABSIO_53 = format_DIABSIO_53.readFeatures(json_DIABSIO_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DIABSIO_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIABSIO_53.addFeatures(features_DIABSIO_53);
var lyr_DIABSIO_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIABSIO_53, 
                style: style_DIABSIO_53,
                popuplayertitle: "DIABÁSIO",
                interactive: true,
                title: '<img src="styles/legend/DIABSIO_53.png" /> DIABÁSIO'
            });
var format_DADONOCADASTRADO_54 = new ol.format.GeoJSON();
var features_DADONOCADASTRADO_54 = format_DADONOCADASTRADO_54.readFeatures(json_DADONOCADASTRADO_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_DADONOCADASTRADO_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DADONOCADASTRADO_54.addFeatures(features_DADONOCADASTRADO_54);
var lyr_DADONOCADASTRADO_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DADONOCADASTRADO_54, 
                style: style_DADONOCADASTRADO_54,
                popuplayertitle: "DADO NÃO CADASTRADO",
                interactive: true,
                title: '<img src="styles/legend/DADONOCADASTRADO_54.png" /> DADO NÃO CADASTRADO'
            });
var format_CROMITA_55 = new ol.format.GeoJSON();
var features_CROMITA_55 = format_CROMITA_55.readFeatures(json_CROMITA_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CROMITA_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CROMITA_55.addFeatures(features_CROMITA_55);
var lyr_CROMITA_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CROMITA_55, 
                style: style_CROMITA_55,
                popuplayertitle: "CROMITA",
                interactive: true,
                title: '<img src="styles/legend/CROMITA_55.png" /> CROMITA'
            });
var format_CONGLOMERADO_56 = new ol.format.GeoJSON();
var features_CONGLOMERADO_56 = format_CONGLOMERADO_56.readFeatures(json_CONGLOMERADO_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CONGLOMERADO_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONGLOMERADO_56.addFeatures(features_CONGLOMERADO_56);
var lyr_CONGLOMERADO_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONGLOMERADO_56, 
                style: style_CONGLOMERADO_56,
                popuplayertitle: "CONGLOMERADO",
                interactive: true,
                title: '<img src="styles/legend/CONGLOMERADO_56.png" /> CONGLOMERADO'
            });
var format_CONCHASCALCRIAS_57 = new ol.format.GeoJSON();
var features_CONCHASCALCRIAS_57 = format_CONCHASCALCRIAS_57.readFeatures(json_CONCHASCALCRIAS_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CONCHASCALCRIAS_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONCHASCALCRIAS_57.addFeatures(features_CONCHASCALCRIAS_57);
var lyr_CONCHASCALCRIAS_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONCHASCALCRIAS_57, 
                style: style_CONCHASCALCRIAS_57,
                popuplayertitle: "CONCHAS CALCÁRIAS",
                interactive: true,
                title: '<img src="styles/legend/CONCHASCALCRIAS_57.png" /> CONCHAS CALCÁRIAS'
            });
var format_COLUMBITA_58 = new ol.format.GeoJSON();
var features_COLUMBITA_58 = format_COLUMBITA_58.readFeatures(json_COLUMBITA_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_COLUMBITA_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLUMBITA_58.addFeatures(features_COLUMBITA_58);
var lyr_COLUMBITA_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLUMBITA_58, 
                style: style_COLUMBITA_58,
                popuplayertitle: "COLUMBITA",
                interactive: true,
                title: '<img src="styles/legend/COLUMBITA_58.png" /> COLUMBITA'
            });
var format_COBRE_59 = new ol.format.GeoJSON();
var features_COBRE_59 = format_COBRE_59.readFeatures(json_COBRE_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_COBRE_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COBRE_59.addFeatures(features_COBRE_59);
var lyr_COBRE_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COBRE_59, 
                style: style_COBRE_59,
                popuplayertitle: "COBRE",
                interactive: true,
                title: '<img src="styles/legend/COBRE_59.png" /> COBRE'
            });
var format_CAULIM_60 = new ol.format.GeoJSON();
var features_CAULIM_60 = format_CAULIM_60.readFeatures(json_CAULIM_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CAULIM_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAULIM_60.addFeatures(features_CAULIM_60);
var lyr_CAULIM_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAULIM_60, 
                style: style_CAULIM_60,
                popuplayertitle: "CAULIM",
                interactive: true,
                title: '<img src="styles/legend/CAULIM_60.png" /> CAULIM'
            });
var format_CASSITERITA_61 = new ol.format.GeoJSON();
var features_CASSITERITA_61 = format_CASSITERITA_61.readFeatures(json_CASSITERITA_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CASSITERITA_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASSITERITA_61.addFeatures(features_CASSITERITA_61);
var lyr_CASSITERITA_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASSITERITA_61, 
                style: style_CASSITERITA_61,
                popuplayertitle: "CASSITERITA",
                interactive: true,
                title: '<img src="styles/legend/CASSITERITA_61.png" /> CASSITERITA'
            });
var format_CASCALHO_62 = new ol.format.GeoJSON();
var features_CASCALHO_62 = format_CASCALHO_62.readFeatures(json_CASCALHO_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CASCALHO_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CASCALHO_62.addFeatures(features_CASCALHO_62);
var lyr_CASCALHO_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CASCALHO_62, 
                style: style_CASCALHO_62,
                popuplayertitle: "CASCALHO",
                interactive: true,
                title: '<img src="styles/legend/CASCALHO_62.png" /> CASCALHO'
            });
var format_CARVOMINERAL_63 = new ol.format.GeoJSON();
var features_CARVOMINERAL_63 = format_CARVOMINERAL_63.readFeatures(json_CARVOMINERAL_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CARVOMINERAL_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARVOMINERAL_63.addFeatures(features_CARVOMINERAL_63);
var lyr_CARVOMINERAL_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARVOMINERAL_63, 
                style: style_CARVOMINERAL_63,
                popuplayertitle: "CARVÃO MINERAL",
                interactive: true,
                title: '<img src="styles/legend/CARVOMINERAL_63.png" /> CARVÃO MINERAL'
            });
var format_CALCEDNIA_64 = new ol.format.GeoJSON();
var features_CALCEDNIA_64 = format_CALCEDNIA_64.readFeatures(json_CALCEDNIA_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCEDNIA_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCEDNIA_64.addFeatures(features_CALCEDNIA_64);
var lyr_CALCEDNIA_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCEDNIA_64, 
                style: style_CALCEDNIA_64,
                popuplayertitle: "CALCEDÔNIA",
                interactive: true,
                title: '<img src="styles/legend/CALCEDNIA_64.png" /> CALCEDÔNIA'
            });
var format_CALCRIODOLOMTICO_65 = new ol.format.GeoJSON();
var features_CALCRIODOLOMTICO_65 = format_CALCRIODOLOMTICO_65.readFeatures(json_CALCRIODOLOMTICO_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCRIODOLOMTICO_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCRIODOLOMTICO_65.addFeatures(features_CALCRIODOLOMTICO_65);
var lyr_CALCRIODOLOMTICO_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCRIODOLOMTICO_65, 
                style: style_CALCRIODOLOMTICO_65,
                popuplayertitle: "CALCÁRIO DOLOMÍTICO",
                interactive: true,
                title: '<img src="styles/legend/CALCRIODOLOMTICO_65.png" /> CALCÁRIO DOLOMÍTICO'
            });
var format_CALCRIOCALCTICO_66 = new ol.format.GeoJSON();
var features_CALCRIOCALCTICO_66 = format_CALCRIOCALCTICO_66.readFeatures(json_CALCRIOCALCTICO_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCRIOCALCTICO_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCRIOCALCTICO_66.addFeatures(features_CALCRIOCALCTICO_66);
var lyr_CALCRIOCALCTICO_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCRIOCALCTICO_66, 
                style: style_CALCRIOCALCTICO_66,
                popuplayertitle: "CALCÁRIO CALCÍTICO",
                interactive: true,
                title: '<img src="styles/legend/CALCRIOCALCTICO_66.png" /> CALCÁRIO CALCÍTICO'
            });
var format_CALCRIO_67 = new ol.format.GeoJSON();
var features_CALCRIO_67 = format_CALCRIO_67.readFeatures(json_CALCRIO_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_CALCRIO_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CALCRIO_67.addFeatures(features_CALCRIO_67);
var lyr_CALCRIO_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CALCRIO_67, 
                style: style_CALCRIO_67,
                popuplayertitle: "CALCÁRIO",
                interactive: true,
                title: '<img src="styles/legend/CALCRIO_67.png" /> CALCÁRIO'
            });
var format_BASALTO_68 = new ol.format.GeoJSON();
var features_BASALTO_68 = format_BASALTO_68.readFeatures(json_BASALTO_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_BASALTO_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BASALTO_68.addFeatures(features_BASALTO_68);
var lyr_BASALTO_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BASALTO_68, 
                style: style_BASALTO_68,
                popuplayertitle: "BASALTO",
                interactive: true,
                title: '<img src="styles/legend/BASALTO_68.png" /> BASALTO'
            });
var format_ATAPULGITA_69 = new ol.format.GeoJSON();
var features_ATAPULGITA_69 = format_ATAPULGITA_69.readFeatures(json_ATAPULGITA_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ATAPULGITA_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ATAPULGITA_69.addFeatures(features_ATAPULGITA_69);
var lyr_ATAPULGITA_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ATAPULGITA_69, 
                style: style_ATAPULGITA_69,
                popuplayertitle: "ATAPULGITA",
                interactive: true,
                title: '<img src="styles/legend/ATAPULGITA_69.png" /> ATAPULGITA'
            });
var format_ARGILITO_70 = new ol.format.GeoJSON();
var features_ARGILITO_70 = format_ARGILITO_70.readFeatures(json_ARGILITO_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILITO_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILITO_70.addFeatures(features_ARGILITO_70);
var lyr_ARGILITO_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILITO_70, 
                style: style_ARGILITO_70,
                popuplayertitle: "ARGILITO",
                interactive: true,
                title: '<img src="styles/legend/ARGILITO_70.png" /> ARGILITO'
            });
var format_ARGILAREFRATRIA_71 = new ol.format.GeoJSON();
var features_ARGILAREFRATRIA_71 = format_ARGILAREFRATRIA_71.readFeatures(json_ARGILAREFRATRIA_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILAREFRATRIA_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILAREFRATRIA_71.addFeatures(features_ARGILAREFRATRIA_71);
var lyr_ARGILAREFRATRIA_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILAREFRATRIA_71, 
                style: style_ARGILAREFRATRIA_71,
                popuplayertitle: "ARGILA REFRATÁRIA",
                interactive: true,
                title: '<img src="styles/legend/ARGILAREFRATRIA_71.png" /> ARGILA REFRATÁRIA'
            });
var format_ARGILAPCERVERMELH_72 = new ol.format.GeoJSON();
var features_ARGILAPCERVERMELH_72 = format_ARGILAPCERVERMELH_72.readFeatures(json_ARGILAPCERVERMELH_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILAPCERVERMELH_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILAPCERVERMELH_72.addFeatures(features_ARGILAPCERVERMELH_72);
var lyr_ARGILAPCERVERMELH_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILAPCERVERMELH_72, 
                style: style_ARGILAPCERVERMELH_72,
                popuplayertitle: "ARGILA P/CER. VERMELH",
                interactive: true,
                title: '<img src="styles/legend/ARGILAPCERVERMELH_72.png" /> ARGILA P/CER. VERMELH'
            });
var format_ARGILA_73 = new ol.format.GeoJSON();
var features_ARGILA_73 = format_ARGILA_73.readFeatures(json_ARGILA_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARGILA_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARGILA_73.addFeatures(features_ARGILA_73);
var lyr_ARGILA_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARGILA_73, 
                style: style_ARGILA_73,
                popuplayertitle: "ARGILA",
                interactive: true,
                title: '<img src="styles/legend/ARGILA_73.png" /> ARGILA'
            });
var format_ARENITO_74 = new ol.format.GeoJSON();
var features_ARENITO_74 = format_ARENITO_74.readFeatures(json_ARENITO_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARENITO_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENITO_74.addFeatures(features_ARENITO_74);
var lyr_ARENITO_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARENITO_74, 
                style: style_ARENITO_74,
                popuplayertitle: "ARENITO",
                interactive: true,
                title: '<img src="styles/legend/ARENITO_74.png" /> ARENITO'
            });
var format_AREIA_75 = new ol.format.GeoJSON();
var features_AREIA_75 = format_AREIA_75.readFeatures(json_AREIA_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AREIA_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREIA_75.addFeatures(features_AREIA_75);
var lyr_AREIA_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREIA_75, 
                style: style_AREIA_75,
                popuplayertitle: "AREIA",
                interactive: true,
                title: '<img src="styles/legend/AREIA_75.png" /> AREIA'
            });
var format_ARDSIA_76 = new ol.format.GeoJSON();
var features_ARDSIA_76 = format_ARDSIA_76.readFeatures(json_ARDSIA_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ARDSIA_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARDSIA_76.addFeatures(features_ARDSIA_76);
var lyr_ARDSIA_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARDSIA_76, 
                style: style_ARDSIA_76,
                popuplayertitle: "ARDÓSIA",
                interactive: true,
                title: '<img src="styles/legend/ARDSIA_76.png" /> ARDÓSIA'
            });
var format_ANFIBOLITO_77 = new ol.format.GeoJSON();
var features_ANFIBOLITO_77 = format_ANFIBOLITO_77.readFeatures(json_ANFIBOLITO_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ANFIBOLITO_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANFIBOLITO_77.addFeatures(features_ANFIBOLITO_77);
var lyr_ANFIBOLITO_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANFIBOLITO_77, 
                style: style_ANFIBOLITO_77,
                popuplayertitle: "ANFIBOLITO",
                interactive: true,
                title: '<img src="styles/legend/ANFIBOLITO_77.png" /> ANFIBOLITO'
            });
var format_AMETISTA_78 = new ol.format.GeoJSON();
var features_AMETISTA_78 = format_AMETISTA_78.readFeatures(json_AMETISTA_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_AMETISTA_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMETISTA_78.addFeatures(features_AMETISTA_78);
var lyr_AMETISTA_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMETISTA_78, 
                style: style_AMETISTA_78,
                popuplayertitle: "AMETISTA",
                interactive: true,
                title: '<img src="styles/legend/AMETISTA_78.png" /> AMETISTA'
            });
var format_GUAPOTVELDEMESA_79 = new ol.format.GeoJSON();
var features_GUAPOTVELDEMESA_79 = format_GUAPOTVELDEMESA_79.readFeatures(json_GUAPOTVELDEMESA_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAPOTVELDEMESA_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAPOTVELDEMESA_79.addFeatures(features_GUAPOTVELDEMESA_79);
var lyr_GUAPOTVELDEMESA_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAPOTVELDEMESA_79, 
                style: style_GUAPOTVELDEMESA_79,
                popuplayertitle: "ÁGUA POTÁVEL DE MESA",
                interactive: true,
                title: '<img src="styles/legend/GUAPOTVELDEMESA_79.png" /> ÁGUA POTÁVEL DE MESA'
            });
var format_GUAMINERALCARBOGAS_80 = new ol.format.GeoJSON();
var features_GUAMINERALCARBOGAS_80 = format_GUAMINERALCARBOGAS_80.readFeatures(json_GUAMINERALCARBOGAS_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAMINERALCARBOGAS_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAMINERALCARBOGAS_80.addFeatures(features_GUAMINERALCARBOGAS_80);
var lyr_GUAMINERALCARBOGAS_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAMINERALCARBOGAS_80, 
                style: style_GUAMINERALCARBOGAS_80,
                popuplayertitle: "ÁGUA MINERAL CARBOGAS",
                interactive: true,
                title: '<img src="styles/legend/GUAMINERALCARBOGAS_80.png" /> ÁGUA MINERAL CARBOGAS'
            });
var format_GUAMINERALALCBIC_81 = new ol.format.GeoJSON();
var features_GUAMINERALALCBIC_81 = format_GUAMINERALALCBIC_81.readFeatures(json_GUAMINERALALCBIC_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAMINERALALCBIC_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAMINERALALCBIC_81.addFeatures(features_GUAMINERALALCBIC_81);
var lyr_GUAMINERALALCBIC_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAMINERALALCBIC_81, 
                style: style_GUAMINERALALCBIC_81,
                popuplayertitle: "ÁGUA MINERAL ALC. BIC",
                interactive: true,
                title: '<img src="styles/legend/GUAMINERALALCBIC_81.png" /> ÁGUA MINERAL ALC. BIC'
            });
var format_GUAMINERAL_82 = new ol.format.GeoJSON();
var features_GUAMINERAL_82 = format_GUAMINERAL_82.readFeatures(json_GUAMINERAL_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_GUAMINERAL_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GUAMINERAL_82.addFeatures(features_GUAMINERAL_82);
var lyr_GUAMINERAL_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GUAMINERAL_82, 
                style: style_GUAMINERAL_82,
                popuplayertitle: "ÁGUA MINERAL",
                interactive: true,
                title: '<img src="styles/legend/GUAMINERAL_82.png" /> ÁGUA MINERAL'
            });
var format_FaseREQUERIMENTODEREGISTRODEEXTRAO_83 = new ol.format.GeoJSON();
var features_FaseREQUERIMENTODEREGISTRODEEXTRAO_83 = format_FaseREQUERIMENTODEREGISTRODEEXTRAO_83.readFeatures(json_FaseREQUERIMENTODEREGISTRODEEXTRAO_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseREQUERIMENTODEREGISTRODEEXTRAO_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseREQUERIMENTODEREGISTRODEEXTRAO_83.addFeatures(features_FaseREQUERIMENTODEREGISTRODEEXTRAO_83);
var lyr_FaseREQUERIMENTODEREGISTRODEEXTRAO_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseREQUERIMENTODEREGISTRODEEXTRAO_83, 
                style: style_FaseREQUERIMENTODEREGISTRODEEXTRAO_83,
                popuplayertitle: "Fase - REQUERIMENTO DE REGISTRO DE EXTRAÇÃO",
                interactive: true,
                title: '<img src="styles/legend/FaseREQUERIMENTODEREGISTRODEEXTRAO_83.png" /> Fase - REQUERIMENTO DE REGISTRO DE EXTRAÇÃO'
            });
var format_FaseREQUERIMENTODEPESQUISA_84 = new ol.format.GeoJSON();
var features_FaseREQUERIMENTODEPESQUISA_84 = format_FaseREQUERIMENTODEPESQUISA_84.readFeatures(json_FaseREQUERIMENTODEPESQUISA_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseREQUERIMENTODEPESQUISA_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseREQUERIMENTODEPESQUISA_84.addFeatures(features_FaseREQUERIMENTODEPESQUISA_84);
var lyr_FaseREQUERIMENTODEPESQUISA_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseREQUERIMENTODEPESQUISA_84, 
                style: style_FaseREQUERIMENTODEPESQUISA_84,
                popuplayertitle: "Fase - REQUERIMENTO DE PESQUISA",
                interactive: true,
                title: '<img src="styles/legend/FaseREQUERIMENTODEPESQUISA_84.png" /> Fase - REQUERIMENTO DE PESQUISA'
            });
var format_FaseREQUERIMENTODELICENCIAMENTO_85 = new ol.format.GeoJSON();
var features_FaseREQUERIMENTODELICENCIAMENTO_85 = format_FaseREQUERIMENTODELICENCIAMENTO_85.readFeatures(json_FaseREQUERIMENTODELICENCIAMENTO_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseREQUERIMENTODELICENCIAMENTO_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseREQUERIMENTODELICENCIAMENTO_85.addFeatures(features_FaseREQUERIMENTODELICENCIAMENTO_85);
var lyr_FaseREQUERIMENTODELICENCIAMENTO_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseREQUERIMENTODELICENCIAMENTO_85, 
                style: style_FaseREQUERIMENTODELICENCIAMENTO_85,
                popuplayertitle: "Fase - REQUERIMENTO DE LICENCIAMENTO",
                interactive: true,
                title: '<img src="styles/legend/FaseREQUERIMENTODELICENCIAMENTO_85.png" /> Fase - REQUERIMENTO DE LICENCIAMENTO'
            });
var format_FaseREQUERIMENTODELAVRAGARIMPEIRA_86 = new ol.format.GeoJSON();
var features_FaseREQUERIMENTODELAVRAGARIMPEIRA_86 = format_FaseREQUERIMENTODELAVRAGARIMPEIRA_86.readFeatures(json_FaseREQUERIMENTODELAVRAGARIMPEIRA_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseREQUERIMENTODELAVRAGARIMPEIRA_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseREQUERIMENTODELAVRAGARIMPEIRA_86.addFeatures(features_FaseREQUERIMENTODELAVRAGARIMPEIRA_86);
var lyr_FaseREQUERIMENTODELAVRAGARIMPEIRA_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseREQUERIMENTODELAVRAGARIMPEIRA_86, 
                style: style_FaseREQUERIMENTODELAVRAGARIMPEIRA_86,
                popuplayertitle: "Fase - REQUERIMENTO DE LAVRA GARIMPEIRA",
                interactive: true,
                title: '<img src="styles/legend/FaseREQUERIMENTODELAVRAGARIMPEIRA_86.png" /> Fase - REQUERIMENTO DE LAVRA GARIMPEIRA'
            });
var format_FaseREQUERIMENTODELAVRA_87 = new ol.format.GeoJSON();
var features_FaseREQUERIMENTODELAVRA_87 = format_FaseREQUERIMENTODELAVRA_87.readFeatures(json_FaseREQUERIMENTODELAVRA_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseREQUERIMENTODELAVRA_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseREQUERIMENTODELAVRA_87.addFeatures(features_FaseREQUERIMENTODELAVRA_87);
var lyr_FaseREQUERIMENTODELAVRA_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseREQUERIMENTODELAVRA_87, 
                style: style_FaseREQUERIMENTODELAVRA_87,
                popuplayertitle: "Fase - REQUERIMENTO DE LAVRA",
                interactive: true,
                title: '<img src="styles/legend/FaseREQUERIMENTODELAVRA_87.png" /> Fase - REQUERIMENTO DE LAVRA'
            });
var format_FaseREGISTRODEEXTRAO_88 = new ol.format.GeoJSON();
var features_FaseREGISTRODEEXTRAO_88 = format_FaseREGISTRODEEXTRAO_88.readFeatures(json_FaseREGISTRODEEXTRAO_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseREGISTRODEEXTRAO_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseREGISTRODEEXTRAO_88.addFeatures(features_FaseREGISTRODEEXTRAO_88);
var lyr_FaseREGISTRODEEXTRAO_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseREGISTRODEEXTRAO_88, 
                style: style_FaseREGISTRODEEXTRAO_88,
                popuplayertitle: "Fase - REGISTRO DE EXTRAÇÃO",
                interactive: true,
                title: '<img src="styles/legend/FaseREGISTRODEEXTRAO_88.png" /> Fase - REGISTRO DE EXTRAÇÃO'
            });
var format_FaseRECONHECIMENTOGEOLGICO_89 = new ol.format.GeoJSON();
var features_FaseRECONHECIMENTOGEOLGICO_89 = format_FaseRECONHECIMENTOGEOLGICO_89.readFeatures(json_FaseRECONHECIMENTOGEOLGICO_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseRECONHECIMENTOGEOLGICO_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseRECONHECIMENTOGEOLGICO_89.addFeatures(features_FaseRECONHECIMENTOGEOLGICO_89);
var lyr_FaseRECONHECIMENTOGEOLGICO_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseRECONHECIMENTOGEOLGICO_89, 
                style: style_FaseRECONHECIMENTOGEOLGICO_89,
                popuplayertitle: "Fase - RECONHECIMENTO GEOLÓGICO",
                interactive: true,
                title: '<img src="styles/legend/FaseRECONHECIMENTOGEOLGICO_89.png" /> Fase - RECONHECIMENTO GEOLÓGICO'
            });
var format_FaseLICENCIAMENTO_90 = new ol.format.GeoJSON();
var features_FaseLICENCIAMENTO_90 = format_FaseLICENCIAMENTO_90.readFeatures(json_FaseLICENCIAMENTO_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseLICENCIAMENTO_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseLICENCIAMENTO_90.addFeatures(features_FaseLICENCIAMENTO_90);
var lyr_FaseLICENCIAMENTO_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseLICENCIAMENTO_90, 
                style: style_FaseLICENCIAMENTO_90,
                popuplayertitle: "Fase - LICENCIAMENTO",
                interactive: true,
                title: '<img src="styles/legend/FaseLICENCIAMENTO_90.png" /> Fase - LICENCIAMENTO'
            });
var format_FaseLAVRAGARIMPEIRA_91 = new ol.format.GeoJSON();
var features_FaseLAVRAGARIMPEIRA_91 = format_FaseLAVRAGARIMPEIRA_91.readFeatures(json_FaseLAVRAGARIMPEIRA_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseLAVRAGARIMPEIRA_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseLAVRAGARIMPEIRA_91.addFeatures(features_FaseLAVRAGARIMPEIRA_91);
var lyr_FaseLAVRAGARIMPEIRA_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseLAVRAGARIMPEIRA_91, 
                style: style_FaseLAVRAGARIMPEIRA_91,
                popuplayertitle: "Fase - LAVRA GARIMPEIRA",
                interactive: true,
                title: '<img src="styles/legend/FaseLAVRAGARIMPEIRA_91.png" /> Fase - LAVRA GARIMPEIRA'
            });
var format_FaseDISPONIBILIDADE_92 = new ol.format.GeoJSON();
var features_FaseDISPONIBILIDADE_92 = format_FaseDISPONIBILIDADE_92.readFeatures(json_FaseDISPONIBILIDADE_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseDISPONIBILIDADE_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseDISPONIBILIDADE_92.addFeatures(features_FaseDISPONIBILIDADE_92);
var lyr_FaseDISPONIBILIDADE_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseDISPONIBILIDADE_92, 
                style: style_FaseDISPONIBILIDADE_92,
                popuplayertitle: "Fase - DISPONIBILIDADE",
                interactive: true,
                title: '<img src="styles/legend/FaseDISPONIBILIDADE_92.png" /> Fase - DISPONIBILIDADE'
            });
var format_FaseDIREITODEREQUERERALAVRA_93 = new ol.format.GeoJSON();
var features_FaseDIREITODEREQUERERALAVRA_93 = format_FaseDIREITODEREQUERERALAVRA_93.readFeatures(json_FaseDIREITODEREQUERERALAVRA_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseDIREITODEREQUERERALAVRA_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseDIREITODEREQUERERALAVRA_93.addFeatures(features_FaseDIREITODEREQUERERALAVRA_93);
var lyr_FaseDIREITODEREQUERERALAVRA_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseDIREITODEREQUERERALAVRA_93, 
                style: style_FaseDIREITODEREQUERERALAVRA_93,
                popuplayertitle: "Fase - DIREITO DE REQUERER A LAVRA",
                interactive: true,
                title: '<img src="styles/legend/FaseDIREITODEREQUERERALAVRA_93.png" /> Fase - DIREITO DE REQUERER A LAVRA'
            });
var format_FaseCONCESSODELAVRA_94 = new ol.format.GeoJSON();
var features_FaseCONCESSODELAVRA_94 = format_FaseCONCESSODELAVRA_94.readFeatures(json_FaseCONCESSODELAVRA_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseCONCESSODELAVRA_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseCONCESSODELAVRA_94.addFeatures(features_FaseCONCESSODELAVRA_94);
var lyr_FaseCONCESSODELAVRA_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseCONCESSODELAVRA_94, 
                style: style_FaseCONCESSODELAVRA_94,
                popuplayertitle: "Fase - CONCESSÃO DE LAVRA",
                interactive: true,
                title: '<img src="styles/legend/FaseCONCESSODELAVRA_94.png" /> Fase - CONCESSÃO DE LAVRA'
            });
var format_FaseAUTORIZAODEPESQUISA_95 = new ol.format.GeoJSON();
var features_FaseAUTORIZAODEPESQUISA_95 = format_FaseAUTORIZAODEPESQUISA_95.readFeatures(json_FaseAUTORIZAODEPESQUISA_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseAUTORIZAODEPESQUISA_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseAUTORIZAODEPESQUISA_95.addFeatures(features_FaseAUTORIZAODEPESQUISA_95);
var lyr_FaseAUTORIZAODEPESQUISA_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseAUTORIZAODEPESQUISA_95, 
                style: style_FaseAUTORIZAODEPESQUISA_95,
                popuplayertitle: "Fase - AUTORIZAÇÃO DE PESQUISA",
                interactive: true,
                title: '<img src="styles/legend/FaseAUTORIZAODEPESQUISA_95.png" /> Fase - AUTORIZAÇÃO DE PESQUISA'
            });
var format_FaseAPTOPARADISPONIBILIDADE_96 = new ol.format.GeoJSON();
var features_FaseAPTOPARADISPONIBILIDADE_96 = format_FaseAPTOPARADISPONIBILIDADE_96.readFeatures(json_FaseAPTOPARADISPONIBILIDADE_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_FaseAPTOPARADISPONIBILIDADE_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaseAPTOPARADISPONIBILIDADE_96.addFeatures(features_FaseAPTOPARADISPONIBILIDADE_96);
var lyr_FaseAPTOPARADISPONIBILIDADE_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaseAPTOPARADISPONIBILIDADE_96, 
                style: style_FaseAPTOPARADISPONIBILIDADE_96,
                popuplayertitle: "Fase - APTO PARA DISPONIBILIDADE",
                interactive: true,
                title: '<img src="styles/legend/FaseAPTOPARADISPONIBILIDADE_96.png" /> Fase - APTO PARA DISPONIBILIDADE'
            });
var format_reaLitgio_97 = new ol.format.GeoJSON();
var features_reaLitgio_97 = format_reaLitgio_97.readFeatures(json_reaLitgio_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_reaLitgio_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaLitgio_97.addFeatures(features_reaLitgio_97);
var lyr_reaLitgio_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaLitgio_97, 
                style: style_reaLitgio_97,
                popuplayertitle: "Área Litígio",
                interactive: true,
                title: '<img src="styles/legend/reaLitgio_97.png" /> Área Litígio'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Municipios_2.setVisible(true);lyr_readeaplicaodaLeideMataAtlnticaPI_3.setVisible(true);lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.setVisible(true);lyr_UnidadesdeConservaoEstadualPI_5.setVisible(true);lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.setVisible(true);lyr_ZonadeAmortecimentodasUCsPI3Km_7.setVisible(true);lyr_Processosminerrios_8.setVisible(false);lyr_ComunidadesTradicionais_9.setVisible(true);lyr_XISTO_10.setVisible(false);lyr_VERMICULITA_11.setVisible(false);lyr_TERRASRARAS_12.setVisible(false);lyr_TALCO_13.setVisible(false);lyr_SILTITO_14.setVisible(false);lyr_SIENITO_15.setVisible(false);lyr_SEIXOS_16.setVisible(false);lyr_SAISDEPOTSSIO_17.setVisible(false);lyr_SAISDEMAGNSIO_18.setVisible(false);lyr_SAIBRO_19.setVisible(false);lyr_RUTILO_20.setVisible(false);lyr_QUARTZO_21.setVisible(false);lyr_QUARTZITO_22.setVisible(false);lyr_OURO_23.setVisible(false);lyr_OPALA_24.setVisible(false);lyr_NQUEL_25.setVisible(false);lyr_MINRIODETITNIO_26.setVisible(false);lyr_MINRIODEOURO_27.setVisible(false);lyr_MINRIODENQUEL_28.setVisible(false);lyr_MINRIODEMANGANS_29.setVisible(false);lyr_MINRIODEMAGNSIO_30.setVisible(false);lyr_MINRIODELTIO_31.setVisible(false);lyr_MINRIODEFERRO_32.setVisible(false);lyr_MINRIODECROMO_33.setVisible(false);lyr_MINRIODECOBRE_34.setVisible(false);lyr_MINRIODEALUMNIO_35.setVisible(false);lyr_MRMORE_36.setVisible(false);lyr_MANGANS_37.setVisible(false);lyr_MAGNESITA_38.setVisible(false);lyr_LATERITA_39.setVisible(false);lyr_ILMENITA_40.setVisible(false);lyr_GRANULITO_41.setVisible(false);lyr_GRANITOPBRITA_42.setVisible(false);lyr_GRANITO_43.setVisible(false);lyr_GRAFITA_44.setVisible(false);lyr_GNAISSE_45.setVisible(false);lyr_GIPSITA_46.setVisible(false);lyr_GEMA_47.setVisible(false);lyr_GALENA_48.setVisible(false);lyr_FOSFATO_49.setVisible(false);lyr_DIAMANTEINDUSTRIAL_50.setVisible(false);lyr_DIAMANTE_51.setVisible(false);lyr_DIABSIOPBRITA_52.setVisible(false);lyr_DIABSIO_53.setVisible(false);lyr_DADONOCADASTRADO_54.setVisible(false);lyr_CROMITA_55.setVisible(false);lyr_CONGLOMERADO_56.setVisible(false);lyr_CONCHASCALCRIAS_57.setVisible(false);lyr_COLUMBITA_58.setVisible(false);lyr_COBRE_59.setVisible(false);lyr_CAULIM_60.setVisible(false);lyr_CASSITERITA_61.setVisible(false);lyr_CASCALHO_62.setVisible(false);lyr_CARVOMINERAL_63.setVisible(false);lyr_CALCEDNIA_64.setVisible(false);lyr_CALCRIODOLOMTICO_65.setVisible(false);lyr_CALCRIOCALCTICO_66.setVisible(false);lyr_CALCRIO_67.setVisible(false);lyr_BASALTO_68.setVisible(false);lyr_ATAPULGITA_69.setVisible(false);lyr_ARGILITO_70.setVisible(false);lyr_ARGILAREFRATRIA_71.setVisible(false);lyr_ARGILAPCERVERMELH_72.setVisible(false);lyr_ARGILA_73.setVisible(false);lyr_ARENITO_74.setVisible(false);lyr_AREIA_75.setVisible(false);lyr_ARDSIA_76.setVisible(false);lyr_ANFIBOLITO_77.setVisible(false);lyr_AMETISTA_78.setVisible(false);lyr_GUAPOTVELDEMESA_79.setVisible(false);lyr_GUAMINERALCARBOGAS_80.setVisible(false);lyr_GUAMINERALALCBIC_81.setVisible(false);lyr_GUAMINERAL_82.setVisible(false);lyr_FaseREQUERIMENTODEREGISTRODEEXTRAO_83.setVisible(false);lyr_FaseREQUERIMENTODEPESQUISA_84.setVisible(false);lyr_FaseREQUERIMENTODELICENCIAMENTO_85.setVisible(false);lyr_FaseREQUERIMENTODELAVRAGARIMPEIRA_86.setVisible(false);lyr_FaseREQUERIMENTODELAVRA_87.setVisible(false);lyr_FaseREGISTRODEEXTRAO_88.setVisible(false);lyr_FaseRECONHECIMENTOGEOLGICO_89.setVisible(false);lyr_FaseLICENCIAMENTO_90.setVisible(false);lyr_FaseLAVRAGARIMPEIRA_91.setVisible(false);lyr_FaseDISPONIBILIDADE_92.setVisible(false);lyr_FaseDIREITODEREQUERERALAVRA_93.setVisible(false);lyr_FaseCONCESSODELAVRA_94.setVisible(false);lyr_FaseAUTORIZAODEPESQUISA_95.setVisible(false);lyr_FaseAPTOPARADISPONIBILIDADE_96.setVisible(false);lyr_reaLitgio_97.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Municipios_2,lyr_readeaplicaodaLeideMataAtlnticaPI_3,lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4,lyr_UnidadesdeConservaoEstadualPI_5,lyr_UnidadesdeConservaoFederalPIICMBIO2023_6,lyr_ZonadeAmortecimentodasUCsPI3Km_7,lyr_Processosminerrios_8,lyr_ComunidadesTradicionais_9,lyr_XISTO_10,lyr_VERMICULITA_11,lyr_TERRASRARAS_12,lyr_TALCO_13,lyr_SILTITO_14,lyr_SIENITO_15,lyr_SEIXOS_16,lyr_SAISDEPOTSSIO_17,lyr_SAISDEMAGNSIO_18,lyr_SAIBRO_19,lyr_RUTILO_20,lyr_QUARTZO_21,lyr_QUARTZITO_22,lyr_OURO_23,lyr_OPALA_24,lyr_NQUEL_25,lyr_MINRIODETITNIO_26,lyr_MINRIODEOURO_27,lyr_MINRIODENQUEL_28,lyr_MINRIODEMANGANS_29,lyr_MINRIODEMAGNSIO_30,lyr_MINRIODELTIO_31,lyr_MINRIODEFERRO_32,lyr_MINRIODECROMO_33,lyr_MINRIODECOBRE_34,lyr_MINRIODEALUMNIO_35,lyr_MRMORE_36,lyr_MANGANS_37,lyr_MAGNESITA_38,lyr_LATERITA_39,lyr_ILMENITA_40,lyr_GRANULITO_41,lyr_GRANITOPBRITA_42,lyr_GRANITO_43,lyr_GRAFITA_44,lyr_GNAISSE_45,lyr_GIPSITA_46,lyr_GEMA_47,lyr_GALENA_48,lyr_FOSFATO_49,lyr_DIAMANTEINDUSTRIAL_50,lyr_DIAMANTE_51,lyr_DIABSIOPBRITA_52,lyr_DIABSIO_53,lyr_DADONOCADASTRADO_54,lyr_CROMITA_55,lyr_CONGLOMERADO_56,lyr_CONCHASCALCRIAS_57,lyr_COLUMBITA_58,lyr_COBRE_59,lyr_CAULIM_60,lyr_CASSITERITA_61,lyr_CASCALHO_62,lyr_CARVOMINERAL_63,lyr_CALCEDNIA_64,lyr_CALCRIODOLOMTICO_65,lyr_CALCRIOCALCTICO_66,lyr_CALCRIO_67,lyr_BASALTO_68,lyr_ATAPULGITA_69,lyr_ARGILITO_70,lyr_ARGILAREFRATRIA_71,lyr_ARGILAPCERVERMELH_72,lyr_ARGILA_73,lyr_ARENITO_74,lyr_AREIA_75,lyr_ARDSIA_76,lyr_ANFIBOLITO_77,lyr_AMETISTA_78,lyr_GUAPOTVELDEMESA_79,lyr_GUAMINERALCARBOGAS_80,lyr_GUAMINERALALCBIC_81,lyr_GUAMINERAL_82,lyr_FaseREQUERIMENTODEREGISTRODEEXTRAO_83,lyr_FaseREQUERIMENTODEPESQUISA_84,lyr_FaseREQUERIMENTODELICENCIAMENTO_85,lyr_FaseREQUERIMENTODELAVRAGARIMPEIRA_86,lyr_FaseREQUERIMENTODELAVRA_87,lyr_FaseREGISTRODEEXTRAO_88,lyr_FaseRECONHECIMENTOGEOLGICO_89,lyr_FaseLICENCIAMENTO_90,lyr_FaseLAVRAGARIMPEIRA_91,lyr_FaseDISPONIBILIDADE_92,lyr_FaseDIREITODEREQUERERALAVRA_93,lyr_FaseCONCESSODELAVRA_94,lyr_FaseAUTORIZAODEPESQUISA_95,lyr_FaseAPTOPARADISPONIBILIDADE_96,lyr_reaLitgio_97];
lyr_Municipios_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'LEG_1SIMP': 'LEG_1SIMP', 'COUNT_': 'COUNT_', 'Shape_Leng': 'Shape_Leng', 'area_km2': 'area_km2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'PONTO': 'PONTO', 'N': 'N', 'W': 'W', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nome': 'nome', 'sigla': 'sigla', 'areaHa': 'areaHa', 'perimetroM': 'perimetroM', 'administra': 'administra', 'UF': 'UF', 'biomaIBGE': 'biomaIBGE', 'CoordRegio': 'CoordRegio', 'municipios': 'municipios', 'anoCriacao': 'anoCriacao', 'Territorio': 'Territorio', 'Decreto': 'Decreto', 'COD': 'COD', 'Hectares': 'Hectares', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldAliases', {'id': 'id', 'NomeUC': 'NomeUC', 'Cnuc': 'Cnuc', 'CriacaoAno': 'CriacaoAno', 'AreaHaAlb': 'AreaHaAlb', 'PerimM': 'PerimM', 'CriacaoAto': 'CriacaoAto', 'EsferaAdm': 'EsferaAdm', 'SiglaCateg': 'SiglaCateg', 'GrupoUC': 'GrupoUC', 'UFAbrang': 'UFAbrang', 'BiomaIBGE': 'BiomaIBGE', 'BiomaCRL': 'BiomaCRL', 'GRegional': 'GRegional', 'FusoAbrang': 'FusoAbrang', 'Demarcacao': 'Demarcacao', 'EscalaUC': 'EscalaUC', 'NGI': 'NGI', 'Latitude': 'Latitude', 'Longi': 'Longi', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'nome': 'nome', 'sigla': 'sigla', 'areaHa': 'areaHa', 'administra': 'administra', 'SiglaGrupo': 'SiglaGrupo', 'UF': 'UF', 'biomaIBGE': 'biomaIBGE', 'biomaCRL': 'biomaCRL', 'CoordRegio': 'CoordRegio', 'municipios': 'municipios', 'anoCriacao': 'anoCriacao', 'Territorio': 'Territorio', 'Decreto': 'Decreto', 'Hectares': 'Hectares', 'BUFF_DIST': 'BUFF_DIST', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Processosminerrios_8.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ComunidadesTradicionais_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'sei': 'sei', 'nm_municip': 'nm_municip', 'nome_area': 'nome_area', 'parcela_co': 'parcela_co', 'detentor_n': 'detentor_n', 'obs': 'obs', 'area_hecta': 'area_hecta', 'natureza': 'natureza', 'situacao_i': 'situacao_i', 'status': 'status', 'dt_publica': 'dt_publica', 'dt_titulac': 'dt_titulac', 'identidade': 'identidade', 'area_m2': 'area_m2', 'draworder': 'draworder', 'icon': 'icon', 'area_hec': 'area_hec', 'familias': 'familias', });
lyr_XISTO_10.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_VERMICULITA_11.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_TERRASRARAS_12.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_TALCO_13.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SILTITO_14.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SIENITO_15.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SEIXOS_16.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SAISDEPOTSSIO_17.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SAISDEMAGNSIO_18.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_SAIBRO_19.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_RUTILO_20.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_QUARTZO_21.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_QUARTZITO_22.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_OURO_23.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_OPALA_24.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_NQUEL_25.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODETITNIO_26.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEOURO_27.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODENQUEL_28.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEMANGANS_29.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEMAGNSIO_30.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODELTIO_31.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEFERRO_32.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODECROMO_33.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODECOBRE_34.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MINRIODEALUMNIO_35.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MRMORE_36.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MANGANS_37.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_MAGNESITA_38.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_LATERITA_39.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ILMENITA_40.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRANULITO_41.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRANITOPBRITA_42.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRANITO_43.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GRAFITA_44.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GNAISSE_45.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GIPSITA_46.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GEMA_47.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GALENA_48.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FOSFATO_49.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIAMANTEINDUSTRIAL_50.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIAMANTE_51.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIABSIOPBRITA_52.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DIABSIO_53.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_DADONOCADASTRADO_54.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CROMITA_55.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CONGLOMERADO_56.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CONCHASCALCRIAS_57.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_COLUMBITA_58.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_COBRE_59.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CAULIM_60.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CASSITERITA_61.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CASCALHO_62.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CARVOMINERAL_63.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCEDNIA_64.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCRIODOLOMTICO_65.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCRIOCALCTICO_66.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_CALCRIO_67.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_BASALTO_68.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ATAPULGITA_69.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILITO_70.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILAREFRATRIA_71.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILAPCERVERMELH_72.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARGILA_73.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARENITO_74.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_AREIA_75.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ARDSIA_76.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_ANFIBOLITO_77.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_AMETISTA_78.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAPOTVELDEMESA_79.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAMINERALCARBOGAS_80.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAMINERALALCBIC_81.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_GUAMINERAL_82.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseREQUERIMENTODEREGISTRODEEXTRAO_83.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseREQUERIMENTODEPESQUISA_84.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseREQUERIMENTODELICENCIAMENTO_85.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseREQUERIMENTODELAVRAGARIMPEIRA_86.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseREQUERIMENTODELAVRA_87.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseREGISTRODEEXTRAO_88.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseRECONHECIMENTOGEOLGICO_89.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseLICENCIAMENTO_90.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseLAVRAGARIMPEIRA_91.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseDISPONIBILIDADE_92.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseDIREITODEREQUERERALAVRA_93.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseCONCESSODELAVRA_94.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseAUTORIZAODEPESQUISA_95.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_FaseAPTOPARADISPONIBILIDADE_96.set('fieldAliases', {'PROCESSO': 'PROCESSO', 'NUMERO': 'NUMERO', 'ANO': 'ANO', 'AREA_HA': 'AREA_HA', 'ID': 'ID', 'FASE': 'FASE', 'ULT_EVENTO': 'ULT_EVENTO', 'NOME': 'NOME', 'SUBS': 'SUBS', 'USO': 'USO', 'UF': 'UF', 'DSProcesso': 'DSProcesso', });
lyr_reaLitgio_97.set('fieldAliases', {'FID_area': 'FID_area', 'TIPO': 'TIPO', 'FID_TD_PI': 'FID_TD_PI', 'Terri_Dese': 'Terri_Dese', 'FID_diss': 'FID_diss', 'TIPO_1': 'TIPO_1', });
lyr_Municipios_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'LEG_1SIMP': 'TextEdit', 'COUNT_': 'Range', 'Shape_Leng': 'TextEdit', 'area_km2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldImages', {'id': '', 'fid': '', 'PONTO': '', 'N': '', 'W': '', 'Latitude': '', 'Longitude': '', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'perimetroM': 'TextEdit', 'administra': 'TextEdit', 'UF': 'TextEdit', 'biomaIBGE': 'TextEdit', 'CoordRegio': 'TextEdit', 'municipios': 'TextEdit', 'anoCriacao': 'TextEdit', 'Territorio': 'TextEdit', 'Decreto': 'TextEdit', 'COD': 'Range', 'Hectares': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldImages', {'id': '', 'NomeUC': '', 'Cnuc': '', 'CriacaoAno': '', 'AreaHaAlb': '', 'PerimM': '', 'CriacaoAto': '', 'EsferaAdm': '', 'SiglaCateg': '', 'GrupoUC': '', 'UFAbrang': '', 'BiomaIBGE': '', 'BiomaCRL': '', 'GRegional': '', 'FusoAbrang': '', 'Demarcacao': '', 'EscalaUC': '', 'NGI': '', 'Latitude': '', 'Longi': '', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldImages', {'id': 'TextEdit', 'fid': 'Range', 'nome': 'TextEdit', 'sigla': 'TextEdit', 'areaHa': 'TextEdit', 'administra': 'TextEdit', 'SiglaGrupo': 'TextEdit', 'UF': 'TextEdit', 'biomaIBGE': 'TextEdit', 'biomaCRL': 'TextEdit', 'CoordRegio': 'TextEdit', 'municipios': 'TextEdit', 'anoCriacao': 'TextEdit', 'Territorio': 'TextEdit', 'Decreto': 'TextEdit', 'Hectares': 'TextEdit', 'BUFF_DIST': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Processosminerrios_8.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ComunidadesTradicionais_9.set('fieldImages', {'fid': '', 'id': '', 'sei': '', 'nm_municip': '', 'nome_area': '', 'parcela_co': '', 'detentor_n': '', 'obs': '', 'area_hecta': '', 'natureza': '', 'situacao_i': '', 'status': '', 'dt_publica': '', 'dt_titulac': '', 'identidade': '', 'area_m2': '', 'draworder': '', 'icon': '', 'area_hec': '', 'familias': '', });
lyr_XISTO_10.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_VERMICULITA_11.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_TERRASRARAS_12.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_TALCO_13.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SILTITO_14.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SIENITO_15.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SEIXOS_16.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SAISDEPOTSSIO_17.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SAISDEMAGNSIO_18.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_SAIBRO_19.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_RUTILO_20.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_QUARTZO_21.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_QUARTZITO_22.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_OURO_23.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_OPALA_24.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_NQUEL_25.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODETITNIO_26.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEOURO_27.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODENQUEL_28.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEMANGANS_29.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEMAGNSIO_30.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODELTIO_31.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEFERRO_32.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODECROMO_33.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODECOBRE_34.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MINRIODEALUMNIO_35.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MRMORE_36.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MANGANS_37.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_MAGNESITA_38.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_LATERITA_39.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ILMENITA_40.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRANULITO_41.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRANITOPBRITA_42.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRANITO_43.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GRAFITA_44.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GNAISSE_45.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GIPSITA_46.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GEMA_47.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GALENA_48.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FOSFATO_49.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIAMANTEINDUSTRIAL_50.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIAMANTE_51.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIABSIOPBRITA_52.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DIABSIO_53.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_DADONOCADASTRADO_54.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CROMITA_55.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CONGLOMERADO_56.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CONCHASCALCRIAS_57.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_COLUMBITA_58.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_COBRE_59.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CAULIM_60.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CASSITERITA_61.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CASCALHO_62.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CARVOMINERAL_63.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCEDNIA_64.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCRIODOLOMTICO_65.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCRIOCALCTICO_66.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_CALCRIO_67.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_BASALTO_68.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ATAPULGITA_69.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILITO_70.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILAREFRATRIA_71.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILAPCERVERMELH_72.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARGILA_73.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARENITO_74.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_AREIA_75.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ARDSIA_76.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_ANFIBOLITO_77.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_AMETISTA_78.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAPOTVELDEMESA_79.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAMINERALCARBOGAS_80.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAMINERALALCBIC_81.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_GUAMINERAL_82.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseREQUERIMENTODEREGISTRODEEXTRAO_83.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseREQUERIMENTODEPESQUISA_84.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseREQUERIMENTODELICENCIAMENTO_85.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseREQUERIMENTODELAVRAGARIMPEIRA_86.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseREQUERIMENTODELAVRA_87.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseREGISTRODEEXTRAO_88.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseRECONHECIMENTOGEOLGICO_89.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseLICENCIAMENTO_90.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseLAVRAGARIMPEIRA_91.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseDISPONIBILIDADE_92.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseDIREITODEREQUERERALAVRA_93.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseCONCESSODELAVRA_94.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseAUTORIZAODEPESQUISA_95.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_FaseAPTOPARADISPONIBILIDADE_96.set('fieldImages', {'PROCESSO': '', 'NUMERO': '', 'ANO': '', 'AREA_HA': '', 'ID': '', 'FASE': '', 'ULT_EVENTO': '', 'NOME': '', 'SUBS': '', 'USO': '', 'UF': '', 'DSProcesso': '', });
lyr_reaLitgio_97.set('fieldImages', {'FID_area': 'TextEdit', 'TIPO': 'TextEdit', 'FID_TD_PI': 'TextEdit', 'Terri_Dese': 'TextEdit', 'FID_diss': 'TextEdit', 'TIPO_1': 'TextEdit', });
lyr_Municipios_2.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'SIGLA_UF': 'hidden field', 'AREA_KM2': 'hidden field', });
lyr_readeaplicaodaLeideMataAtlnticaPI_3.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'LEG_1SIMP': 'hidden field', 'COUNT_': 'hidden field', 'Shape_Leng': 'hidden field', 'area_km2': 'inline label - always visible', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_CorredorEcolgicoConfusesSerradaCapivaraPI_4.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'PONTO': 'no label', 'N': 'no label', 'W': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_UnidadesdeConservaoEstadualPI_5.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nome': 'no label', 'sigla': 'hidden field', 'areaHa': 'no label', 'perimetroM': 'hidden field', 'administra': 'hidden field', 'UF': 'hidden field', 'biomaIBGE': 'no label', 'CoordRegio': 'hidden field', 'municipios': 'hidden field', 'anoCriacao': 'hidden field', 'Territorio': 'inline label - visible with data', 'Decreto': 'hidden field', 'COD': 'hidden field', 'Hectares': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_UnidadesdeConservaoFederalPIICMBIO2023_6.set('fieldLabels', {'id': 'hidden field', 'NomeUC': 'no label', 'Cnuc': 'hidden field', 'CriacaoAno': 'hidden field', 'AreaHaAlb': 'inline label - visible with data', 'PerimM': 'hidden field', 'CriacaoAto': 'hidden field', 'EsferaAdm': 'hidden field', 'SiglaCateg': 'hidden field', 'GrupoUC': 'hidden field', 'UFAbrang': 'hidden field', 'BiomaIBGE': 'no label', 'BiomaCRL': 'hidden field', 'GRegional': 'hidden field', 'FusoAbrang': 'hidden field', 'Demarcacao': 'hidden field', 'EscalaUC': 'hidden field', 'NGI': 'hidden field', 'Latitude': 'hidden field', 'Longi': 'hidden field', });
lyr_ZonadeAmortecimentodasUCsPI3Km_7.set('fieldLabels', {'id': 'hidden field', 'fid': 'hidden field', 'nome': 'no label', 'sigla': 'hidden field', 'areaHa': 'no label', 'administra': 'hidden field', 'SiglaGrupo': 'hidden field', 'UF': 'hidden field', 'biomaIBGE': 'no label', 'biomaCRL': 'hidden field', 'CoordRegio': 'hidden field', 'municipios': 'hidden field', 'anoCriacao': 'hidden field', 'Territorio': 'inline label - visible with data', 'Decreto': 'hidden field', 'Hectares': 'hidden field', 'BUFF_DIST': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Processosminerrios_8.set('fieldLabels', {'PROCESSO': 'inline label - visible with data', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - visible with data', 'ID': 'hidden field', 'FASE': 'inline label - visible with data', 'ULT_EVENTO': 'hidden field', 'NOME': 'no label', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ComunidadesTradicionais_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'sei': 'hidden field', 'nm_municip': 'hidden field', 'nome_area': 'inline label - always visible', 'parcela_co': 'hidden field', 'detentor_n': 'hidden field', 'obs': 'hidden field', 'area_hecta': 'inline label - visible with data', 'natureza': 'inline label - visible with data', 'situacao_i': 'hidden field', 'status': 'hidden field', 'dt_publica': 'hidden field', 'dt_titulac': 'hidden field', 'identidade': 'hidden field', 'area_m2': 'hidden field', 'draworder': 'hidden field', 'icon': 'hidden field', 'area_hec': 'hidden field', 'familias': 'inline label - visible with data', });
lyr_XISTO_10.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_VERMICULITA_11.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_TERRASRARAS_12.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_TALCO_13.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SILTITO_14.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SIENITO_15.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SEIXOS_16.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SAISDEPOTSSIO_17.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SAISDEMAGNSIO_18.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_SAIBRO_19.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_RUTILO_20.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_QUARTZO_21.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_QUARTZITO_22.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_OURO_23.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_OPALA_24.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_NQUEL_25.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODETITNIO_26.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEOURO_27.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODENQUEL_28.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEMANGANS_29.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEMAGNSIO_30.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODELTIO_31.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEFERRO_32.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODECROMO_33.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODECOBRE_34.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MINRIODEALUMNIO_35.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MRMORE_36.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MANGANS_37.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_MAGNESITA_38.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_LATERITA_39.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ILMENITA_40.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRANULITO_41.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRANITOPBRITA_42.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRANITO_43.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GRAFITA_44.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GNAISSE_45.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GIPSITA_46.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GEMA_47.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GALENA_48.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FOSFATO_49.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIAMANTEINDUSTRIAL_50.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIAMANTE_51.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIABSIOPBRITA_52.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DIABSIO_53.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_DADONOCADASTRADO_54.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CROMITA_55.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CONGLOMERADO_56.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CONCHASCALCRIAS_57.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_COLUMBITA_58.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_COBRE_59.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CAULIM_60.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CASSITERITA_61.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CASCALHO_62.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CARVOMINERAL_63.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCEDNIA_64.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCRIODOLOMTICO_65.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCRIOCALCTICO_66.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_CALCRIO_67.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_BASALTO_68.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ATAPULGITA_69.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILITO_70.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILAREFRATRIA_71.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILAPCERVERMELH_72.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARGILA_73.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARENITO_74.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_AREIA_75.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ARDSIA_76.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_ANFIBOLITO_77.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_AMETISTA_78.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAPOTVELDEMESA_79.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAMINERALCARBOGAS_80.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAMINERALALCBIC_81.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_GUAMINERAL_82.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'no label', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'hidden field', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseREQUERIMENTODEREGISTRODEEXTRAO_83.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseREQUERIMENTODEPESQUISA_84.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseREQUERIMENTODELICENCIAMENTO_85.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseREQUERIMENTODELAVRAGARIMPEIRA_86.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseREQUERIMENTODELAVRA_87.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseREGISTRODEEXTRAO_88.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseRECONHECIMENTOGEOLGICO_89.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseLICENCIAMENTO_90.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseLAVRAGARIMPEIRA_91.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseDISPONIBILIDADE_92.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseDIREITODEREQUERERALAVRA_93.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseCONCESSODELAVRA_94.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseAUTORIZAODEPESQUISA_95.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_FaseAPTOPARADISPONIBILIDADE_96.set('fieldLabels', {'PROCESSO': 'inline label - always visible', 'NUMERO': 'hidden field', 'ANO': 'hidden field', 'AREA_HA': 'inline label - always visible', 'ID': 'hidden field', 'FASE': 'hidden field', 'ULT_EVENTO': 'hidden field', 'NOME': 'hidden field', 'SUBS': 'no label', 'USO': 'hidden field', 'UF': 'hidden field', 'DSProcesso': 'hidden field', });
lyr_reaLitgio_97.set('fieldLabels', {'FID_area': 'hidden field', 'TIPO': 'hidden field', 'FID_TD_PI': 'hidden field', 'Terri_Dese': 'no label', 'FID_diss': 'hidden field', 'TIPO_1': 'hidden field', });
lyr_reaLitgio_97.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});