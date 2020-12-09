window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

var mbAttr = `ФГБУ «Институт глобального климата и экологии имени академика Ю.А. Израэля»`+ `<br>` +'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>';
var mbUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
var baseMap   = L.tileLayer(mbUrl, {attribution: mbAttr});



var year = L.geoJSON(year, {
  onEachFeature: colorLayer,
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "#333333",
    fillOpacity: 0.8,
  },
})

var  winter  = L.geoJSON(winter, {
  onEachFeature: colorLayer,
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "#333333",
    fillOpacity: 0.8,
  },
})

var  spring  = L.geoJSON(spring, {
  onEachFeature: colorLayer,
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "#333333",
    fillOpacity: 0.8,
  },
})

var  summer  = L.geoJSON(summer, {
  onEachFeature: colorLayer,
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "#333333",
    fillOpacity: 0.8,
  },
})
var  autumn  = L.geoJSON(autumn, {
  onEachFeature: colorLayer,
  style: {
    color: "#00008c",
    opacity: 0.6,
    fillColor: "#333333",
    fillOpacity: 0.8,
  },
})


var baseMaps = {
    "Год": year,
    "Зима": winter,
    "Весна": spring,
    "Лето": summer,
    "Осень": autumn
};

var map = L.map('map', {
  center: [65.753, 97.619],
  zoom: 3,
  layers: [year, baseMap]
});


L.control.layers(baseMaps, {},{collapsed: false}).addTo(map);

year.eachLayer(function (layer) {
    var popupContent =`Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Средние осадки мм: ${layer.feature.properties.rainfall}`;
        layer.bindPopup(popupContent);
});

year.eachLayer(function(layer) {
    if (layer.feature.properties.rainfall >= 0 && layer.feature.properties.rainfall <= 50) {
        layer.setStyle({
            fillColor: "#493402"
        });
    }
    else if (layer.feature.properties.rainfall >= 50 && layer.feature.properties.rainfall <= 100) {
        layer.setStyle({
            fillColor: "#8F6902"
        });
    }
        else if (layer.feature.properties.rainfall >= 100 && layer.feature.properties.rainfall <= 150) {
        layer.setStyle({
            fillColor: "#D79C03"
        });
    }
    else if (layer.feature.properties.rainfall >= 150 && layer.feature.properties.rainfall <= 200) {
        layer.setStyle({
            fillColor: "#FEC220"
        });
    }
    else if (layer.feature.properties.rainfall >= 200 && layer.feature.properties.rainfall <= 300) {
        layer.setStyle({
            fillColor: "#FEE18B"
        });
    } else if (layer.feature.properties.rainfall >= 300 && layer.feature.properties.rainfall <= 400) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 400 && layer.feature.properties.rainfall <= 500) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 500 && layer.feature.properties.rainfall <= 600) {
        layer.setStyle({
            fillColor: "#08C0CF",
        });
    } else if (layer.feature.properties.rainfall >= 600 && layer.feature.properties.rainfall <= 700) {
        layer.setStyle({
            fillColor: "#03808A",
        });
    } else if (layer.feature.properties.rainfall >= 700 && layer.feature.properties.rainfall <= 800) {
        layer.setStyle({
            fillColor: "#024147",
        });
    }
});


winter.eachLayer(function (layer) {
    var popupContent =`Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Средние осадки мм: ${layer.feature.properties.rainfall}`;
        layer.bindPopup(popupContent);
});

