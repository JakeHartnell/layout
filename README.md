<!--
  Title: Meteor Webcomponents Layout for Meteor Polymer integration
  Description: Layout manager for polymer/webcomponents in meteor.
  -->
# Meteor Webcomponents Layout.

## Usage

index.html

```html
<head>
  <title>Synthesis</title>
</head>

<body class="fullbleed">

  <mwc-layout id="demo-layout">
    <div region="main"></div>
  </mwc-layout>

</body>
```

```html
<dom-module id="test-element">
  <template>
        name : {{name}}
  </template>
</dom-module>
<script>
Polymer({
  is:"test-element",
  properties:{
    name:{
      type:String,
      value:"mwc"
    }
  }

})
</script>
```

Now use  

```js 
mwcLayout.render("demo-layout",{"main":"test-element"});
```

Layout Manager for [Meteor](https://www.meteor.com/) + [Polymer - 1.0](https://www.polymer-project.org/) 

Advanced Example - https://github.com/HedCET/TorrentAlert
