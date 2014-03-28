(function ($) {
    'use strict';
    $.fn.extend({
        /**
         * This allows you to set relevant aria live-region states and properties.
         * The primary convenience is that it sets some sensible defaults which you can override.
         * It also allows you to dynamically override one or more of the properties as content is
         * updated.
         * Also, if you've set some of these properties elsewhere before calling this function, your existing
         * property values will remain unless you explicitly overwrite them with this function.
         *
         * Example uses:
         * 1. Create a live region with default options:         $('#foo').liveRegion();
         * 2. Create a live region and give it a label:          $('#foo').liveRegion({label: 'News Ticker'});
         * 3. Change aria-busy state as  new content is loading:  $('#foo').liveRegion({busy: 'true'});
         *
         * Note: for those new to aria:  all aria-* values are strings. So the token values, 'true' and 'false' must
         * be supplied to this function as strings, not booleans.
         *
         * For info on the relevant live region roles and their uses, go to
         * http://www.w3.org/WAI/PF/aria-practices/#liveprops
         *
         * @param opts
         */
        liveRegion: function (opts) {
            var self = $(this),
                current,
                labelledby,
                label,
                role,
                atomic,
                live,
                relevant,
                busy,
                className,
                replace,
                text;

            /**
             * function to determine whether something is blank or not
             * @param str
             * @returns {boolean}
             */
            function isEmpty(str) {

                switch (str) {
                    case '':
                    case ' ':
                    case 0:
                    case '0':
                    case null:
                    case false:
                    case undefined:
                        return true;
                    default:
                        return false;
                }
            }

            /**
             *
             * @param obj
             * @returns {*}
             */
            function cleanBlank(obj) {
                var key;

                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        if (false !== isEmpty(obj[key])) {
                            delete obj[key];
                        }
                    }
                }
                return obj;
            }

            // get the values of any existing live-region related properties
            current = {
                labelledby: self.attr('aria-labelledby') || undefined,
                label: self.attr('aria-label') || undefined,
                role: self.attr('role') || undefined,
                atomic: self.attr('aria-atomic') || undefined,
                live: self.attr('aria-live') || undefined,
                relevant: self.attr('aria-relevant') || undefined,
                busy: self.attr('aria-busy') || undefined,
                className: self.attr('aria-busy') || undefined
            };

            //clean anything that is a blank string because although that's truthy, it is useless to us
            // if we wanted to be really heavy-handed, we could check (some of) these against their
            // valid token values as defined in the ARIA spec.
            current = cleanBlank(current);

            // this section determines what the new values should be.
            // it does so by setting to:
            // 1.  the defined opts value or,
            // 2.  the currently existing value or,
            // 3.  the default value
            // (in that order)
            labelledby = opts.labelledby || current.labelledby || null;
            label = opts.label || current.label || null;
            role = opts.role || current.role || 'region';
            atomic = opts.atomic || current.atomic || 'false';
            live = opts.live || current.live || 'polite';
            relevant = opts.relevant || current.relevant || 'additions';
            busy = opts.busy || current.busy || 'false';
            className = opts.className || undefined,
                replace = opts.replace || false,
                text = opts.text || undefined;

            // actually set the values
            self.attr('role', role)
                .attr('aria-atomic', atomic)
                .attr('aria-live', live)
                .attr('aria-busy', busy)
                .attr('aria-relevant', relevant);

            // Note: It is assumed that the consumer is smart enough to know
            // not to use *both* aria-labelledby and aria-label
            // so we don't do any heavy-handed checking here
            if ((labelledby !== undefined) && (labelledby !== null)) {
                self.attr('aria-labelledby', labelledby);
            }

            if ((label !== undefined) && (label !== null)) {
                self.attr('aria-label', label);
            }

            // add CSS class if needed
            if (className !== undefined) {
                self.addClass(className);
            }

            // add or replace text, if needed
            if (text !== undefined) {
                if (replace === false) {
                    self.append(text);
                }
                else {
                    self.empty().html(text);
                }
            }
        }
    });
})(jQuery);