winter.eachLayer(function(layer) {
    if (layer.feature.properties.rainfall >= 0 && layer.feature.properties.rainfall <= 50) {
        layer.setStyle({
            fillColor: "#493402"
        });
    }
    else if (layer.feature.properties.rainfall >= 50 && layer.feature.properties.rainfall <= 100) {
        layer.setStyle({
            fillColor: "#8F6902"
        });
    }
        else if (layer.feature.properties.rainfall >= 100 && layer.feature.properties.rainfall <= 150) {
        layer.setStyle({
            fillColor: "#D79C03"
        });
    }
    else if (layer.feature.properties.rainfall >= 150 && layer.feature.properties.rainfall <= 200) {
        layer.setStyle({
            fillColor: "#FEC220"
        });
    }
    else if (layer.feature.properties.rainfall >= 200 && layer.feature.properties.rainfall <= 300) {
        layer.setStyle({
            fillColor: "#FEE18B"
        });
    } else if (layer.feature.properties.rainfall >= 300 && layer.feature.properties.rainfall <= 400) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 400 && layer.feature.properties.rainfall <= 500) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 500 && layer.feature.properties.rainfall <= 600) {
        layer.setStyle({
            fillColor: "#08C0CF",
        });
    } else if (layer.feature.properties.rainfall >= 600 && layer.feature.properties.rainfall <= 700) {
        layer.setStyle({
            fillColor: "#03808A",
        });
    } else if (layer.feature.properties.rainfall >= 700 && layer.feature.properties.rainfall <= 800) {
        layer.setStyle({
            fillColor: "#024147",
        });
    }
});


spring.eachLayer(function (layer) {
    var popupContent =`Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Средние осадки мм: ${layer.feature.properties.rainfall}`;
        layer.bindPopup(popupContent);
});
spring.eachLayer(function(layer) {
    if (layer.feature.properties.rainfall >= 0 && layer.feature.properties.rainfall <= 50) {
        layer.setStyle({
            fillColor: "#493402"
        });
    }
    else if (layer.feature.properties.rainfall >= 50 && layer.feature.properties.rainfall <= 100) {
        layer.setStyle({
            fillColor: "#8F6902"
        });
    }
        else if (layer.feature.properties.rainfall >= 100 && layer.feature.properties.rainfall <= 150) {
        layer.setStyle({
            fillColor: "#D79C03"
        });
    }
    else if (layer.feature.properties.rainfall >= 150 && layer.feature.properties.rainfall <= 200) {
        layer.setStyle({
            fillColor: "#FEC220"
        });
    }
    else if (layer.feature.properties.rainfall >= 200 && layer.feature.properties.rainfall <= 300) {
        layer.setStyle({
            fillColor: "#FEE18B"
        });
    } else if (layer.feature.properties.rainfall >= 300 && layer.feature.properties.rainfall <= 400) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 400 && layer.feature.properties.rainfall <= 500) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 500 && layer.feature.properties.rainfall <= 600) {
        layer.setStyle({
            fillColor: "#08C0CF",
        });
    } else if (layer.feature.properties.rainfall >= 600 && layer.feature.properties.rainfall <= 700) {
        layer.setStyle({
            fillColor: "#03808A",
        });
    } else if (layer.feature.properties.rainfall >= 700 && layer.feature.properties.rainfall <= 800) {
        layer.setStyle({
            fillColor: "#024147",
        });
    }
});


summer.eachLayer(function (layer) {
    var popupContent =`Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Средние осадки мм: ${layer.feature.properties.rainfall}`;
        layer.bindPopup(popupContent);
});

summer.eachLayer(function(layer) {
    if (layer.feature.properties.rainfall >= 0 && layer.feature.properties.rainfall <= 50) {
        layer.setStyle({
            fillColor: "#493402"
        });
    }
    else if (layer.feature.properties.rainfall >= 50 && layer.feature.properties.rainfall <= 100) {
        layer.setStyle({
            fillColor: "#8F6902"
        });
    }
        else if (layer.feature.properties.rainfall >= 100 && layer.feature.properties.rainfall <= 150) {
        layer.setStyle({
            fillColor: "#D79C03"
        });
    }
    else if (layer.feature.properties.rainfall >= 150 && layer.feature.properties.rainfall <= 200) {
        layer.setStyle({
            fillColor: "#FEC220"
        });
    }
    else if (layer.feature.properties.rainfall >= 200 && layer.feature.properties.rainfall <= 300) {
        layer.setStyle({
            fillColor: "#FEE18B"
        });
    } else if (layer.feature.properties.rainfall >= 300 && layer.feature.properties.rainfall <= 400) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 400 && layer.feature.properties.rainfall <= 500) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 500 && layer.feature.properties.rainfall <= 600) {
        layer.setStyle({
            fillColor: "#08C0CF",
        });
    } else if (layer.feature.properties.rainfall >= 600 && layer.feature.properties.rainfall <= 700) {
        layer.setStyle({
            fillColor: "#03808A",
        });
    } else if (layer.feature.properties.rainfall >= 700 && layer.feature.properties.rainfall <= 800) {
        layer.setStyle({
            fillColor: "#024147",
        });
    }
 });

