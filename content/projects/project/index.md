---
title: Screen-Time
date: 2022-02-28T23:42:54.492Z
description: Screen-time is een website waar je informatie over films kunt
  bekijken, films kunt zoeken en informatie over nieuwe releases kunt zien.
featuredpost: true
featuredimage: https://blush-design.imgix.net/collections/croods/693c6d1d-030b-425f-a705-24a70586f166.png?w=800&auto=compress&cs=srgb
---
Dit is een project van een schoolgroep en ik heb het developen ervan gedaan. Screen-time is een website waar je informatie over films kunt bekijken, films kunt zoeken en informatie over nieuwe releases kunt zien.

![screen time photo](https://dylanwe.com/uploads/screen-time.png)

## 🧑🏻‍💻 Hoe ik het heb gemaakt

Het ontwerp is gemaakt door een andere student in Adobe XD en hij gebruikte een raster met 12 kolommen, dus het converteren naar een responsieve site was vrij eenvoudig. De website is gemaakt met Bootstrap om het goed responsive te krijgen voor elk apparaat.

Om alle filminformatie te krijgen, heb ik The Movie DB gebruikt, een API die informatie over films en tv-programma's kan verzenden. De finderpage is geïnspireerd op Tinder, je kunt op X drukken om verder te zoeken naar films en als je iets interessants ziet kun je op het oog klikken om meer informatie te bekijken. Het is gemaakt met een eenvoudige randomizer in JavaScript

## 🧑🏻‍🏫 Wat ik heb geleerd

Het was de eerste keer dat ik leerde een API te gebruiken. De documentatie was geweldig, dus ik kan gemakkelijk nieuwe gegevens oproepen.

## 📌 Wat ik de volgende keer anders zou doen

Ik zou een fetch gebruiken om de API te krijgen en gegevens in een functie te schrijven die het gemakkelijker zou maken om ze opnieuw te gebruiken en ik hoef niet de hele tijd code te kopiëren, zoiets als dit:

```javascript
function fetchMovie(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}
```

Iets wat ik later ontdekte, was de Slick-Slider, waardoor het toevoegen van mooie responsieve sliders eenvoudig is. Ik heb ermee geëxperimenteerd en ik zou het zeker toevoegen om het bladeren door films en shows nog beter te maken.