Ext.data.JsonP.Ext_util_Inflector({"tagname":"class","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.util.Inflector</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Inflector.html#Ext-util-Inflector' target='_blank'>Inflector.js</a></div></pre><div class='doc-contents'><p>General purpose inflector class that <a href=\"#!/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">pluralizes</a>, <a href=\"#!/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">singularizes</a> and\n<a href=\"#!/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">ordinalizes</a> words. Sample usage:</p>\n\n<pre><code>//turning singular words into plurals\nExt.util.Inflector.pluralize('word'); //'words'\nExt.util.Inflector.pluralize('person'); //'people'\nExt.util.Inflector.pluralize('sheep'); //'sheep'\n\n//turning plurals into singulars\nExt.util.Inflector.singularize('words'); //'word'\nExt.util.Inflector.singularize('people'); //'person'\nExt.util.Inflector.singularize('sheep'); //'sheep'\n\n//ordinalizing numbers\nExt.util.Inflector.ordinalize(11); //\"11th\"\nExt.util.Inflector.ordinalize(21); //\"21th\"\nExt.util.Inflector.ordinalize(1043); //\"1043rd\"\n</code></pre>\n\n<h1>Customization</h1>\n\n<p>The Inflector comes with a default set of US English pluralization rules. These can be augmented with additional\nrules if the default rules do not meet your application's requirements, or swapped out entirely for other languages.\nHere is how we might add a rule that pluralizes \"ox\" to \"oxen\":</p>\n\n<pre><code>Ext.util.Inflector.plural(/^(ox)$/i, \"$1en\");\n</code></pre>\n\n<p>Each rule consists of two items - a regular expression that matches one or more rules, and a replacement string. In\nthis case, the regular expression will only match the string \"ox\", and will replace that match with \"oxen\". Here's\nhow we could add the inverse rule:</p>\n\n<pre><code>Ext.util.Inflector.singular(/^(ox)en$/i, \"$1\");\n</code></pre>\n\n<p>Note that the ox/oxen rules are present by default.</p>\n</div><div class='members'><div id='m-property'><div class='definedBy'>Defined By</div><h3 class='members-title'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-property-self' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-callOverridden' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result after calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-callParent' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Call the parent's overridden method. ...</div><div class='long'><p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result from the superclass' method</p>\n</div></li></ul></div></div></div><div id='method-classify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-classify' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-classify' class='name expandable'>classify</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> word</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the correct Model name for a given string. ...</div><div class='long'><p>Returns the correct <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The word to classify</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The classified version of the word</p>\n</div></li></ul></div></div></div><div id='method-clearPlurals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-clearPlurals' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-clearPlurals' class='name expandable'>clearPlurals</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all registered pluralization rules ...</div><div class='long'><p>Removes all registered pluralization rules</p>\n</div></div></div><div id='method-clearSingulars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-clearSingulars' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-clearSingulars' class='name expandable'>clearSingulars</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all registered singularization rules ...</div><div class='long'><p>Removes all registered singularization rules</p>\n</div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-initConfig' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-isTransnumeral' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-isTransnumeral' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-isTransnumeral' class='name expandable'>isTransnumeral</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> word</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. ...</div><div class='long'><p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The word to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>True if the word is transnumeral</p>\n</div></li></ul></div></div></div><div id='method-ordinalize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-ordinalize' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-ordinalize' class='name expandable'>ordinalize</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> number</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. ...</div><div class='long'><p>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number to ordinalize</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The ordinalized number</p>\n</div></li></ul></div></div></div><div id='method-plural' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-plural' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-plural' class='name expandable'>plural</a>( <span class='pre'><a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a> matcher, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> replacer</span> )</div><div class='description'><div class='short'>Adds a new pluralization rule to the Inflector. ...</div><div class='long'><p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matcher</span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><div class='sub-desc'><p>The matcher regex</p>\n</div></li><li><span class='pre'>replacer</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The replacement string, which can reference matches from the matcher argument</p>\n</div></li></ul></div></div></div><div id='method-pluralize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-pluralize' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-pluralize' class='name expandable'>pluralize</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> word</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the pluralized form of a word (e.g. ...</div><div class='long'><p>Returns the pluralized form of a word (e.g. Ext.util.Inflector.pluralize('word') returns 'words')</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The word to pluralize</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The pluralized form of the word</p>\n</div></li></ul></div></div></div><div id='method-singular' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-singular' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-singular' class='name expandable'>singular</a>( <span class='pre'><a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a> matcher, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> replacer</span> )</div><div class='description'><div class='short'>Adds a new singularization rule to the Inflector. ...</div><div class='long'><p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matcher</span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><div class='sub-desc'><p>The matcher regex</p>\n</div></li><li><span class='pre'>replacer</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The replacement string, which can reference matches from the matcher argument</p>\n</div></li></ul></div></div></div><div id='method-singularize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Inflector' rel='Ext.util.Inflector' class='definedIn docClass'>Ext.util.Inflector</a><br/><a href='source/Inflector.html#Ext-util-Inflector-method-singularize' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-singularize' class='name expandable'>singularize</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> word</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the singularized form of a word (e.g. ...</div><div class='long'><p>Returns the singularized form of a word (e.g. Ext.util.Inflector.singularize('words') returns 'word')</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The word to singularize</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The singularized form of the word</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='definedIn docClass'>Ext.Base</a><br/><a href='source/Base3.html#Ext-Base-method-statics' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected-signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","allMixins":[],"meta":{},"requires":[],"deprecated":null,"extends":"Ext.Base","inheritable":false,"static":false,"superclasses":["Ext.Base","Ext.util.Inflector"],"singleton":true,"code_type":"ext_define","alias":null,"statics":{"property":[],"css_var":[],"css_mixin":[],"cfg":[],"method":[],"event":[]},"subclasses":[],"uses":[],"protected":false,"mixins":[],"members":{"property":[{"tagname":"property","deprecated":null,"static":false,"owner":"Ext.Base","template":null,"required":null,"protected":true,"name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"cfg":[],"method":[{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"callOverridden","id":"method-callOverridden"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"callParent","id":"method-callParent"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"classify","id":"method-classify"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"clearPlurals","id":"method-clearPlurals"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"clearSingulars","id":"method-clearSingulars"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"initConfig","id":"method-initConfig"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"isTransnumeral","id":"method-isTransnumeral"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"ordinalize","id":"method-ordinalize"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"plural","id":"method-plural"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"pluralize","id":"method-pluralize"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"singular","id":"method-singular"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.util.Inflector","template":false,"required":null,"protected":false,"name":"singularize","id":"method-singularize"},{"tagname":"method","deprecated":null,"static":false,"owner":"Ext.Base","template":false,"required":null,"protected":true,"name":"statics","id":"method-statics"}],"event":[]},"private":false,"component":false,"name":"Ext.util.Inflector","alternateClassNames":[],"id":"class-Ext.util.Inflector","mixedInto":[],"xtypes":{},"files":[{"href":"Inflector.html#Ext-util-Inflector","filename":"Inflector.js"}]});