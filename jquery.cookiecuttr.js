/**
 * Copyright (C) 2012 Chris Wharton (chris@weare2ndfloor.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 
 Documentation available at http://cookiecuttr.com
 
 */
(function ($) {
    $.cookieCuttr = function (options) {

        var defaults = {
            cookieCutter: false, // you'd like to enable the div/section/span etc. hide feature? change this to true
            cookieAnalytics: true, // just using a simple analytics package? change this to true
            cookieDeclineButton: false, // this will disable non essential cookies
            cookieResetButton: false,
            cookieOverlayEnabled: false,  // don't want a discreet toolbar? Fine, set this to true
            cookiePolicyLink: '/privacy-policy/', // if applicable, enter the link to your privacy policy here...
            cookieMessage: 'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',
            cookieAnalyticsMessage: 'We use cookies, just to track visits to our website, we store no personal details. To use the website as intended please...',
            cookieErrorMessage: "We\'re sorry, this feature places cookies in your browser and has been disabled. <br>To continue using this functionality, please",
            cookieWhatAreTheyLink: "http://www.allaboutcookies.org/",
            cookieDisable: ''


        };
        var options = $.extend(defaults, options);
        var message = defaults.cookieMessage.replace('{{cookiePolicyLink}}', defaults.cookiePolicyLink);


        defaults.cookieMessage = 'We use cookies on this website, you can <a href="' + defaults.cookiePolicyLink + '" title="read about our cookies">read about them here</a>. To use the website as intended please...';
        
        
        //convert options
        var cookiePolicyLinkIn = options.cookiePolicyLink;
        var cookieCutter = options.cookieCutter;
        var cookieAnalytics = options.cookieAnalytics; 
        var cookieDeclineButton = options.cookieDeclineButton; 
        var cookieResetButton = options.cookieResetButton; 
        var cookieOverlayEnabled = options.cookieOverlayEnabled; 
        var cookiePolicyLink = options.cookiePolicyLink; 
        var cookieMessage = message;
        var cookieAnalyticsMessage = options.cookieAnalyticsMessage;
        var cookieErrorMessage = options.cookieErrorMessage;
        var cookieDisable = options.cookieDisable; 
        var cookieWhatAreTheyLink = options.cookieWhatAreTheyLink;
        
		
        // cookie identifier
        var $cookieAccepted = $.cookie('cc_cookie_accept') == "cc_cookie_accept";
        $.cookieAccepted = function () {
            return $cookieAccepted;
        };

        var $cookieDeclined = $.cookie('cc_cookie_decline') == "cc_cookie_decline";
        $.cookieDeclined = function () {
            return $cookieDeclined;
        };


        if (($cookieAccepted) || ($cookieDeclined)) {
			// write cookie reset button
			 if(cookieResetButton) {
			 	$('body').prepend('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">Reset cookies for this website</a></div>');
			 } else {
			     var cookieResetButton = "";
			 }            
        } else {
            // write cookie decline button
            if (cookieDeclineButton) {
                var cookieDecline = '<a href="#decline" class="cc-cookie-decline">Decline Cookies</a>';
            } else {
                var cookieDecline = "";
            }
            // write extra class for overlay
            if (cookieOverlayEnabled) {
                var cookieOverlay = 'cc-overlay';
            } else {
                var cookieOverlay = "";
            }

            // add message to just after opening body tag
            if (cookieAnalytics) {
                $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '">' + cookieAnalyticsMessage + ' <a href="#accept" class="cc-cookie-accept">Accept Cookies</a> ' + cookieDecline + '<a href="' + cookieWhatAreTheyLink + '" title="Visit All about cookies (External link)">What are cookies?</a></div>');
            } else {
                $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '">' + cookieMessage + ' <a href="#accept" class="cc-cookie-accept">Accept Cookies</a> ' + cookieDecline + '</div>');
            }
            if (cookieCutter) {
                $(cookieDisable).html('<div class="cc-cookies-error">' + cookieErrorMessage + ' <a href="#accept" class="cc-cookie-accept">ACCEPT COOKIES</a></div>');
            }
        }

        // setting the cookies
        $('.cc-cookie-accept, .cc-cookie-decline').click(function (e) {
            e.preventDefault();
            if (($(this).attr("href") == "#decline")) {
                $.cookie("cc_cookie_decline", "cc_cookie_decline", {
                    path: '/'
                });
            } else {
                $.cookie("cc_cookie_accept", "cc_cookie_accept", {
                    path: '/'
                });
            }
            $(".cc-cookies").fadeOut(function () {
                // reload page to activate cookies
                location.reload();
            });

        });
        
        //reset cookies
        $('a.cc-cookie-reset').click(function(f) {
        	f.preventDefault();
        	$.cookie("cc_cookie_accept", null, {
        	    path: '/'
        	});
        	$.cookie("cc_cookie_decline", null, {
        	    path: '/'
        	});
        	$(".cc-cookies").fadeOut(function () {
        	    // reload page to activate cookies
        	    location.reload();
        	});
        });

    };
})(jQuery);