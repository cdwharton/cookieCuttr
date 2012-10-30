CookieCuttr
===========

A tailorable jQuery plugin to deal with the EU Cookie Law.

Useage
------

Add `jquery.cookiecuttr.js`, after jQuery and jQuery.cookie, and `cookiecuttr.css` to the head of your HTML document. Then call CookieCuttr on document ready.

```javascript
$(document).ready(function () {
  $.cookieCuttr();
});
```

For any JavaScript you want to disable, you need to wrap the following if statement around it.

```javascript
if (jQuery.cookie('cc_cookie_accept') == "cc_cookie_accept") {
  // insert the code you do not want to run UNTIL cookies are accepted here
}
```

Example with Google Analytics
-----------------------------

```javascript
if (jQuery.cookie('cc_cookie_accept') == "cc_cookie_accept") {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}
```

Alternatively, you can do the following until cookies are declined.

```javascript
if (jQuery.cookie('cc_cookie_decline') == "cc_cookie_decline") {
  // do nothing
} else {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}
```

You can also do the following.

```javascript
if( $.cookieAccepted() ) {
  // insert the code you do not want to run UNTIL cookies are accepted here
}
```

Read More About EU Cookie Law
-----------------------------

* [Is the EU's cookie law confusing you too?](http://www.123-reg.co.uk/blog/security-issues/is-the-eus-cookie-law-confusing-you-too/)
* [New EU cookie law (e-Privacy Directive)](http://www.ico.gov.uk/for_organisations/privacy_and_electronic_communications/the_guide/cookies.aspx)
* [Cookies – Doing nothing isn't the right answer](http://chriswharton.me/2012/05/cookies-doing-nothing-isnt-the-right-answer/)

Using WordPress?
----------------

A Wordpress version is available [here](http://cookiecuttr.com/wordpress-plugin/).

Dependencies
------------

* [jQuery](https://github.com/jquery/jquery)
* [jQuery.cookie](https://github.com/carhartl/jquery-cookie)

Options
-------

For more options, see the WIKI.

```
cookieCutter - if you'd like to actively hide parts of your website set this to true, for example say you use a comments system that inserts cookies, you can put the div name in below to replace it with a cookie warning message.

cookieAnalytics - if you are just using a simple analytics package you can set this to true, it displays a simple default message with no privacy policy link - this is set to true by default.

cookieDeclineButton - if you'd like a decline button to (ironically) write a cookie into the browser then set this to true.

cookieAcceptButton - set this to true to hide the accept button, its set to false by default

cookieResetButton - if you'd like a reset button to delete the accept or decline cookies then set this to true.

cookieOverlayEnabled - don't want a discreet toolbar? this makes the whole message into a 100% height

cookiePolicyLink - if applicable, enter the link to your privacy policy in here - this is as soon as cookieAnalytics is set to false;

cookieMessage - edit the message you want to appear in the cookie bar, remember to keep the {{cookiePolicyLink}} variable in tact so it inserts your privacy policy link.

cookieAnalyticsMessage - edit the message you want to appear, this is the default message.

cookieWhatAreTheyLink - edit the link for the 'What are Cookies' link.

cookieErrorMessage - edit the message you'd like to appear in place of the functionality

cookieNotificationLocationBottom - this is false by default, change it to true and the cookie notification bar will show at the bottom of the page instead, please note this will remain at the top for mobile and iOS devices and Internet Explorer 6.

cookieDisable - list elements comma separated in here that you want to disable, this will only work if cookieCutter is set to true.

cookieAcceptButtonText - you can change the text of the green accept button.

cookieDeclineButtonText - you can change the text of the red decline button.

cookieResetButtonText - you can change the text of the orange reset button.

cookieWhatAreLinkText - you can change the text of the "What are Cookies" link shown on Google Analytics message.

cookiePolicyPage - set this to true to display the message you want to appear on your privacy or cookie policy page.

cookiePolicyPageMessage - edit the message you want to appear on your policy page.

cookieDiscreetLink - false by default, set to true to enable

cookieDiscreetLinkText - edit the text you want to appear on the discreet option.

cookieDiscreetPosition - set to topleft by default, you can also set topright, bottomleft, bottomright.

cookieDomain - empty by default, add your domain name in here without www. or https:// or http:// to remove Google Analytics cookies on decline.
```

Contributing to CookieCuttr
---------------------------

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
* Initiate a [pull request](https://help.github.com/articles/using-pull-requests)

Credits
-------

* [weare2ndfloor](https://github.com/weare2ndfloor)
* [unsymbol](https://github.com/unsymbol)

Copyright
---------

Copyright (c) 2012 Chris Wharton. See LICENSE.txt for further details.
