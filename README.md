# ContentManagerLabeler.js

## Note about User Scripts

_User scripts are little JavaScript snippets that run in your browser against certain websites, and can make client-side modifications or enhancements when you visit those sites. You will need a browser plugin such as TamperMonkey or GreaseMonkey to install user-scripts._

## Labeling Content Managers

A common problem when dealing with multiple Content Managers is keeping track of which of many similar browser windows is which server. `ContentManagerLabeler.js` is a user-script that recognizes when you're browsing to a Scala Content Manager. It labels both the login page and the menu-bar with a unique name based on the host name, so that it's easy to tell at a glance which one you're looking at.

By default, this script uses the hostname as the label:

![Hostname in the menu-bar](/assets/images/cmlabeler_hostname.png)

However, you can make a simple list to override any with your own preferred label. See `name_substitutions` in the JavaScript of user-script itself:

```javascript
// A set of hostname: displayname pairs. For any listed hostname, use displayname instead as the label.
var name_substitutions = {
    "123.45.67.89": "My Customer",
    "cm.example.com": "Other Customer"
};
```

![Custom label in the menu-bar](/assets/images/cmlabeler_customlabel.png)
