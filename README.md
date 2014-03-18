# jQuery Live Regions
This is a simple, easy to use plugin for managing live regions on a page.

## Creating live region
### Use Case
Live Regions allows the user of assistive technologies to be notified of content changes that may occur automatically and may not be explicitly triggered by the user. The content change may exist separate to what object has focus, and so Live Regions facilitate these notifications. Possible examples include:

* Chat logs
* Error logs
* Stock tickers
* Timers
* Progress indicators
* Form validation messages

There are many types of changes that occur in the typical web-based applications and essentially any content that changes dynamically is a candidate for a live region.


### Super simple method
```$('#foo').liveRegion();```

The above method creates a live region with default values. Modifications to the item with an ID of "foo" will be announced by assistive technology.

### Give it a label
```$('#foo').liveRegion({label: 'News Ticker'});```

This will create a live region with an ```aria-label``` of "New Ticker"

## Full list of available properties
You are not required to provide any of these values. They will be set to sensible defaults if they aren't supplied.

* labelledby - Points to an ID of another element on screen to use as a label. Becomes ```aria-labelledby``` on the live region.
* label - String of text provided to serve as a label. Becomes ```aria-label``` attribute on the live region.
* role - what type of live region is this? Options are:
  * log
  * status
  * alert
  * marquee
  * timer
  * progressbar
  * region
* atomic - Valid values are 'true' and 'false'. NOTE: these must be strings, not booleans. Non-intuitive, I know.
* live - Indicates how important the content is. Valid values are 'polite' and 'assertive'. It is best to use 'polite' unless this is an urgent notice of some kind. Becomes ```aria-live``` attribute on the live region
* relevant - what are the relevant changes you want to announce? Becomes ```aria-relevant``` on the live region.
  * additions
  * removals
  * text
  * all
* busy - is the live region busy or not. Valid values are 'true' and 'false'. As before, must be strings.

### Sample use with all available properties:

```
$('#foo').liveRegion({
    label: 'Chat Log',
    role: 'log',
    atomic: 'false',
    live: 'polite',
    relevant: 'additions text',
    busy: 'false'
});

```

## Overriding Values
There may be times when you want to override one or more of the existing values.  For instance, in the case where you're waiting for new content to arrive from Ajax:

```
// the default set up
$('#foo').liveRegion({
    label: 'Chat Log',
    role: 'log',
    atomic: 'false',
    live: 'polite',
    relevant: 'additions text',
    busy: 'false'
});

// when waiting for the new content
if(we-are-waiting-for-the-new-content){
	$('#foo').liveRegion({ 
	  busy: 'true'
	});
}

```

In the above scenario, the original settings are retained and only the ```aria-busy``` value is modified.


## More information:

A complete tutorial on live regions is out of the scope of this README.  Browse the following, for more info:

* [http://www.w3.org/WAI/PF/aria-practices/#liveprops](http://www.w3.org/WAI/PF/aria-practices/#liveprops)
* [https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)