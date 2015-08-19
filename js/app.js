/**
 * Created by shams on 8/19/15.
 */
/*globals document */

(function (doc) {
    'use strict';

    var
    // DOM items
        item1,
        item2,
        item3,
        dropableArea,
        pre,

    // Variables
        items,

    // Functions
        giveEvents,
        dragstart,
        dragenter,
        dragover,
        dragleave,
        dragend,
        drag,
        drop;

    giveEvents = function (element) {
        element.addEventListener('dragstart', dragstart);
        element.addEventListener('dragenter', dragenter);
        element.addEventListener('dragover', dragover);
        element.addEventListener('dragleave', dragleave);
        element.addEventListener('dragend', dragend);
        element.addEventListener('drag', drag);
        element.addEventListener('drop', drop);

        element.addEventListener('touchstart', dragstart, false);
        element.addEventListener('touchenter', dragenter, false);
        element.addEventListener('touchover', dragover, false);
        element.addEventListener('touchleave', dragleave, false);
        element.addEventListener('touchend', dragend, false);
        element.addEventListener('touch', drag, false);
        element.addEventListener('drop', drop, false);
    };

    dragstart = function () {
        pre.innerHTML = 'dragstart';
    };

    dragenter = function () {
        pre.innerHTML = 'dragenter';
    };

    dragover = function () {
        pre.innerHTML = 'dragover';
    };

    dragleave = function () {
        pre.innerHTML = 'dragleave';
    };

    dragend = function () {
        pre.innerHTML = 'dragend';
    };

    drag = function () {
        pre.innerHTML = 'drag';
    };

    drop = function () {
        pre.innerHTML = 'drop';
    };

    (function () {
        item1 = doc.getElementById('item1');
        item2 = doc.getElementById('item2');
        item3 = doc.getElementById('item3');
        dropableArea = doc.getElementById('should-be-moved-here');
        pre = doc.getElementById('pre');

        items = [item1, item2, item3, dropableArea];
        items.forEach(giveEvents);
    }());
}(document));
