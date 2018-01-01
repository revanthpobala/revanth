/**
 * Created by revanthpobala on 11/18/17.
 */

/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict'

    // Load demo images from flickr:
    $.ajax({
        url: 'https://api.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.photos.search',
            api_key: 'e30680b36dfdd74521bd5bb020e1723d', // jshint ignore:line
            user_id: '157819366@N06'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var carouselLinks = []
        var linksContainer = $('#links')
        var baseUrl
        // Add the demo images as links with thumbnails to the page:
        $.each(result.photos.photo, function (index, photo) {
            baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret
            $('<a/>')
                .append($('<img>').prop('src', baseUrl + '_s.jpg'))
                .prop('href', baseUrl + '_b.jpg')
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer)
            carouselLinks.push({
                href: baseUrl + '_c.jpg',
                title: photo.title
            })
        })
        // Initialize the Gallery as image carousel:
        blueimp.Gallery(carouselLinks, {
            container: '#blueimp-image-carousel',
            carousel: true
        })
    })

})