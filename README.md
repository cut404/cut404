# cut404

Welcome to the Cut404 REST API docs page.
By: Kris Hughes, Jason Montoya, Rob Merrill, Cameron Forras

Tired of the same plain and ugly 404 page?
Why not use our rad Cut404 page that is sure to turn heads.

Cut404 is a simple framework that will generate an awesome 404 page.

We have also included instructions for where developers can add their own customizable
picture to the 404 page if they would like to use their own instead of our selection.


# USAGE

    When wanting to implement Cut404 into your own project
    be sure to place the following to use the
    custom 404 page and content types:


    const Constructor = require('Cut404');
    var con = new Constructor();

    con.four04(res);
    con.writeHeadHTML(res);
    con.writeHeadPLAIN(res);
    con.writeHeadJSON(res);

# con.four04(res)
    This function is the main feature of Cut404. This will reference to a
    custom 404 Page. This feature removes clutter of typing typical 404
    response and presents a readable 404 response to user.

    For a customized picture you can input URL on line 27 of
    'cut404/lib/404.html'

# con.writeHeadHTML(res)
    This function removes clutter of typing the following:
    res.writeHead(200, {'Content-Type': 'text/html'});
    Obviously saves space and is VERY readable.

# con.writeHeadPLAIN(res);
    This function removes clutter of typing the following:
    res.writeHead(200, {'Content-Type': 'text/plain'});
    Again, it obviously saves space and is VERY readable.

# con.writeHeadJSON(res);
    This function removes clutter of typing the following:
    res.writeHead(200, {'Content-Type': 'application/json'});
    You already know the answer, it obviously saves space and is VERY readable.


last. To view our complete project with test, clone this repo: https://github.com/cut404/cut404


