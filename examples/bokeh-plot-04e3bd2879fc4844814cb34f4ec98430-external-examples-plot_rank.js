(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("c4b286b0-2bb8-4d55-95f7-cd3815d70533");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c4b286b0-2bb8-4d55-95f7-cd3815d70533' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"06c4d600-7de4-4cc1-b7dd-b60f31cd7431":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"source":{"id":"40696"}},"id":"40700","type":"CDSView"},{"attributes":{"source":{"id":"40690"}},"id":"40694","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40692","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40698","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40726","type":"VBar"},{"attributes":{},"id":"40637","type":"ResetTool"},{"attributes":{"data_source":{"id":"40690"},"glyph":{"id":"40691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40692"},"view":{"id":"40694"}},"id":"40693","type":"GlyphRenderer"},{"attributes":{},"id":"40775","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"40730"},"glyph":{"id":"40731"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40732"},"view":{"id":"40734"}},"id":"40733","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40697","type":"VBar"},{"attributes":{},"id":"40776","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40757"},"selection_policy":{"id":"40756"}},"id":"40696","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40701","type":"Span"},{"attributes":{"axis":{"id":"40663"},"ticker":null},"id":"40666","type":"Grid"},{"attributes":{"data_source":{"id":"40696"},"glyph":{"id":"40697"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40698"},"view":{"id":"40700"}},"id":"40699","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40702"},"glyph":{"id":"40703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40704"},"view":{"id":"40706"}},"id":"40705","type":"GlyphRenderer"},{"attributes":{"source":{"id":"40724"}},"id":"40728","type":"CDSView"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40707","type":"Span"},{"attributes":{"callback":null},"id":"40678","type":"HoverTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40703","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40764"},"major_label_policy":{"id":"40765"},"ticker":{"id":"40742"}},"id":"40667","type":"LinearAxis"},{"attributes":{},"id":"40760","type":"UnionRenderers"},{"attributes":{"source":{"id":"40702"}},"id":"40706","type":"CDSView"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40767"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40768"},"ticker":{"id":"40664"}},"id":"40663","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40759"},"selection_policy":{"id":"40758"}},"id":"40702","type":"ColumnDataSource"},{"attributes":{},"id":"40664","type":"BasicTicker"},{"attributes":{},"id":"40761","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40704","type":"VBar"},{"attributes":{"overlay":{"id":"40646"}},"id":"40641","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"40736"},"glyph":{"id":"40737"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40738"},"view":{"id":"40740"}},"id":"40739","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40737","type":"VBar"},{"attributes":{"axis":{"id":"40667"},"dimension":1,"ticker":null},"id":"40670","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40709","type":"VBar"},{"attributes":{"text":"mu"},"id":"40744","type":"Title"},{"attributes":{"source":{"id":"40730"}},"id":"40734","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40691","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40761"},"selection_policy":{"id":"40760"}},"id":"40708","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40679"}},"id":"40673","type":"BoxZoomTool"},{"attributes":{},"id":"40777","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40710","type":"VBar"},{"attributes":{},"id":"40672","type":"PanTool"},{"attributes":{},"id":"40671","type":"ResetTool"},{"attributes":{},"id":"40778","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40738","type":"VBar"},{"attributes":{},"id":"40677","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40741","type":"Span"},{"attributes":{},"id":"40674","type":"WheelZoomTool"},{"attributes":{"source":{"id":"40736"}},"id":"40740","type":"CDSView"},{"attributes":{"overlay":{"id":"40680"}},"id":"40675","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40778"},"selection_policy":{"id":"40777"}},"id":"40736","type":"ColumnDataSource"},{"attributes":{},"id":"40676","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40774"},"selection_policy":{"id":"40773"}},"id":"40724","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40772"},"selection_policy":{"id":"40771"}},"id":"40718","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"40645"}},"id":"40639","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"40718"},"glyph":{"id":"40719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40720"},"view":{"id":"40722"}},"id":"40721","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40645","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40719","type":"VBar"},{"attributes":{"toolbars":[{"id":"40647"},{"id":"40681"}],"tools":[{"id":"40637"},{"id":"40638"},{"id":"40639"},{"id":"40640"},{"id":"40641"},{"id":"40642"},{"id":"40643"},{"id":"40644"},{"id":"40671"},{"id":"40672"},{"id":"40673"},{"id":"40674"},{"id":"40675"},{"id":"40676"},{"id":"40677"},{"id":"40678"}]},"id":"40781","type":"ProxyToolbar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40735","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40720","type":"VBar"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40729","type":"Span"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40713","type":"Span"},{"attributes":{"toolbar":{"id":"40781"},"toolbar_location":"above"},"id":"40782","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40776"},"selection_policy":{"id":"40775"}},"id":"40730","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40723","type":"Span"},{"attributes":{},"id":"40640","type":"WheelZoomTool"},{"attributes":{"text":"tau"},"id":"40716","type":"Title"},{"attributes":{"source":{"id":"40708"}},"id":"40712","type":"CDSView"},{"attributes":{},"id":"40659","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3]},"id":"40742","type":"FixedTicker"},{"attributes":{"data_source":{"id":"40708"},"glyph":{"id":"40709"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40710"},"view":{"id":"40712"}},"id":"40711","type":"GlyphRenderer"},{"attributes":{},"id":"40630","type":"BasicTicker"},{"attributes":{"below":[{"id":"40663"}],"center":[{"id":"40666"},{"id":"40670"},{"id":"40723"},{"id":"40729"},{"id":"40735"},{"id":"40741"}],"height":331,"left":[{"id":"40667"}],"output_backend":"webgl","renderers":[{"id":"40721"},{"id":"40727"},{"id":"40733"},{"id":"40739"}],"title":{"id":"40744"},"toolbar":{"id":"40681"},"toolbar_location":null,"width":496,"x_range":{"id":"40621"},"x_scale":{"id":"40659"},"y_range":{"id":"40623"},"y_scale":{"id":"40661"}},"id":"40656","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"40718"}},"id":"40722","type":"CDSView"},{"attributes":{},"id":"40747","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40731","type":"VBar"},{"attributes":{},"id":"40754","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40679","type":"BoxAnnotation"},{"attributes":{},"id":"40755","type":"Selection"},{"attributes":{},"id":"40748","type":"AllLabels"},{"attributes":{"axis":{"id":"40633"},"dimension":1,"ticker":null},"id":"40636","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40732","type":"VBar"},{"attributes":{},"id":"40623","type":"DataRange1d"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40725","type":"VBar"},{"attributes":{},"id":"40750","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"40644","type":"HoverTool"},{"attributes":{},"id":"40771","type":"UnionRenderers"},{"attributes":{"axis":{"id":"40629"},"ticker":null},"id":"40632","type":"Grid"},{"attributes":{},"id":"40643","type":"SaveTool"},{"attributes":{},"id":"40751","type":"AllLabels"},{"attributes":{},"id":"40772","type":"Selection"},{"attributes":{},"id":"40638","type":"PanTool"},{"attributes":{},"id":"40661","type":"LinearScale"},{"attributes":{"children":[[{"id":"40620"},0,0],[{"id":"40656"},0,1]]},"id":"40780","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40680","type":"PolyAnnotation"},{"attributes":{},"id":"40625","type":"LinearScale"},{"attributes":{},"id":"40764","type":"BasicTickFormatter"},{"attributes":{},"id":"40642","type":"UndoTool"},{"attributes":{},"id":"40756","type":"UnionRenderers"},{"attributes":{"children":[{"id":"40782"},{"id":"40780"}]},"id":"40783","type":"Column"},{"attributes":{},"id":"40765","type":"AllLabels"},{"attributes":{"data_source":{"id":"40724"},"glyph":{"id":"40725"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40726"},"view":{"id":"40728"}},"id":"40727","type":"GlyphRenderer"},{"attributes":{},"id":"40757","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"40637"},{"id":"40638"},{"id":"40639"},{"id":"40640"},{"id":"40641"},{"id":"40642"},{"id":"40643"},{"id":"40644"}]},"id":"40647","type":"Toolbar"},{"attributes":{},"id":"40767","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40695","type":"Span"},{"attributes":{},"id":"40773","type":"UnionRenderers"},{"attributes":{},"id":"40768","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40646","type":"PolyAnnotation"},{"attributes":{},"id":"40774","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40755"},"selection_policy":{"id":"40754"}},"id":"40690","type":"ColumnDataSource"},{"attributes":{},"id":"40621","type":"DataRange1d"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40747"},"major_label_policy":{"id":"40748"},"ticker":{"id":"40714"}},"id":"40633","type":"LinearAxis"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40750"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40751"},"ticker":{"id":"40630"}},"id":"40629","type":"LinearAxis"},{"attributes":{"active_multi":null,"tools":[{"id":"40671"},{"id":"40672"},{"id":"40673"},{"id":"40674"},{"id":"40675"},{"id":"40676"},{"id":"40677"},{"id":"40678"}]},"id":"40681","type":"Toolbar"},{"attributes":{},"id":"40627","type":"LinearScale"},{"attributes":{},"id":"40758","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"40714","type":"FixedTicker"},{"attributes":{},"id":"40759","type":"Selection"},{"attributes":{"below":[{"id":"40629"}],"center":[{"id":"40632"},{"id":"40636"},{"id":"40695"},{"id":"40701"},{"id":"40707"},{"id":"40713"}],"height":331,"left":[{"id":"40633"}],"output_backend":"webgl","renderers":[{"id":"40693"},{"id":"40699"},{"id":"40705"},{"id":"40711"}],"title":{"id":"40716"},"toolbar":{"id":"40647"},"toolbar_location":null,"width":496,"x_range":{"id":"40621"},"x_scale":{"id":"40625"},"y_range":{"id":"40623"},"y_scale":{"id":"40627"}},"id":"40620","subtype":"Figure","type":"Plot"}],"root_ids":["40783"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"06c4d600-7de4-4cc1-b7dd-b60f31cd7431","root_ids":["40783"],"roots":{"40783":"c4b286b0-2bb8-4d55-95f7-cd3815d70533"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();