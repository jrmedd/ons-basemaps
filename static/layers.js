const overLayers = [
  {
    "id": "o_roads 0 Local Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [0], true, false],
      ["match", ["get", "type"], ["Local"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1.8,
        14,
        4.5,
        15,
        6,
        16,
        14,
        18,
        40,
        22,
        120
      ],
      "line-color": "hsl(0, 0%, 56%)"
    }
  },
  {
    "id": "o_roads 0 Minor Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [0], true, false],
      ["match", ["get", "type"], ["Minor"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "hsl(0, 0%, 56%)"
    }
  },
  {
    "id": "o_roads 0 B Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [0], true, false],
      ["match", ["get", "type"], ["B Road"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "hsl(0, 0%, 56%)"
    }
  },
  {
    "id": "o_roads 0 A Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [0], true, false],
      ["match", ["get", "type"], ["A Road"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "hsl(0, 0%, 56%)"
    }
  },
  {
    "id": "o_roads 0 Primary Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [0], true, false],
      ["match", ["get", "type"], ["Primary"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2.25,
        12,
        2.75,
        14,
        5.5,
        15,
        9.5,
        16,
        20,
        18,
        53,
        22,
        150
      ],
      "line-color": "hsl(0, 0%, 56%)",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0.4, 9, 1]
    }
  },
  {
    "id": "o_roads 0 Motorway Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [0], true, false],
      ["match", ["get", "type"], ["Motorway"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2.25,
        12,
        2.75,
        14,
        5.5,
        15,
        9.5,
        16,
        20,
        18,
        53,
        22,
        150
      ],
      "line-color": "hsl(0, 0%, 56%)"
    }
  },
  {
    "id": "o_roads 0 Local Road",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["Local"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1.4,
        14,
        3.5,
        15,
        5,
        16,
        12,
        18,
        35,
        22,
        100
      ],
      "line-color": "#ffffff"
    }
  },
  {
    "id": "o_roads 0 Guided Busway Casing",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["Guided Busway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        5,
        16,
        12,
        18,
        35,
        22,
        100
      ],
      "line-color": "#ffffff"
    }
  },
  {
    "id": "o_roads 0 Guided Busway Centreline",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["Guided Busway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8,
        0.1,
        10,
        0.2,
        12,
        0.2,
        14,
        0.4,
        15,
        0.6,
        16,
        0.75,
        18,
        3,
        22,
        10
      ],
      "line-color": "#b2b2b2"
    }
  },
  {
    "id": "o_roads 0 Motorway",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["Motorway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.75,
        10,
        2,
        12,
        2.75,
        14,
        4.5,
        15,
        8,
        16,
        17,
        18,
        48,
        22,
        140
      ],
      "line-color": "#06b1ca"
    }
  },
  {
    "id": "o_roads 0 Minor Road",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["Minor"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#fef2b4"
    }
  },
  {
    "id": "o_roads 0 B Road",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["B Road"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#ffc073"
    }
  },
  {
    "id": "o_roads 0 A Road",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["A Road"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#ff889d"
    }
  },
  {
    "id": "o_roads 0 Primary Road",
    "type": "line",
    "metadata": {"mapbox:group": "2a680f24b0d35061ed7d21fd33c9cf08"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["==", ["get", "level"], 0],
      ["match", ["get", "type"], ["Primary"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.5,
        10,
        1.75,
        12,
        2,
        14,
        4,
        15,
        7.5,
        16,
        16,
        18,
        46,
        22,
        130
      ],
      "line-color": "#37c256",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0.6, 9, 1]
    }
  },
  {
    "id": "o_roads 1 Local Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Local"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1.8,
        14,
        4.5,
        15,
        6,
        16,
        14,
        18,
        40,
        22,
        120
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 1 Minor Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Minor"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 1 B Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["B Road"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 1 A Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["A Road"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 1 Primary Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Primary"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2.25,
        12,
        2.75,
        14,
        5.5,
        15,
        9.5,
        16,
        20,
        18,
        53,
        22,
        150
      ],
      "line-color": "#8f8f8f",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0.4, 9, 1]
    }
  },
  {
    "id": "o_roads 1 Motorway Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Motorway"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2.25,
        12,
        2.75,
        14,
        5.5,
        15,
        9.5,
        16,
        20,
        18,
        53,
        22,
        150
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 1 Restricted Road",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Restricted"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#e2e2e2",
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1,
        14,
        2.5,
        15,
        4,
        16,
        7,
        18,
        24,
        22,
        85
      ],
      "line-opacity": 1,
      "line-dasharray": [2, 0.5]
    }
  },
  {
    "id": "o_roads 1 Local Road",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Local"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1.4,
        14,
        3.5,
        15,
        5,
        16,
        12,
        18,
        35,
        22,
        100
      ],
      "line-color": "#ffffff"
    }
  },
  {
    "id": "o_roads 1 Guided Busway Casing",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Guided Busway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        5,
        16,
        12,
        18,
        35,
        22,
        100
      ],
      "line-color": "#ffffff"
    }
  },
  {
    "id": "o_roads 1 Guided Busway Centreline",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Guided Busway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8,
        0.1,
        10,
        0.2,
        12,
        0.2,
        14,
        0.4,
        15,
        0.6,
        16,
        0.75,
        18,
        3,
        22,
        10
      ],
      "line-color": "#b2b2b2"
    }
  },
  {
    "id": "o_roads 1 Motorway",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Motorway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.75,
        10,
        2,
        12,
        2.75,
        14,
        4.5,
        15,
        8,
        16,
        17,
        18,
        48,
        22,
        140
      ],
      "line-color": "#06b1ca"
    }
  },
  {
    "id": "o_roads 1 Minor Road",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Minor"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#fef2b4"
    }
  },
  {
    "id": "o_roads 1 B Road",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["B Road"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#ffc073"
    }
  },
  {
    "id": "o_roads 1 A Road",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["A Road"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#ff889d"
    }
  },
  {
    "id": "o_roads 1 Primary Road",
    "type": "line",
    "metadata": {"mapbox:group": "52c81d2ff926c87a0714f2697b2f3694"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [1], true, false],
      ["match", ["get", "type"], ["Primary"], true, false]
    ],
    "layout": {"line-join": "round", "line-cap": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.5,
        10,
        1.75,
        12,
        2,
        14,
        4,
        15,
        7.5,
        16,
        16,
        18,
        46,
        22,
        130
      ],
      "line-color": "#37c256",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0.6, 9, 1]
    }
  },
  {
    "id": "o_roads 2 Local Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Local"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1.8,
        14,
        4.5,
        15,
        6,
        16,
        14,
        18,
        40,
        22,
        120
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 2 Minor Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Minor"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#8f8f8f",
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ]
    }
  },
  {
    "id": "o_roads 2 B Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["B Road"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 2 A Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["A Road"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2,
        12,
        2.5,
        14,
        4.75,
        15,
        8,
        16,
        19,
        18,
        50,
        22,
        145
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 2 Primary Road Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Primary"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2.25,
        12,
        2.75,
        14,
        5.5,
        15,
        9.5,
        16,
        20,
        18,
        53,
        22,
        150
      ],
      "line-color": "#8f8f8f",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0.4, 9, 1]
    }
  },
  {
    "id": "o_roads 2 Motorway Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Motorway"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        2.25,
        12,
        2.75,
        14,
        5.5,
        15,
        9.5,
        16,
        20,
        18,
        53,
        22,
        150
      ],
      "line-color": "#8f8f8f"
    }
  },
  {
    "id": "o_roads 2 Restricted Road",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Restricted"], true, false]
    ],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#e2e2e2",
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1,
        14,
        2.5,
        15,
        4,
        16,
        7,
        18,
        24,
        22,
        85
      ],
      "line-opacity": 1,
      "line-dasharray": [2, 0.5]
    }
  },
  {
    "id": "o_roads 2 Local Road",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Local"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12,
        1.4,
        14,
        3.5,
        15,
        5,
        16,
        12,
        18,
        35,
        22,
        100
      ],
      "line-color": "#ffffff"
    }
  },
  {
    "id": "o_roads 2 Guided Busway Casing",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Guided Busway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        5,
        16,
        12,
        18,
        35,
        22,
        100
      ],
      "line-color": "#ffffff"
    }
  },
  {
    "id": "o_roads 2 Guided Busway Centreline",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Guided Busway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8,
        0.1,
        10,
        0.2,
        12,
        0.2,
        14,
        0.4,
        15,
        0.6,
        16,
        0.75,
        18,
        3,
        22,
        10
      ],
      "line-color": "#b2b2b2"
    }
  },
  {
    "id": "o_roads 2 Motorway",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Motorway"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.75,
        10,
        2,
        12,
        2.75,
        14,
        4.5,
        15,
        8,
        16,
        17,
        18,
        48,
        22,
        140
      ],
      "line-color": "#06b1ca"
    }
  },
  {
    "id": "o_roads 2 Minor Road",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Minor"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#fef2b4"
    }
  },
  {
    "id": "o_roads 2 B Road",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["B Road"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#ffc073"
    }
  },
  {
    "id": "o_roads 2 A Road",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["A Road"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.35,
        10,
        1.5,
        12,
        1.7,
        14,
        3.5,
        15,
        6.5,
        16,
        15,
        18,
        44,
        22,
        120
      ],
      "line-color": "#ff889d"
    }
  },
  {
    "id": "o_roads 2 Primary Road",
    "type": "line",
    "metadata": {"mapbox:group": "0845f59ef0d52359da6fd788b079f747"},
    "source": "composite",
    "source-layer": "roads",
    "filter": [
      "all",
      ["match", ["get", "level"], [2], true, false],
      ["match", ["get", "type"], ["Primary"], true, false]
    ],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0.5,
        10,
        1.75,
        12,
        2,
        14,
        4,
        15,
        7.5,
        16,
        16,
        18,
        46,
        22,
        130
      ],
      "line-color": "#37c256",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 5, 0.6, 9, 1]
    }
  },
  {
    "id": "o_road Tunnels",
    "type": "line",
    "source": "composite",
    "source-layer": "roads",
    "filter": ["match", ["get", "type"], ["Tunnels"], true, false],
    "layout": {"line-cap": "round", "line-join": "round"},
    "paint": {
      "line-width": ["interpolate", ["linear"], ["zoom"], 9, 0.5, 17, 2],
      "line-color": "#4b4444",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 9, 0.1, 14, 0.35],
      "line-dasharray": [3, 2.5]
    }
  },
  {
    "id": "o_rail",
    "type": "line",
    "source": "composite",
    "source-layer": "rail",
    "filter": ["match", ["get", "type"], ["Tunnel"], false, true],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#646464",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.2, 14, 1],
      "line-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        10,
        [
          "match",
          ["get", "type"],
          ["Multi Track"],
          0.6,
          ["Single Track"],
          0.5,
          ["Narrow Gauge"],
          0.4,
          1
        ],
        17,
        [
          "match",
          ["get", "type"],
          ["Multi Track"],
          2,
          ["Single Track"],
          1.5,
          ["Narrow Gauge"],
          1,
          1
        ]
      ]
    }
  },
  {
    "id": "o_rail tunnel",
    "type": "line",
    "source": "composite",
    "source-layer": "rail",
    "filter": ["match", ["get", "type"], ["Tunnel"], true, false],
    "layout": {"line-join": "round"},
    "paint": {
      "line-color": "#646464",
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0.2, 14, 0.6],
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.6, 17, 1.5],
      "line-dasharray": [5, 3]
    }
  },
  {
    "id": "o_road numbers",
    "type": "symbol",
    "metadata": {"mapbox:group": "beaf4956fb8a63410ecf80abdebcdfb5"},
    "source": "composite",
    "source-layer": "roads",
    "minzoom": 10,
    "filter": [
      "match",
      ["get", "type"],
      ["Primary", "Motorway"],
      false,
      true
    ],
    "layout": {
      "text-field": ["to-string", ["get", "number"]],
      "symbol-placement": "line",
      "text-max-angle": 45,
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        10,
        8,
        15,
        11,
        22,
        28
      ],
      "text-font": ["Noto Sans Regular"]
    },
    "paint": {
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-halo-blur": 1,
      "text-color": "#000000"
    }
  },
  {
    "id": "o_road names",
    "type": "symbol",
    "metadata": {"mapbox:group": "beaf4956fb8a63410ecf80abdebcdfb5"},
    "source": "composite",
    "source-layer": "roads",
    "minzoom": 10,
    "filter": [
      "match",
      ["get", "type"],
      ["Primary", "Motorway"],
      false,
      true
    ],
    "layout": {
      "text-field": ["to-string", ["get", "name"]],
      "symbol-placement": "line",
      "text-font": ["Noto Sans Regular"],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        10,
        8,
        15,
        10,
        22,
        25
      ],
      "symbol-spacing": [
        "interpolate",
        ["linear"],
        ["zoom"],
        10,
        25,
        15,
        97,
        17,
        250
      ],
      "text-max-angle": 82,
      "text-padding": 1
    },
    "paint": {
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-halo-blur": 1,
      "text-color": "#000000"
    }
  },
  {
    "id": "o_primary road numbers",
    "type": "symbol",
    "metadata": {"mapbox:group": "beaf4956fb8a63410ecf80abdebcdfb5"},
    "source": "composite",
    "source-layer": "roads",
    "minzoom": 9,
    "filter": ["match", ["get", "type"], ["Primary"], true, false],
    "layout": {
      "text-field": ["to-string", ["get", "number"]],
      "symbol-placement": "line",
      "text-max-angle": 65,
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        9,
        8.5,
        15,
        12,
        22,
        28
      ],
      "text-font": ["Noto Sans Bold"],
      "text-letter-spacing": 0.1,
      "symbol-spacing": ["interpolate", ["linear"], ["zoom"], 9, 50, 15, 250]
    },
    "paint": {
      "text-halo-color": "#37c256",
      "text-halo-width": 1.25,
      "text-halo-blur": 0,
      "text-color": "hsl(0, 0%, 100%)"
    }
  },
  {
    "id": "o_motorway numbers",
    "type": "symbol",
    "metadata": {"mapbox:group": "beaf4956fb8a63410ecf80abdebcdfb5"},
    "source": "composite",
    "source-layer": "roads",
    "minzoom": 8,
    "filter": ["match", ["get", "type"], ["Motorway"], true, false],
    "layout": {
      "text-field": ["to-string", ["get", "number"]],
      "symbol-placement": "line",
      "text-max-angle": 45,
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        8,
        8.5,
        10,
        9,
        15,
        12,
        22,
        28
      ],
      "text-font": ["Noto Sans Bold"],
      "text-letter-spacing": 0.1,
      "symbol-spacing": ["interpolate", ["linear"], ["zoom"], 8, 50, 15, 250]
    },
    "paint": {
      "text-halo-color": "#06b1ca",
      "text-halo-width": 1.25,
      "text-halo-blur": 0,
      "text-color": "hsl(0, 0%, 100%)"
    }
  },
  {
    "id": "o_motorway junction numbers",
    "type": "symbol",
    "metadata": {"mapbox:group": "e196265c0e550aaddd2885dc32fdb674"},
    "source": "composite",
    "source-layer": "names",
    "minzoom": 13,
    "filter": ["match", ["get", "type"], ["Motorway Junctions"], true, false],
    "layout": {
      "text-field": ["to-string", ["get", "name1"]],
      "text-size": [
        "interpolate",
        ["linear"],
        ["zoom"],
        13,
        11,
        16,
        16,
        22,
        30
      ],
      "text-font": ["Noto Sans Bold"]
    },
    "paint": {
      "text-color": "#ffffff",
      "text-halo-color": "#000000",
      "text-halo-width": 10
    }
  },
  {
    "id": "o_railwaystations",
    "type": "symbol",
    "metadata": {"mapbox:group": "e196265c0e550aaddd2885dc32fdb674"},
    "source": "composite",
    "source-layer": "railwaystations",
    "layout": {
      "text-line-height": 1,
      "text-size": ["interpolate", ["linear"], ["zoom"], 12, 9, 15, 13],
      "icon-image": [
        "match",
        ["get", "type"],
        ["Railway Station"],
        "RS",
        ["London Underground Station"],
        "UG",
        ["Light Rapid Transit Station"],
        "LRTS",
        ["Light Rapid Transit Station And London Underground Station"],
        "LRTS-UG",
        ["Light Rapid Transit Station And Railway Station"],
        "RS-LRTS",
        ["Railway Station And London Underground Station"],
        "RS-UG",
        ""
      ],
      "text-font": ["Noto Sans Regular"],
      "text-justify": "left",
      "text-offset": [
        "match",
        ["get", "type"],
        ["Railway Station"],
        ["literal", [1, 0]],
        ["Light Rapid Transit Station"],
        ["literal", [1, 0]],
        ["London Underground Station"],
        ["literal", [1, 0]],
        ["Railway Station And London Underground Station"],
        ["literal", [1.7, 0]],
        ["Light Rapid Transit Station And London Underground Station"],
        ["literal", [1.5, 0]],
        ["Light Rapid Transit Station And Railway Station"],
        ["literal", [1.7, 0]],
        ["literal", [0, 0]]
      ],
      "icon-size": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 15, 1],
      "text-anchor": "left",
      "text-field": ["to-string", ["get", "name"]]
    },
    "paint": {
      "text-halo-color": "#ffffff",
      "text-halo-width": 1,
      "text-halo-blur": 1
    }
  },
  {
    "id": "o_airports",
    "type": "symbol",
    "metadata": {"mapbox:group": "e196265c0e550aaddd2885dc32fdb674"},
    "source": "composite",
    "source-layer": "airports",
    "layout": {
      "icon-image": "Airport",
      "icon-size": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 15, 1],
      "text-field": ["to-string", ["get", "name"]],
      "text-font": ["Noto Sans Regular"],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 9, 15, 13],
      "text-justify": "left",
      "text-anchor": "left",
      "text-offset": [0.8, 0]
    },
    "paint": {
      "text-color": "#000000",
      "text-halo-color": "hsl(0, 0%, 100%)",
      "text-halo-width": 1,
      "text-halo-blur": 1
    }
  }
];