autumn.eachLayer(function (layer) {
    var popupContent =`Регион: ${layer.feature.properties.NAME}<br> Округ: ${layer.feature.properties.ADM3_NAME}<br>Средние осадки мм: ${layer.feature.properties.rainfall}`;
        layer.bindPopup(popupContent);
});

autumn.eachLayer(function(layer) {
    if (layer.feature.properties.rainfall >= 0 && layer.feature.properties.rainfall <= 50) {
        layer.setStyle({
            fillColor: "#493402"
        });
    }
    else if (layer.feature.properties.rainfall >= 50 && layer.feature.properties.rainfall <= 100) {
        layer.setStyle({
            fillColor: "#8F6902"
        });
    }
        else if (layer.feature.properties.rainfall >= 100 && layer.feature.properties.rainfall <= 150) {
        layer.setStyle({
            fillColor: "#D79C03"
        });
    }
    else if (layer.feature.properties.rainfall >= 150 && layer.feature.properties.rainfall <= 200) {
        layer.setStyle({
            fillColor: "#FEC220"
        });
    }
    else if (layer.feature.properties.rainfall >= 200 && layer.feature.properties.rainfall <= 300) {
        layer.setStyle({
            fillColor: "#FEE18B"
        });
    } else if (layer.feature.properties.rainfall >= 300 && layer.feature.properties.rainfall <= 400) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 400 && layer.feature.properties.rainfall <= 500) {
        layer.setStyle({
            fillColor: "#25E8F8",
        });
    } else if (layer.feature.properties.rainfall >= 500 && layer.feature.properties.rainfall <= 600) {
        layer.setStyle({
            fillColor: "#08C0CF",
        });
    } else if (layer.feature.properties.rainfall >= 600 && layer.feature.properties.rainfall <= 700) {
        layer.setStyle({
            fillColor: "#03808A",
        });
    } else if (layer.feature.properties.rainfall >= 700 && layer.feature.properties.rainfall <= 800) {
        layer.setStyle({
            fillColor: "#024147",
        });
    }
});

function colorLayer(feature, layer) {
    layer.on('mouseover', function (e) {
        layer.setStyle({
            fillOpacity: 0.2
        });
    });
    layer.on('mouseout', function (e) {
        layer.setStyle({
            fillOpacity: 0.6
         });
     })
};
let color = ['#493402', '#8F6902', '#D79C03', '#FEC220', '#FEE18B', '#25E8F8', '#25E8F8', '#08C0CF', '#03808A', '#024147'];


var legend = L.control({ position: 'bottomleft' });

legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend'),
        rainfall = ['0 - 50', '50 - 100', '100 - 150', '150 - 200','200 - 300', '300 - 400', '400 - 500', '500 - 600', '600 - 700', '700 - 800'];
        div.innerHTML = '<h4>Средние осадки мм:</h4>'
    for (var i = 0; i < rainfall.length; i++) {
        div.innerHTML += '<br>' +
            '<i style="background:' + color[i] + '"></i> ' +
            rainfall[i] + '<br>' ;
    }

    return div;
};
legend.addTo(map);



